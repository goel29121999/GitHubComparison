import React, {Fragment} from "react";
import UserProfile from "./UserProfile";
import Axios from "axios";
import {clientId, clientSecret} from "./LoginRequests";
import Repositories from "./Repositories";
import WhoIsFollower from "./WhoIsFollower";
import WhomFollowing from "./WhomFollowing";

class Api extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            username : '',
            profile : null,
            repos : null,
            followers: null,
            following: null
        }
    }

    takeInput = (a) => {
        this.setState({
            ...this.state,
            username : a.target.value
        })
    }


    Compare = (a) => {
        a.preventDefault();
        this.User();
        this.Follow();
        this.Following();
        this.Repository();
    }

    User = () => {
        Axios.get(`https://api.github.com/users/${this.state.username}?clientId=${clientId}&clientSecret=${clientSecret}`)
            .then((get) => {
                this.setState({
                    profile : get.data
                })
            }).catch((handle) => {
            console.error(handle)
        })
    }

    Follow = () => {
        Axios.get(`https://api.github.com/users/${this.state.username}/followers?clientId=
        ${clientId}&clientSecret=${clientSecret}`)
            .then((get) => {
                this.setState({
                    followers : get.data
                })
            }).catch((handle) => {
            console.error(handle)
        })
    }

    Following = () => {
        Axios.get(`https://api.github.com/users/${this.state.username}/following?clientId=
        ${clientId}&clientSecret=${clientSecret}`)
            .then((get) => {
                this.setState({
                    following : get.data
                })
            }).catch((handle) => {
            console.error(handle)
        })
    }

    Repository = () => {
        Axios.get(`https://api.github.com/users/${this.state.username}/repos?clientId=
        ${clientId}&clientSecret=${clientSecret}`)
            .then((get) => {
                this.setState({
                    repos : get.data
                })
            }).catch((handle) => {
            console.error(handle)
        })
    }

    render() {
        return (
            <Fragment>

                <div className="container mt-4">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <h3 style={{textAlignVertical: "center", textAlign: "center",}}>Github User Search</h3>
                                </div>
                                <div className="card-body">
                                    <form className="form-inline" onSubmit={this.Compare}>
                                        <div className="form-group">
                                            <input
                                                value={this.state.username}
                                                onChange={this.takeInput}
                                                style={{ textAlign: "center"}}
                                                size="111"
                                                type="text"
                                                className="form-control"
                                                placeholder="User Name"/>
                                        </div>
                                        <div>
                                            <input type="Submit" value="Compare" className="btn btn-amber btn-sm"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            {
                                this.state.profile ?
                                    <UserProfile profile={this.state.profile}/> : null
                            }
                        </div>
                    </div>
                </div>

                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            {
                                this.state.followers ?
                                    <WhoIsFollower followers={this.state.followers}/> : null
                            }
                        </div>
                    </div>
                </div>

                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            {
                                this.state.following ?
                                    <WhomFollowing following={this.state.following}/> : null
                            }
                        </div>
                    </div>
                </div>

                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            {
                                this.state.repos ?
                                    <Repositories repos={this.state.repos}/> : null
                            }
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Api