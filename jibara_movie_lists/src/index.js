import React from 'react';
import ReactDOM from 'react-dom';
import RouterConfig from "./router";
import Provider from "./state/Provider"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const darkTheme = createMuiTheme({
                                     palette: {
                                         type: 'dark',
                                     }
                                 });

const wrapper = <Provider>
        <ThemeProvider theme={darkTheme}>
        <RouterConfig/>
    </ThemeProvider>
</Provider>


ReactDOM.render(
    wrapper,
    document.getElementById('root')
);
