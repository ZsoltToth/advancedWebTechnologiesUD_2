import React from 'react'
import shoppingCart from "../store/ShoppingCart";

class BriefShoppingList extends React.Component{


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
            <ul>
                {
                    this.state.cart.map((item)=>{
                        return(
                            <li key={item.id}>{item.name}</li>
                        );
                    })
                }
            </ul>
        );
    }
}

export default BriefShoppingList;
