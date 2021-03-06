class ShoppingCart {

    _items;

    constructor(){
        this._items = [];
    }

    addItem({name,quantity, price}){
        const itemIndex = this._items.findIndex((item) =>{return item.name === name});
        if(itemIndex === -1) {
            this._items.push(
                {
                    name: name,
                    quantity: quantity,
                    price: price
                }
            );
        }
        else{
            this._items[itemIndex].quantity += quantity;
        }

    }

    totalPrice(){
        return this._items.reduce((total,current)=>{
            return total +
                current.price * current.quantity;
        },0);
    }
}

module.exports = ShoppingCart;
