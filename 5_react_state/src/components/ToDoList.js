import React from 'react';

class ToDoList extends React.Component{

    render(){
        return(
            <div>
                <div className="row">
                    <table>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type="text"/>
                            </td>
                        </tr>
                        <tbody>
                        <tr>
                            <td>Description</td>
                            <td>
                                <input type="text"/>
                            </td>
                        </tr>
                        <tr>
                            <td>Estimation</td>
                            <td>
                                <input type="number"/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button className="btn btn-info">Add</button>
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
