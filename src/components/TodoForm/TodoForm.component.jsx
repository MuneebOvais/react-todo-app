import React, {Component} from 'react';
import uuid from 'react-uuid';

class TodoForm extends Component{

    static defaultProps = {todo: ''};

    constructor(props){
        super(props);
        this.state = {todo: props.todo};
    }

    handleChange = e => {
        this.setState({todo: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();

        if(!this.props.editTodo){
            const todo = {...this.state, id: uuid()};
            this.props.addTodo(todo);
            this.setState({todo: ''});
        } else{
            this.props.editTodo(this.state.todo, this.props.id);
            this.props.toggleEditState();
        }
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} className={this.props.editTodo ? 'Todo': ''}>
                <input 
                    type="text" 
                    value={this.state.todo}
                    placeholder='Add Todo' 
                    onChange={this.handleChange} 
                    required/>
                <button>Save</button>
            </form>
        );
    }
}

export default TodoForm;