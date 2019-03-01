import React from 'react';

class Life extends React.Component {

    constructor() {
        super();
        this.state = {
            number: 1
        }
    }
    componentWillMount() {
       console.log('Will Mount - 1')
    }
    componentDidMount() {
       console.log('Did Mount - 2')
    }
    componentWillReceiveProps(newProps) {  
       console.log('Will Receive Props - 3')
    }
    shouldComponentUpdate(newProps, newState) {
        console.log('Should Be Updated - 4')
       return true;
    }
    componentWillUpdate(nextProps, nextState) {
       console.log('Will Update - 5');
    }
    componentDidUpdate(prevProps, prevState) {
       console.log('Updated - 6')
    }
    componentWillUnmount() {
       console.log('Done - 7')
    }
    render() {
       return (
          <div>
             <h3>{this.props.myNumber}</h3>
          </div>
       );
    }
 }

 export default Life;