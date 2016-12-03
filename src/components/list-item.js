import React from 'react';
export default class ListItem extends React.Component {
  constructor(props){
    super(props);
    //this.onSaveClick = this.onSaveClick.bind(this);
    this.state = {
      isEditing : false
    };
  }
  onSaveClick(event){
    event.preventDefault();
    const newValue= this.refs.editInput.value;
    this.props.saveTask(this.props.task,newValue);
    this.setState({isEditing : false})
  }
  onEditClick(){
    this.setState({isEditing : true})
  }
  onCancelClick(){
    this.setState({isEditing : false })
  }
  renderTaskSection(){
    const {task, isCompleted} = this.props;
    const taskStyle= {
      color: isCompleted? 'green': 'red',
      cursor: 'pointer'
    };
    if(this.state.isEditing)
      return (
        <td>
          <form onSubmit = {this.onSaveClick.bind(this)}>
            <input defaultValue= {task} ref="editInput"/>
          </form>
        </td>
      );
    return(
      <td style={taskStyle} onClick = {this.props.toggleTask.bind(null, task)}>
        {task}
      </td>
    );
  }
  renderActionSection(){
     if(this.state.isEditing)
     {
       return (
         <td>
           <button onClick ={this.onSaveClick }>Save </button>
           <button type="button" onClick={this.onCancelClick.bind(this)}>Cancel</button>
         </td>
       )
     }
     return (
       <td>
         <button onClick ={this.onEditClick }>Edit </button>
         <button onClick ={this.props.deleteTask.bind(null, this.props.task)} >Delete</button>
       </td>
    )
  }
  render() {
    return(
      <tr>
        {this.renderTaskSection()}
        {this.renderActionSection()}
      </tr>
    );
  }
}
