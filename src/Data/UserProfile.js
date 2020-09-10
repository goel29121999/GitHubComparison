import React from 'react';
import ProfileImage from "./ProfileImage";
import ProfileDetails from "./ProfileDeatails";

class UserProfile extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 mt-2">
                            {
                                Object.keys(this.props).length !== 0 ?
                                    <ProfileDetails profile={this.props.profile}/> : null
                            }
                        </div>
                        <div className="col-md-3 mt-2">
                            {
                                Object.keys(this.props).length !== 0 ?
                                    <ProfileImage profile={this.props.profile}/> : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile;