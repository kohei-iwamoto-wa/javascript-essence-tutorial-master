// グローバルコンテキスト
let a = 0;
function b() {
    // 関数コンテキスト内で使えるもの
    // thisはwindowオブジェクト
    console.log(this, arguments, a);

}
// グローバルコンテキストが実行される
// console.log(a);
// 関数コンテキストが実行される
b();
