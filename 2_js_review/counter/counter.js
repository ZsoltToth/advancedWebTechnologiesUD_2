var increase = (function(){
    var count = 0;
    return function(){return count++;}
})();

module.exports = {
    increase : increase
}
