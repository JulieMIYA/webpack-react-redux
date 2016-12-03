import React from 'react'
import _ from 'lodash'
import ListHeader from './list-header'
import ListItem from './list-item'

export default class List extends React.Component {
  renderItems (){
    const props = _.omit(this.props, 'todos');

    return _.map(this.props.todos, (todo, index) => {
    
      return <ListItem key={index} {...todo} {...props}/>});
  }
  render() {
    //console.log(...this.props.todos[0]);
    // var listItems = this.props.todos.map(function(val, index){
    //   return <ListItem key={index} {...val}/> // The spread syntax allows an expression to be expanded
    // })
    return(
      <table>
        <ListHeader/>
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>

    );
  }
}
