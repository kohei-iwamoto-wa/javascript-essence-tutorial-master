function a() {
    console.log('called');
}
a();
// 関数宣言
let c = (function(d) {
    let privateVal = 0;
    let publicVal = 10;
    console.log('called' + d);

    function privateFn() {
        console.log('privateFn is called');
    }

    function publicFn() {
        console.log('publicFn is called' + privateVal++);
    }
    // return以下オブジェクトリテラル 関数の外から関数を呼ぶ
    return {
        publicVal,
        publicFn
    };
})(10);
// 以下の様に何度も呼び出すとインクリメントする
c.publicFn();
c.publicFn();
c.publicFn();
c.publicFn();

// 関数式
let b = function() {
    console.log('called');
}();