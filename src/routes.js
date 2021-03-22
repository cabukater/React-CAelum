import React from "react";
import { Switch, Route } from "react-router-dom";
	import	{	Redirect	}	from	'react-router-dom'
//	Páginas
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
class Roteamento extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/login" component={LoginPage} />
            </Switch>
        );
    }

}

class PrivateRoute extends React.Component {
    estaAutenticado = () => {
        if (localStorage.getItem('TOKEN')) {
            return true
        } else {
            return false
        }
    }

render()	{
    const	{	component:	Component,	...props	}	=	this.props
    if(this.estaAutenticado())	{
                    return <Component	{...props}	/>
    }	else	{
                    return	<Redirect to="/loginPage"	/>
    }
}
}

export default Roteamento;