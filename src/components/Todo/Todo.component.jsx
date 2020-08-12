import React, {Component} from 'react';
import TodoForm from '../TodoForm/TodoForm.component';
import './Todo.css';

class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {edit: false};
    }

    handleDelete = () => {
        this.props.deleteTodo(this.props.id);
    }

    toggleEditState = () => {
        this.setState({edit: !this.state.edit});
    }

    toggleIsChecked = () => {this.setState(
        {isChecked: !this.state.isChecked}
    )}

    // componentDidUpdate(prevProps, prevState){
    //     console.log('IN TODO COMPONENT DID UPDATE');
    //     console.log(prevProps.todo);
    //     console.log(this.props.todo);
    // }

    componentWillUnmount(){
        console.log('IN COMPONENT WILL UNMOUNT');
    }

    render(){
        return(
            this.state.edit ?
            <TodoForm 
                editTodo={this.props.editTodo} 
                todo={this.props.todo} 
                id={this.props.id} 
                toggleEditState={this.toggleEditState} 
            />
                :
            <div className='Todo'>
                <li 
                    // style={{textDecoration: this.state.isChecked && 'line-through'}}
                    className={`Todo-task ${this.state.isChecked ? 'completed' : ''} `}
                    onClick={this.toggleIsChecked}
                >
                    {this.props.todo}
                </li>
                <button onClick={this.handleDelete}>X</button>
                <button onClick={this.toggleEditState}>Edit</button>
            </div>
        );
    }
}

export default Todo;