import React, {Fragment} from "react";

class WhomFollowing extends React.Component{

    constructor(props) {
        super(props);
    }
    render(){
        return(
            <Fragment>
                <div className="card">
                    <div className="card-header bg-light text-black-50">
                        <h3>Following</h3>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            {
                                this.props.following.map((following) => {
                                    return(
                                        <li className="list-group-item d-flex justify-content-md-between">
                                            <a href={following.html_url} target="_blank">{following.login}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default WhomFollowing;