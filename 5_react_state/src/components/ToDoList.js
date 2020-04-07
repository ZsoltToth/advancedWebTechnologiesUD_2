import React from 'react';

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
                                        console.log(this.state.form);
                                    }}
                                >Add</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row"></div>
            </div>
        );
    }
}

export default ToDoList;
