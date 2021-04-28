function addNumberFactory(num) {
    function addNumber(value) {
        return num + value;
    }
    // 関数を返却することができる
    return addNumber;
}

const add5 = addNumberFactory(5);
const result = add5(10); //addNumberが返却されている
console.log(result);
