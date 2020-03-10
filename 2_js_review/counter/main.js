const counter = require('./counter');

console.log(counter.increase_closure());
console.log(counter.increase_closure());
console.log(counter.increase_closure());

console.log(counter.counter_obj.count);
counter.counter_obj.increase();
counter.counter_obj.increase();
counter.counter_obj.increase();
console.log(counter.counter_obj.count);
