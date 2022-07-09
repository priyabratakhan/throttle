const myThrottle = (fn, d) => {
    return function () {
        document.getElementById("myBtn").disabled = true;
        setTimeout(() => {
            fn();
        }, d);
    }
}


const newFun = myThrottle(() => {
    document.getElementById("myBtn").disabled = false;
    console.log("user clicked after 2 sec.")
},2000)