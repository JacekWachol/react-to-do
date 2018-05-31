import React, { Component } from 'react';
import TaskInput from './taskInput';
import GoalList from './goalList';

class App extends Component {

  constructor(props) {
    super(props);
    if(typeof(localStorage.todo) === "undefined") {
      this.state = {goals: [], totalGoals: 0}
    } else {
    this.state = {goals: JSON.parse(localStorage.todo), totalGoals: localStorage.count} }
    this.updateList = this.updateList.bind(this);
    this.removeListItem = this.removeListItem.bind(this);
  }


  updateList(item) {
    let updatedGoals = [...this.state.goals, {goalText: item, id: this.state.totalGoals}];
    this.setState({goals: updatedGoals});
    localStorage.count =  Number(this.state.totalGoals) + 1;
    this.setState({totalGoals: localStorage.count});
    localStorage.todo = JSON.stringify(updatedGoals);
  }

  removeListItem(id) {
    let filteredGoals =  this.state.goals.filter((goal) => {

      if(goal.id !== id) {

        return goal;
      }
    });

    this.setState({goals: filteredGoals});
    localStorage.todo = JSON.stringify(filteredGoals);
    

  }





  render() {


    return (
<div className="container h-100">
  <TaskInput onListUpdate={this.updateList} />
  <GoalList items = {this.state.goals} remove={this.removeListItem} />


</div>
        );
  }



}
//this.setState({goal: item})
export default App;
