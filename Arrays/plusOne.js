var plusOne = function(digits) {
    var res = BigInt(digits.join().toString().replace(/,/g, ""));
    ++res;
    digits = [];
    for (i = 0; i < res.toString().split('').length; i++) {
      digits.push(parseInt(res.toString().split('')[i]));
    }
    return digits;
};