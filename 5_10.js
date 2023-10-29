for (let i = 0; i < 10; i++) {
    let s = '(' + i + '):';
    for (let j = 0; j < i; j++) {
        s = s + '*';
    }
    console.log(s);
}
