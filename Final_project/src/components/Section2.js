import React, {Component} from 'react';
import imgPreloader from '../img/videoPreloader.jpg';

class Section2 extends Component {
    render() {
        return (
            <div>
                <hr className="bigSilverHr"></hr>

                <div className="featureProductsWrapper">
                    <div className="titleText">
                        <h3>feature products</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit,sed do eiusmod tempor incididunt ut
                            labore
                            et.</p>
                        <hr className="featureProductsHr"></hr>
                    </div>
                    <div className="featureProductsNavWrapper">
                        <ul className="featureProductsNav">
                            <li>all</li>
                            <li>print template</li>
                            <li>web template</li>
                            <li>user interface</li>
                            <li>mock-up</li>
                        </ul>
                    </div>
                    <div className="featureProductsImgWrapper">
                        <img src={imgPreloader} alt=""></img>
                        <img src={imgPreloader} alt=""></img>
                        <img src={imgPreloader} alt=""></img>
                        <img src={imgPreloader} alt=""></img>
                        <img src={imgPreloader} alt=""></img>
                        <img src={imgPreloader} alt=""></img>
                        <img src={imgPreloader} alt=""></img>
                        <img src={imgPreloader} alt=""></img>
                    </div>

                </div>

            </div>
        );
    }
}

export default Section2



