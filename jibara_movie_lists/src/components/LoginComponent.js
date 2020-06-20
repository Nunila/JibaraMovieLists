import React, {useContext} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';
import favicon from '../assets/images/favicon.ico';
import PropTypes, {func} from 'prop-types';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import UserContext from "../state/UserContext";
import LoginButton from "./LoginButton";


class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            email: "",
            password: "",
            userName: "",
            lists: ""
        };

        this.updatePass = this.updatePass.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    goToHome() {
        let path = `home`;
        this.props.history.push(path);
    }
    render() {
        const { classes } = this.props;
        return (
            <UserContext.Consumer>
                { context => (
                <Grid container component="main" className={classes.root}>
                    <CssBaseline />
                    <Grid item xs={false} sm={4} md={7} className={classes.image} />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar} src={favicon}>
                                {/*<LockOutlinedIcon />*/}
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <form className={classes.form} noValidate>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={this.state.email}
                                    onChange={this.updateEmail}
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={this.state.password}
                                    onChange={this.updatePass}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />


                                <Button
                                    // type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={[classes.submit, classes.gradientBack].join(" ")}
                                    onClick={this.loginUser}
                                >
                                    Sign In
                                </Button>


                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                                <Box mt={5}>
                                    <Typography variant="body2" color="textSecondary" align="center">
                                        {'Copyright © '}
                                        <Link color="inherit" href="https://material-ui.com/">
                                            Your Website
                                        </Link>{' '}
                                        {new Date().getFullYear()}
                                        {'.'}
                                    </Typography>
                                </Box>
                            </form>
                        </div>
                    </Grid>
                </Grid>
                )}
            </UserContext.Consumer>
        );
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
    }
    updatePass(event) {
        this.setState({password: event.target.value});
    }

    loginUser() {
        console.log(this.state.email);
        console.log(this.state.password)

        let config = {
            headers: {
                'Access-Control-Allow-Origin': "*",
                'Content-Type': 'application/json',
            }
        }

        axios.post(`http://localhost:5000/login`, { email: this.state.email,
            password: this.state.password }, config)
            .then(res => {
                console.log(res);
                console.log(res.data);

                this.setState({userName: res.data.name, lists: res.data['user_lists']});

                this.goToHome()
            })
            .catch(e => {
                // alert("Error message: " + e.response.data.message + "\nStatus Code: " + e.response.status)
                console.log(e)
            })
    }

}

LoginComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = theme => ({
    root: {
        height: '100vh',
    },
    image: {
        // Movie poster collage
        backgroundImage: 'url(https://moviesfilmsandflix.files.wordpress.com/2013/03/massive-b-horror-collage-wallpaper-horror-movies-29491579-2560-1600.jpg)',
        // Random cat gif
        // backgroundImage: 'url(http://thecatapi.com/api/images/get?format=src&type=gif)',

        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        // backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    gradientBack: {
        background: "linear-gradient(90deg,#de6262 10%,#ffb88c 90%)"
    }
});

export default withRouter(withStyles(styles)(LoginComponent));
