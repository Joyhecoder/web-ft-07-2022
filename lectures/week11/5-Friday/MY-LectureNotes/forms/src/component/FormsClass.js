import React, { Component } from 'react'

 class FormsClass extends Component {

    constructor() {
        super()

        this.state = {
            textValue: "",
            isValid: false,
            selectValue: ""
        }

        // this.handleForm = this.handleForm.bind(this)
    }

    handleChange = (e) => {
        let targetType = e.target.type == 'checkbox' ? e.target.checked : e.target.value
        // this.setState({textValue: e.target.value})
        let name = e.target.name;
        this.setState({
            [name]: targetType
        })
        
    }

  render() {
    let {textValue, isValid, selectValue} = this.state
    return (
      <>
      
      <h1> React Forms using Classes</h1>
      <h2>{textValue}</h2>
      <form>
        <input type="text" name="textValue" value={textValue} onChange={this.handleChange} />
        <input type="checkbox" name="isValid" value={isValid} onChange={this.handleChange} />
      </form>
      
      </>
    )
  }
}

export default FormsClass