import React, {Component} from 'react';

class Section5 extends Component {
    render() {
        return (
            <div>
                <div className="getInTouchWrapper">
                    <div className="getInTouchTitleText">
                        <h3>get in touch</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et.ur adipis cing elit, sed do eiusmod tempor incididunt ut labore et. ur adipis cing elit,
                            sed do
                            eiusmod tempor incididunt ut labore et.</p>
                        <hr className="meetOurTeamHr"></hr>
                    </div>
                    <div className="contactInfoWrapper">
                        <form action="" className="sendMailForm">
                            <input placeholder="Name" type="text"></input>
                            <input placeholder="Your Mail" type="email"></input>
                            <textarea placeholder="Type your message">
                            </textarea>
                            <button className="sendMessageButt" type="button">send message</button>
                        </form>
                        <div className="contactInfoBlackBlockWrapper">
                            <h5>contact info</h5>
                            <p style={{
                                margin: `41px 0 27px 79px`
                            }}>Jalalabad 24 / A, Ambaarkhana, Sylhet,
                                Bangladesh</p>
                            <p>redwan@deviserweb.com</p>
                            <p style={{
                                margin: `33px 0 0 79px`
                            }}>(+88) 017 617 46373</p>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Section5