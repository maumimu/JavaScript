// 無名関数
let getTriangle = function(base, height) {//　引数を設定
    return base * height / 2;               // 結果を戻す
}

//　ユーザー定義関数の呼び出し
console.log('三角形の面積は' + getTriangle(10, 2));