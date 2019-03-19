import React, {Component} from 'react';
import accountPhoto from '../img/wallpaper-game-of-thrones-winter-is-coming-9-wallpaper.jpg';

class Section3 extends Component {
    render() {
        return (
            <div>
                <div className="meetOurTeamWrapper">
                    <div className="meetOurTeamTitleText">
                        <h3>meet our team</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing eiusmod tempor incididut
                            labore Ui /
                            Ux , print template.</p>
                        <hr className="meetOurTeamHr"></hr>
                    </div>
                    <div className="teamPortfolioWrapper">
                        <img className="accountPhoto"
                             src={accountPhoto} alt=""></img>
                            <div className="teamPortfolioRightDiv">
                                <div className="teamPortfolioText">
                                    <h3>mark waugh</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing eiusmod
                                        tempor incididut
                                        labore Ui / Ux , print template.</p>
                                    <div className="teamNetworkWrapper">
                                        <a href="https://m.facebook.com/home.php" target="_blank">Facebook</a>
                                        <a href="https://dribbble.com/" target="_blank">Dribble</a>
                                        <a href="https://www.behance.net/" target="_blank">Behance</a>
                                        <a href="https://twitter.com/" target="_blank">Twiter</a>
                                    </div>
                                </div>
                                <div className="teamPhotoWrapper">
                                    <div>
                                        <img src={accountPhoto}
                                             alt=""></img>
                                            <div className="accountNameOnPhoto">
                                                <p>Lorem ipsum</p>
                                            </div>
                                    </div>
                                    <div>
                                        <img src={accountPhoto}
                                             alt=""></img>
                                            <div className="accountNameOnPhoto">
                                                <p>Lorem ipsum</p>

                                            </div>
                                    </div>
                                    <div>
                                        <img src={accountPhoto}
                                             alt=""></img>
                                            <div className="accountNameOnPhoto">
                                                <p>Lorem ipsum</p>

                                            </div>
                                    </div>
                                    <div>
                                        <img src={accountPhoto}
                                             alt=""></img>
                                            <div className="accountNameOnPhoto">
                                                <p>Lorem ipsum</p>

                                            </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Section3