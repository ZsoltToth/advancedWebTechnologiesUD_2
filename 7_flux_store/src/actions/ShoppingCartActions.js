import dispatcher from '../AppDispatcher'

class ShoppingCartActions {

    insertItem(item){
        dispatcher.handleViewAction({
            commandType : 'INSERT_ITEM',
            item : item
        });
    }

}

export default new ShoppingCartActions();
