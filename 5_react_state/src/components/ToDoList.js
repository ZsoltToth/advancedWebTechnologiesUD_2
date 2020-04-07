import React from 'react';
import ToDoListItem from "./ToDoListItem";

class ToDoList extends React.Component{


    constructor(props, context) {
        super(props, context);
        this.state = {
            form : {
                name : 'Wash Clothes',
                description : 'We have clothes',
                estimation : 1.5
            },
            todos : []
        };
        this.deleteToDoItem = this.deleteToDoItem.bind(this);
    }

    deleteToDoItem(todoItem){
        let st = this.state;
        st.todos = this.state.todos.filter((todo)=>{
            return todo.name !== todoItem.name;
        });
        this.setState(st);

    }

    render(){
        return(
            <div>
                <div className="row">
                    <table>
                        <tbody>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input
                                    type="text"
                                    value={this.state.form.name}
                                    onChange={(e)=>{
                                        let st = this.state;
                                        st.form.name = e.target.value;
                                        this.setState(st);
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td>
                                <input
                                    type="text"
                                    value={this.state.form.description}
                                    onChange={(e)=>{
                                        let st = this.state;
                                        st.form.description = e.target.value;
                                        this.setState(st);
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Estimation</td>
                            <td>
                                <input
                                    type="number"
                                    value={this.state.form.estimation}
                                    onChange={(e)=>{
                                        let st = this.state;
                                        let est = parseFloat(e.target.value);
                                        st.form.estimation = est > 0.0 ? est : 0.0;
                                        this.setState(st);
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button
                                    className="btn btn-info"
                                    onClick={()=>{
                                        let st = this.state;
                                        st.todos.push(st.form);
                                        st.form = {name :'', description: '', estimation: 0};
                                        this.setState(st);
                                    }}
                                >Add</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row">
                    <table className="table">
                        <thead>
                        <tr>
                            <td>Name</td>
                            <td>Estimation</td>
                            <td>Descrition</td>
                            <td>Action</td>
                        </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <td>Sum</td>
                                <td>
                                    {
                                        this.state.todos.reduce(
                                            (total, current)=>{
                                                return total  + current.estimation;
                                            },0)
                                    }</td>
                                <td>Count</td>
                                <td>{this.state.todos.length}</td>
                            </tr>
                        </tfoot>
                        <tbody>
                        {
                            this.state.todos.map((todoItem)=>{
                                return (
                                <ToDoListItem
                                    key={todoItem.name}
                                    todoItem={todoItem}
                                    deleteAction={this.deleteToDoItem}
                                />
                                );
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ToDoList;
