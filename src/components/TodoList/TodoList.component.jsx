import React, {Component} from 'react';
import TodoForm from '../TodoForm/TodoForm.component';
import Todo from '../Todo/Todo.component';
import './TodoList.css';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {todos: []};
    }

    displayTodos = () => {
        return this.state.todos.map(todoObj =>
            <Todo 
                key={todoObj.id} 
                id={todoObj.id} 
                todo={todoObj.todo} 
                deleteTodo={this.deleteTodo}
                editTodo={this.editTodo}
            />
        );
    }

    addTodo = todo => {
        this.setState({todos: [...this.state.todos, todo]});
    }

    deleteTodo = id => {
        this.setState(
            {todos: this.state.todos.filter(todo => todo.id!==id)}
        );
    }

    editTodo = (editedTodo, id) => {
        // const todos = [...this.state.todos];
        // const idx = todos.findIndex(todoObj => id === todoObj.id);
        // todos[idx].todo = editedTodo;
        const editedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, todo: editedTodo}
            }
            return todo;
        });
        
        this.setState({todos: editedTodos});
    }

    // componentDidUpdate(prevProps, prevState){
    //     console.log('IN TODOLIST COMPONENT DID UPDATE');
    //     console.log(prevState.todos);
    //     console.log(this.state.todos);
    // }

    render(){
        return(
            <div className='TodoList'>
                <h1>
                    Get To Work! <span>An Animated Todo List Made With React</span>
                </h1>
                <ul>{this.displayTodos()}</ul>
                <TodoForm addTodo={this.addTodo} />
            </div>
        );
    }
}

export default TodoList;