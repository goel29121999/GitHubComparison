import React, {Fragment} from 'react';

class ProfileDetails extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        let {followers, public_repos, public_gists, following, name, email, bio,location, blog, profile_url,
            created_at, updated_at, twitter_username, company} = this.props.profile
        return (
            <Fragment>
                <div className="ant-card">
                    <div className="ant-card-head bg-light" style={{ textAlign: "center"}}>
                        <span className="badge badge-primary mx-5">{followers}  Followers</span>
                        <span className="badge badge-success mx-5">{public_repos}  Repositories</span>
                        <span className="badge badge-default mx-5">{public_gists}  Gists</span>
                        <span className="badge badge-secondary mx-5">{following}  Following</span>
                    </div>
                    <div className="ant-card-body mt-2">
                        <ul className="ant-upload-list mt-3">
                            <li className="ant-list-items ml-3">
                                Name => {name}
                            </li>
                            <li className="ant-list-items ml-3">
                                Bio => {bio}
                            </li>
                            <li className="ant-list-items ml-3">
                                Email-address => {email}
                            </li>
                            <li className="ant-list-items ml-3">
                                Location => {location}
                            </li>
                            <li className="ant-list-items ml-3">
                                Blog Link => {blog}
                            </li>
                            <li className="ant-list-items ml-3">
                                Profile Link => {profile_url}
                            </li>
                            <li className="ant-list-items ml-3">
                                Created At => {created_at}
                            </li>
                            <li className="ant-list-items ml-3">
                                Updated At => {updated_at}
                            </li>
                            <li className="ant-list-items ml-3">
                                Twitter User Handle => {twitter_username}
                            </li>
                            <li className="ant-list-items ml-3">
                                Company => {company}
                            </li>
                        </ul>
                    </div>
                </div>
            </Fragment>
        )
    }

}
export default ProfileDetails;