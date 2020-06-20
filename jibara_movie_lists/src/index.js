import React from 'react';
import ReactDOM from 'react-dom';
import RouterConfig from "./router";
import UserProvider from "./state/UserProvider"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const darkTheme = createMuiTheme({
                                     palette: {
                                         type: 'dark',
                                     }
                                 });

const wrapper =
    <UserProvider>
        <ThemeProvider theme={darkTheme}>
            <RouterConfig/>
        </ThemeProvider>
    </UserProvider>


ReactDOM.render(
    wrapper,
    document.getElementById('root')
);
