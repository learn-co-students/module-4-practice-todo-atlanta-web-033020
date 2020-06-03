import React from 'react';

class AddTaskForm extends React.Component {
  state = {
    text: '',
    category: 'Code'
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm = e => {
    e.preventDefault();
    this.props.addTask({ text: e.target.text.value, category: e.target.category.value })
  }

  render() {
    return (
      <form className='new-task-form' onSubmit={this.submitForm}>
        <input
          placeholder="New task details"
          type="text"
          name="text"
          value={this.state.text}
          onChange={this.handleOnChange}
        />
        <select name="category" onChange={this.handleOnChange}>
          <option>Code</option>
          <option>Food</option>
          <option>Money</option>
          <option>Misc</option>
        </select>
        <input
          type="submit"
          value="Add Task"
        />
      </form>
    )
  }
}

export default AddTaskForm;