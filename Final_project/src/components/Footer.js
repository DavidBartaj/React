import React, {Component} from 'react';

import facebookIcon from '../icons/1468368389_Facebook_Rounded_Solid.png';
import twitterIcon from '../icons/1468368398_Twitter_Rounded_Solid.png';
import linkedInIcon from '../icons/1468368407_LinkedIn_Rounded_Solid.png';
import googlePlusIcon from '../icons/1468368412_Google_Rounded_Solid.png';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footerFullScreenWrapper">
                    <div className="footerContentWrapper">
                        <p>© Copyright @Junaed 2016, All rights reserved.</p>
                        <div className="socialMediaFooterWrapper">
                            <a href="https://twitter.com/" target="_blank">
                                <img src={twitterIcon} alt=""></img></a>
                            <a href="https://www.linkedin.com/feed/" target="_blank">
                                <img src={linkedInIcon} alt=""></img></a>
                            <a href="https://plus.google.com/" target="_blank">
                                <img src={googlePlusIcon} alt=""></img></a>
                            <a href="https://m.facebook.com/" target="_blank">
                                <img src={facebookIcon} alt=""></img></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer