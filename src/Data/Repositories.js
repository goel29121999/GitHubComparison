import React, {Fragment} from "react";

class Repositories extends React.Component{

    constructor(props) {
        super(props);
    }
    render(){
        return(
            <Fragment>
                <div className="card">
                    <div className="card-header bg-light text-black-50">
                        <h3>Repositories</h3>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            {
                                this.props.repos.map((repo) => {
                                    return(
                                        <li className="list-group-item d-flex justify-content-md-between">
                                                <a href={repo.html_url} target="_blank">{repo.name}</a>
                                                <span className="ant-badge badge-secondary">{repo.watchers_count} Views</span>
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
export default Repositories;