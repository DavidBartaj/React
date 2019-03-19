import React, {Component} from 'react';
import Nav from './Nav';
import video from '../video/Snowboarding.mp4';

class Header extends Component {
    render() {
        return (
            <div>
                <header className="headerFullScreen">
                   <Nav></Nav>
                    <div className="headerContentWrapper">
                        <div className="headerContentTextWrapper">
                            <h1>our strong organaisation</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor
                                incididunt ut labore et.
                                ectetur adig ipis cing elit, sed do eiusmod tempor incididunt.</p>
                            <button className="contactUsButt" type="button">Contact Us</button>
                        </div>
                        <div className="headerContentVideoWrapper">
                            <video src={video} controls loop></video>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header