// import Button from "@material-ui/core/Button";
// import React from "react";
// import UserContext from "../state/UserContext";
// import axios from "axios";
//
// export default class LoginComponent extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             date: new Date(),
//             email: "",
//             password: "",
//         };
//
//         this.updatePass = this.updatePass.bind(this);
//         this.updateEmail = this.updateEmail.bind(this);
//         this.loginUser = this.loginUser.bind(this);
//     }
//
//     render() {
//         return <Button
//             // type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={[classes.submit, classes.gradientBack].join(" ")}
//             onClick={this.loginUser}
//         >
//             Sign In
//         </Button>
//     }
// }
//
// function ThemedButton() {
//     // const theme = React.useContext(UserContext);
//     return (
//
//     );
// }
//
// function loginUser() {
//     console.log(this.state.email);
//     console.log(this.state.password)
//     const contextVal = React.useContext(UserContext);
//
//
//     let config = {
//         headers: {
//             'Access-Control-Allow-Origin': "*",
//             'Content-Type': 'application/json',
//         }
//     }
//
//     axios.post(`http://localhost:5000/login`, { email: this.state.email,
//         password: this.state.password }, config)
//         .then(res => {
//             console.log(res);
//             console.log(res.data);
//
//             // contextVal.setUserInfo(res.data.name, res.data['user_lists']);
//
//             this.goToHome()
//         })
//         .catch(e => {
//             // alert("Error message: " + e.response.data.message + "\nStatus Code: " + e.response.status)
//             console.log(e)
//         })
// }
//
