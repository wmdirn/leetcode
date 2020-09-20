var maxProfit = function(prices) {

    var diff = [];

    for (i = 0; i < prices.length - 1; i++) {
      if ( prices[i+1] - prices[i] >= 1)
        diff.push(prices[i+1] - prices[i]);
    }

    //return diff.filter(function(v) { return v > 0;})
    if (diff.length === 0) {
        return 0;
    }
    
    return diff.reduce(function (a, b) {return a + b;});
};