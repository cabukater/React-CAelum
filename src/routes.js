import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
//	Páginas
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
class PrivateRoute extends React.Component {
    estaAutenticado = () => {
        if (localStorage.getItem('TOKEN')) {
            return <component{...props} />
        } else {
            return <Redirect to="/login" />
        }
    }
}

class Roteamento extends React.Component {
    render() {
        const { component: Component, ...props } = this.props
        if (this.estaAutenticado()) {
            return <Component	{...props} />
        } else {
            return <Redirect to="/login" />
        }
    }
}

export default Roteamento;