// import React from 'react';
// import UserContext from "./state/UserContext";
//
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.toggleTheme = () => {
//             this.setState(state => ({
//                 theme:
//                     state.theme === themes.dark
//                         ? themes.light
//                         : themes.dark,
//             }));
//         };
//
//         // State also contains the updater function so it will
//         // be passed down into the context provider
//         this.state = {
//             theme: themes.light,
//             toggleTheme: this.toggleTheme,
//         };
//     }
//
//     render() {
//         // The entire state is passed to the provider
//         return (
//             <UserContext.UserProvider value={this.state}>
//                 <Content />
//             </UserContext.UserProvider>
//         );
//     }
// }
//
// export default App;
