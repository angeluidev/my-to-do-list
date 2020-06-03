import React, { Component } from 'react';
import './stylesheet.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list:[]
    }
  }
  updateInput(key, value) {
    this.setState({
      [key]:value
    })
  }

  addItem(){
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };
    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      newItem:""
    });
  }

  deleteItem(id){
    const list = [...this.state.list];

    const updatedList = list.filter(item => item.id !== id);

    this.setState({list: updatedList})
  }

  render() {
    return (
      <div className="app-title">
        <div className = "container">
          <div className = "text">
          To-Do List
          <br />
          <input 
          type="text"
          placeholder="Type a task here..."
          value={this.state.newItem}
          onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button 
            className = "btn"
            onClick={() => this.addItem()}
          >Add</button>
          <br/>
          <table>
            <thead>
            <tr>
              <th>Tasks</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              {this.state.list.map(item => {
                return(
                  <tr key={item.id}>
                    <td>{item.value}</td>
                    <button 
                  className = "delete-btn"
                  onClick={() => this.deleteItem(item.id)}>
                  Done
                  </button>
                </tr>
                )
              })}
          </tbody>
          </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;