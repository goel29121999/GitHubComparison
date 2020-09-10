import React, {Fragment} from 'react';

class ProfileImage extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        let {name, avatar_url: image, html_url: link} = this.props.profile
        return (
            <Fragment>
                <div className="card">
                    <div className="container1">
                        <img src={image} alt="Avatar" className="image1 mt-1"/>
                        <div className="middle1">
                            <div className="text1">
                                <a href={link} target="_blank" className="ant-skeleton-button">
                                    <h3 className="ant-descriptions-title" style={{ textAlign: "center"}}>{name}</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

}
export default ProfileImage;