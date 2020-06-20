import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import HomeComponent from "./components/HomeComponent";

// const routes = [
//     // {
//     //     path: "/",
//     //     redirect: "/login"
//     // },
//     {
//         path: "/login",
//         component: LoginComponent
//     },
//     {
//         path: "/home",
//         component: HomeComponent
//     },
//     // {
//     //     path: "/tacos",
//     //     component: Tacos,
//     //     routes: [
//     //         {
//     //             path: "/tacos/bus",
//     //             component: Bus
//     //         },
//     //         {
//     //             path: "/tacos/cart",
//     //             component: Cart
//     //         }
//     //     ]
//     // }
// ];

export default function RouterConfig() {
    return (
        <Router>
            <Switch>
                <Redirect exact from={"/"} to={"/login"}/>
                <Route path="/login" component={LoginComponent} />


                <Route path="/home" render={(props) => (
                    <HomeComponent {...props} />
                )} />


                {/*{routes.map((route, i) => (*/}
                {/*    <RouteWithSubRoutes key={i} {...route} />*/}
                {/*))}*/}
            </Switch>
        </Router>
    )
}

function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}
