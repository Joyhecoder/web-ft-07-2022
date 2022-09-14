import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
        
        super(props)  //initialize base class (parent class)
        this.state ={
            count: 0
        }
    }

    handleAddClick = () => {
        // this.state.count++
        this.setState( state =>{
            return {
                count: state.count + 1
            }
        })
        
    }


    //this is whwat get called by the react library
  render() {

    let {count} = this.state  //destructuring same as let count = this.state.count

    //returning jsx here
    return (
      <>
        hello world <br />

        <h1>{count}</h1>

        <button onClick= {this.handleAddClick}>Increment count</button>
      </>
    )
  }
}

export default Counter
