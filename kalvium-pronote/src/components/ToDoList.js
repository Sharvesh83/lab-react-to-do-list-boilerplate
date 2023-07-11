import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: '',
    };
  }

  addItem = () => {
    if (this.state.currentItem !== '') {
      const newItem = {
        text: this.state.currentItem,
        key: Date.now(),
      };
      this.setState((prevState) => ({
        items: prevState.items.concat(newItem),
        currentItem: '',
      }));
    }
  };

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  };

  updateItem = (key, newText) => {
    const updatedItems = this.state.items.map((item) => {
      if (item.key === key) {
        return { ...item, text: newText };
      }
      return item;
    });
    this.setState({
      items: updatedItems,
    });
  };

  handleInput = (e) => {
    this.setState({
      currentItem: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter task"
            value={this.state.currentItem}
            onChange={this.handleInput}
          />
          <button onClick={this.addItem}>Add</button>
        </div>
        <ul>
          {this.state.items.map((item) => (
            <li key={item.key}>
              {item.text}
              <div className="button-container">
                <button onClick={() => this.deleteItem(item.key)}>Delete</button>
                <button onClick={() => this.updateItem(item.key, prompt('Enter new text:'))}>Update</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
