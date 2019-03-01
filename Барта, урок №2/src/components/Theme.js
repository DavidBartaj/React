import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import Page from './Page';
import Navbar from './Navbar';
import Register from './Register'
import Login from './Login';

class Theme extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: 'login'
        };
        this.handleChange = this.handleChange.bind( this );
    }

    handleChange(page) {
        this.setState({
            currentPage: page
        });
    }

    render(){
        var jumbotron;
        var register;
        var login;
        if(this.state.currentPage == 'home'){
          jumbotron = <Jumbotron heading={this.props.heading} text={this.props.text} />;
            return(
                <div>
                    <Navbar currentPage={this.state.currentPage} brand={this.props.brand} change={this.handleChange} />
                    {jumbotron}
                    <Page currentPage={this.state.currentPage} />
                </div>
            );
        }
        else if (this.state.currentPage == 'register') {
            register=<Register heading={this.props.heading} text={this.props.text} />;
            return(
                <div>
                    <Navbar currentPage={this.state.currentPage} brand={this.props.brand} change={this.handleChange} />
                    {register}
                    <Page currentPage={this.state.currentPage} />
                </div>
            );
        }
        else if (this.state.currentPage == 'login') {
            login=<Login heading={this.props.heading} text={this.props.text} />;
            return(
                <div>
                    <Navbar currentPage={this.state.currentPage} brand={this.props.brand} change={this.handleChange} />
                    {login}
                    <Page currentPage={this.state.currentPage} />
                </div>
            );
        }else {
            jumbotron = '';
            return(
                <div>
                    <Navbar currentPage={this.state.currentPage} brand={this.props.brand} change={this.handleChange} />
                    {jumbotron}
                    <Page currentPage={this.state.currentPage} />
                </div>
            );
        }

      }
}

Theme.defaultProps = {
    brand:'React.JS - Logos',
    heading:'Hello, world!',
    text:'This is demo application created by me'
};

export default Theme;