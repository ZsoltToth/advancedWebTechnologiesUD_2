const assert = require('assert');
const ShoggingCart = require('./ShoppingCart');

describe('Shopping Cart Tests', ()=>{

    it('check if a new Shopping Cart is empty', ()=>{
        let cart = new ShoggingCart();
        assert.equal(cart._items.length, 0);
    });

    it('test total price calculation with fixed items',()=>{
        let cart = new ShoggingCart();
        cart._items = [
            {name : 'apple', quantity :10, price :1},
            {name : 'banana', quantity :10, price :2},
            {name : 'cherry', quantity :10, price :2}
        ];
        const expected = 50;
        const actual = cart.totalPrice();
        assert.equal(actual,expected);
    });

    describe('Add item Method', ()=>{
       it('adds an item to an empty cart',()=>{
         let cart = new ShoggingCart();
         let item = {name : 'apple', quantity :10, price :1};
         cart.addItem(item);
         assert.equal(cart._items.length, 1);
       });

       it('adds the same item twice', ()=>{
           let cart = new ShoggingCart();
           let item = {name : 'apple', quantity :10, price :1};
           cart.addItem(item);
           cart.addItem(item);
           assert.equal(cart._items.length, 1);
           assert.equal(cart._items[0].quantity, 20);
       })
    });
});
