// ユーザー定義関数
function triangle(base, height) {//　引数を設定
    const result = base * height /2;        //　三角形の面積の計算
    return result;               // 結果を戻す
}

//　ユーザー定義関数の呼び出し
console.log('三角形の面積は' + triangle(10, 2));