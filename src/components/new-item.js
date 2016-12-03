import React from 'react';
export default class NewItem extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      error: null
    };
  }
  handleCreate(event){
    event.preventDefault();
    const createInput = this.refs.newItemInput;
    const task= createInput.value;
    const validateInput = this.validateInput(task);
    if(validateInput){
      console.log(validateInput);
      this.setState({ error :  validateInput});
      //console.log(this.state.error);
    }
    else{
      this.setState({ error : null });
      this.props.createTask(task);
      createInput.value = "";
    }
  }
  renderError(){
    if(!this.state.error)
      return null;
    else
      return(<div>{this.state.error}</div>)
  }
  validateInput(task){
    if(!task)
      return "please enter a task";
    else if (_.find(this.props.todos, todo => todo.task === task)){
        return 'Task already exists';
    }
    else return null;
  }
  render() {
    return(
      <form onSubmit= {this.handleCreate.bind(this)} >
        <input placeholder=" What do I need to do next??" ref="newItemInput"/>
        <button type="submit">Create</button>
        {this.renderError()}
      </form>
    );
  }
}
