import { Component } from "react/cjs/react.production.min";
import ErrorMessage from "../errorMessage/ErrorMessage";

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState ({error: true})
    }
    //setState который работает только с ошибкой, обновляет только сосстояние. никаких других операций не должно быть
    /* static getDerivadStateFromError(error) {
        return {error: true}
    } */

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;