interface ConnectProps {
    WrappedComponent: React.ComponentType<any>

}
const withConnect = ({WrappedComponent}:ConnectProps ) => {
    return function Connect(props:any) {
        return <WrappedComponent {...props} />
    }
}

export default withConnect;