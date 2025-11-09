import React, {type PropsWithChildren, useMemo, useReducer} from "react";
import * as signalR from "@microsoft/signalr";

interface ConnectState {
    connection: signalR.HubConnection | null;
}

const ACTION_TYPES = {
    CREATE_CONNECTION: "CREATE_CONNECTION",
    REMOVE_CONNECTION: "REMOVE_CONNECTION",
} as const;

type ConnectAction =
    | { type: "CREATE_CONNECTION"; connection: signalR.HubConnection }
    | { type: "REMOVE_CONNECTION" };

interface ConnectContextValue {
    connection: signalR.HubConnection | null;
    dispatch: React.Dispatch<ConnectAction>
}

const initialState: ConnectState = {
    connection: null,
}

export const ConnectContext = React.createContext<ConnectContextValue | null>(null);

const reducer = (state: ConnectState, action: ConnectAction): ConnectState => {
    switch (action.type) {
        case ACTION_TYPES.CREATE_CONNECTION: {
            return { connection: action.connection}
        }
        case ACTION_TYPES.REMOVE_CONNECTION: {
            if (state.connection) {
                state.connection.stop().catch(console.error);
            }
            return { connection: null };
        }
        default:
            return state;
    }
}


export const ConnectContextProvider = ({ children }:PropsWithChildren) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const contextValue:ConnectContextValue = useMemo(
        () => ({
            connection: state.connection,
            dispatch,
        }),
        [state.connection]
    );
    
    return (
        <ConnectContext.Provider value={contextValue}>
            {children}
        </ConnectContext.Provider>
    )
}