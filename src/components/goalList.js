import React, { Component } from 'react';

const GoalList = ({items, remove}) => {

  const GoalItem = ({item, remove}) => {
    return (<li id={item.id} className="list-group-item list-item d-inline-flex justify-content-between align-items-center border-info text-info ">{item.goalText} <button className="btn btn-info"	 onClick={()=> {remove(item.id)}}>Remove</button></li>);
  }

  const allGoalNodes = items.map((item, index) => {
    return (<GoalItem item={item} key={index} remove={remove}/>)
  });

    return (
      <div className="col-sm-6 float-sm-left ">
        <h2 className="alert alert-info text-center">Here is what you need to do:</h2>
        <ul className="card list-group list-group-info">
          {allGoalNodes}
        </ul>
      </div>
  );


}

export default GoalList;
