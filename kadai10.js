// オブジェクトの生成
let apple = {        // 「りんご」オブジェクト
    name: 'apple',
    color: 'red',
    size: 10,
    weight: 300,
};

let orange = {        // 「みかん」オブジェクト
    name: 'orange',
    color: 'orange',
    size: 5,
    weight: 90,
};

let grape = {        // 「ぶどう」オブジェクト
    name: 'grape', 
    color: 'violet',
    size: 20,
    weight: 250,
};

// 三つオブジェクトを配列に保存
let fruit = [apple, orange, grape];


// 三つのオブジェクトのプロパティweightの総重量を出力
let sum = fruit.reduce((sum, obj) => sum + obj.weight, 0);

console.log(sum)