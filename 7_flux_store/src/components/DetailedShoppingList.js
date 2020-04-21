import React from 'react'
import shoppingCart from '../store/ShoppingCart'
import ShoppingCartActions from "../actions/ShoppingCartActions";

class DetailedShoppingList extends React.Component{


    constructor(props, context) {
        super(props, context);
        this.state = {cart : []};
        this.onChangeOfShoppingCart = this.onChangeOfShoppingCart.bind(this);
    }

    onChangeOfShoppingCart(){
        this.setState({cart : shoppingCart._items})
    }

    componentDidMount() {
        shoppingCart.addChangeListener(this.onChangeOfShoppingCart);
    }

    componentWillUnmount() {
        shoppingCart.removeChangeListener(this.onChangeOfShoppingCart);
    }

    render() {
        return (
            <table className="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.cart.map((item)=>{
                        return(
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={()=>{
                                            ShoppingCartActions.removeItemById(item.id);
                                        }}
                                    >Delete</button>
                                </td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        );
    }
}

export default DetailedShoppingList;
