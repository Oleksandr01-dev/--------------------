function sumwhile(...args) {
    let total = 0;
    let i = 0;

    while (i < args.length) {
    total = total + args[i];
    i++;
}
return total;
}

console.log(sumwhile(1,2,3));
console.log(sumwhile(0));
console.log(sumwhile(10, -1, -1,-1,));
console.log(sumwhile());        

    