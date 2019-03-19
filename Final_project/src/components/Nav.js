import React, {Component} from 'react';

class Nav extends Component {
    constructor(props) {
        super(props);
        let getClass = clas => document.getElementsByClassName(clas);
        let li = getClass(`navLi`);

        console.log(li);

        this.hover = this.hover.bind(this)
    }

    hover() {
        console.log(`im work`);

        // Має змінювати колір фону при наведенні, не можу реалізувати

       /* this.li.style({
            background: `#ff3f40`,
            cursor: `pointer`
        })*/

        // Має змінювати колір фону при наведенні, не можу реалізувати


    }

    render() {
        return (
            <div>

                <div className="navWrapper">
                    <div className="categoriesWrapper">
                        <ul>
                            <li onMouseOver={this.hover} className="navLi">home</li>
                            <li onMouseOver={this.hover} className="navLi">portfolio</li>
                            <li onMouseOver={this.hover} className="navLi">about us</li>
                            <li onMouseOver={this.hover} className="navLi">contact</li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}

export default Nav