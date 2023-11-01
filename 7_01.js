// 連想配列の定義
let week1 = {sun:'日', mon:'月', tue:'火'};
let week2 = {wed:'水', thu:'木', fri:'金', sat:'土'};

let week = Object.assign(week1, week2);
console.log(week);