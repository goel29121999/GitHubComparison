import React, {Fragment} from "react";

class WhoIsFollower extends React.Component{

    constructor(props) {
        super(props);
    }
    render(){
        return(
            <Fragment>
                <div className="card">
                    <div className="card-header bg-light text-black-50">
                        <h3>Followers</h3>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            {
                                this.props.followers.map((follow) => {
                                    return(
                                        <li className="list-group-item d-flex justify-content-md-between">
                                            <a href={follow.html_url} target="_blank">{follow.login}</a>
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
export default WhoIsFollower;