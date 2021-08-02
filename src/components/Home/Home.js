import React, { Component } from "react";
import { Button } from "reactstrap";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default class Home extends Component {
    state = {
        navigate: false,
        user: [],
    };

    onLogoutHandler = () => {
        localStorage.clear();
        this.setState({
            navigate: true,
        });
    };

    componentDidMount() {
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('access_token')
            }
        };
        let url = process.env.REACT_APP_API_ENDPOINT + "/auth/user-profile";
        axios.get(url, config).then((response) => {
            if (response.status === 200 && response.data) {
                this.setState({
                    user: response.data,
                });
            }
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            // console.log('Experiment completed');
        });
    };

    render() {
        const navigate = this.state.navigate;
        const user = this.state.user;
        if (navigate) {
            return <Redirect to="/" push={true} />;
        }
        return (
            <div className="container border">
                <h3> HomePage</h3>
                <div className="row">
                    <div className="col-xl-9 col-sm-12 col-md-9 text-dark">
                        <h5> Welcome, {user.first_name} </h5> You have Logged in
                        successfully.
                    </div>
                    <div className="col-xl-3 col-sm-12 col-md-3">
                        <Button className="btn btn-primary text-right" onClick={this.onLogoutHandler}>
                            Logout
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}