a();
// 関数宣言
function a() {
    console.log(c);
    var c = 1;
    d();
    function d() {
        console.log('d is called.')
    }
    console.log('a is called.')
}

// 関数式　
// const a = function () {
//     console.log(c);
//     var c = 1;
//     d();
//     function d() {
//         console.log('d is called.')
//     }
//     console.log('a is called.')
// }

// varの場合は、ホイスティング時にundifinedが設定されるが、constやletで変数を宣言している場合はされない。
console.log(b);
// var b = 0;
// let b = 0;
// const b = 0;
// ホイスティングはコンテキストが実行されるたびに生じる