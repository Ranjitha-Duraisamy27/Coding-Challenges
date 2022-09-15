Array.prototype.myMap = function(cb) {
    for(let i = 0; i<this.length; i++) {
        cb(this[i], i, this);
    }
}

let arr = [1, 2, 3, 4, 5];
arr.myMap((el) => {
    console.log(el);
})