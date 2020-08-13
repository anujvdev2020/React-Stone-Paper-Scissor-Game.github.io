import React from 'react'

export default class User extends React.Component{

  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this)

  }

handleChange(e){
const option=e.target.value;
this.props.onChange(option)
}
render(){
  return (
      <div className="User">
        <select
          id="great-names"
          onChange={this.handleChange}>

          <option value="Stone">Stone</option>
          <option value="Paper">Paper</option>
          <option value="Scissor">Scissor</option>
        </select>
      </div>
  )
}


}