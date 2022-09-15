const testButton = document.getElementById('test');
console.log(testButton);
function debounce(fn, delay) {
    let timer;
    let context = this;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(context, arguments);
        }, delay)
    }
}
testButton.addEventListener('keyup', debounce(getData, 1000));

function getData(e) {
    console.log(e.target.value)
}