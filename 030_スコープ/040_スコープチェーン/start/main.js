let a = 2;
window.a = 4;
function fn1() {
    // let a = 1;
    function fn2() {
        console.log(a);

        if (true) {
            // varで宣言した場合ブロック関係なくなる
            var a = 3;
        }

    }
    fn2();
}
fn1();



