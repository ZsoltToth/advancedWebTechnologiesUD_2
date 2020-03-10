class GrossPriceCalculator{

    constructor(){
        this.vatRate = 27.0;
    }

    //Callculate the total gross price then return with the result.
    totalGrossPrice_ret(products){
        return products.reduce((total,current)=>{
            if(current.isTaxable){
                return total + current.price * (100 + this.vatRate) / 100;
            }
            return total + current.price;
        },0);
    }

    /**
     *
     * @param products
     * @param success
     * @param error -- if any price is negative
     */
    totalGrossPrice_cb(products, success, error){

    }
}

module.exports = new GrossPriceCalculator();
