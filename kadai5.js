for (let i = 10; i > 0; i--) {
    let s = '(' + i + '):';
    for (let j = i; j > 0; j--) {
        s = s + '*';
    }
    console.log(s);
}
