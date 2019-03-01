import React, { Component } from 'react';

class Page extends Component {
    render(){
        var pageContent;
        if(this.props.currentPage == 'home'){
          pageContent = 'This is the home page';
        } else if(this.props.currentPage == 'about'){
          pageContent = 'This is the about page';
        } else if(this.props.currentPage == 'contact'){
          pageContent = 'This is the contact page';
        }
        // my

        else if (this.props.currentPage == `register`) {
            pageContent = 'This is the register page';
        }
        else if (this.props.currentPage == `login`) {
            pageContent = 'This is the login page';
        }

        // my
        else {
          pageContent = 'This is the home page';
        }
        return(
          <div>
            <div className="container">
              <h2>{this.props.currentPage.charAt(0).toUpperCase() + this.props.currentPage.slice(1)}</h2>
              {pageContent}
            </div>
          </div>
        );
      }
}

export default Page;