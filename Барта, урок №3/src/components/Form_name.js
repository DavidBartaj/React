import React, {Component} from 'react'
import Question from '../components/Questions'


class Form_name extends Component {

    handleNameSubmit(event) {
        event.preventDefault();
        var name = this.refs.name.value;
        this.setState({name: name}, function () {
            console.log(this.state.name);

            return (
                <div className="App">
                    <div className="App-header text-center">
                        <h2>SimpleSurvey</h2>
                    </div>
                    <div className="text-center">
                        <h2>Welcome {name}</h2>;
                    </div>

                    {/*Треба щоб при спрацьовуванні цієї функції працював даний ретурн, в консоль виводить ім'я а в h2
                    не записує його*/}

                    <div className="container">
                        <Question></Question>
                    </div>
                </div>
            );
        });



    }

    render() {
        return (
            <span className="text-center">
                <h2>Please enter your name to begin the survey</h2>
                <form
                    onSubmit={this.handleNameSubmit.bind(this)}
                >
                    <input type="text" placeholder="Enter Name..." ref="name"/>
                </form>
            </span>


        )


    }

}

export default Form_name

