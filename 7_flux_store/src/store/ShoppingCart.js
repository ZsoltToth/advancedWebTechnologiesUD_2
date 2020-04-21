import EventEmitter from 'events'
import dispatcher from '../AppDispatcher'

class ShoppingCart extends EventEmitter{

    _items = [];

    emitChange(){
        this.emit('change')
    }

    addChangeListener(callback){
        this.addListener('change',callback);
    }

    removeChangeListener(callback){
        this.removeListener('change', callback);
    }
}

const shoppingCart = new ShoppingCart();

dispatcher.register((action)=>{
    if(action.command.commandType === 'INSERT_ITEM'){
        let item = action.command.item;
        item.id = Math.round(Math.random()*1000);
        shoppingCart._items.push(item);
        shoppingCart.emitChange();
    }
    if(action.command.commandType === 'REMOVE_BY_ID'){
        shoppingCart._items = shoppingCart._items.filter((item)=>{
            return item.id !== action.command.id;
        });
        shoppingCart.emitChange();
    }
});

export default shoppingCart;
