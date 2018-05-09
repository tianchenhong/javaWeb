function fibonacci (n){
    var f0=0;
    var f1=1;
    var f2,i;
    if (n===0){
        return 0
    }
    if (n===1){
        return 1
    }
    for(i=2;i<=n;i++){
        f2=f0+f1;
        f0=f1;
        f1=f2;
    }
    return f2;
}

module.exports = fibonacci