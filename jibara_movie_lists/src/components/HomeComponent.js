import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import UserContext from "../state/UserContext";


class HomeComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogged : false,
        };

        console.log("props")
        console.log(this.props.parentState)

        // this.updatePass = this.updatePass.bind(this);
        // this.updateEmail = this.updateEmail.bind(this);
        // this.loginUser = this.loginUser.bind(this);

    }
    render() {
        // const { classes } = this.props;
        return (
            <UserContext.Consumer>
                {context => (
                    <div>
                        <h1> WELCOME </h1>
                        <h2> {context.userName} </h2>
                        <h2> {context.lists} </h2>
                    </div>

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


}

HomeComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = theme => ({
    gradientBack: {
        background: "linear-gradient(90deg,#de6262 10%,#ffb88c 90%)"
    }
});

export default withStyles(styles)(HomeComponent);
