var increase_closue = (function(){
    var count = 0;
    return function(){return count++;}
})();

class Counter {
    constructor(){
        this.count = 0;
    }
    increase(){
        this.count++;
    }
    decrease(){
        this.count--;
    }
}

module.exports = {
    increase_closure : increase_closue,
    counter_obj : new Counter()
};
