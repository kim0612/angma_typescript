console.log('========================');
var age = 30;
var namae = 'hello';
var a1 = [1, 2, 3];
var a2 = [4, 5, 6];
var week1 = ['mon', 'tue', 'wed'];
var week2 = ['thu', 'fri', 'sat'];
//week1.push(3)
// 튜플 (tuple)
var b;
b = ['hello', 5];
// b = [5, 'hello'];
b[0].toLowerCase();
// b[1].toLowerCase();
// void (아무것도 반환하지 않는 함수)
function sayHello() {
    console.log('hello');
}
//never (항상 error를 반환하거나, 영원히 끝나지 않는 함수)
function showError() {
    throw new Error();
}
function infLoop() {
    while (true) {
        // do something
    }
}
// enum (비슷한 값들 끼리 묶어줬다.)
var Os1;
(function (Os1) {
    Os1[Os1["Window"] = 3] = "Window";
    Os1[Os1["Ios"] = 10] = "Ios";
    Os1[Os1["Android"] = 11] = "Android";
})(Os1 || (Os1 = {}));
;
console.log(Os1[11]);
console.log(Os1['Android']);
var Os2;
(function (Os2) {
    Os2["Window"] = "win";
    Os2["Ios"] = "ios";
    Os2["Android"] = "and";
})(Os2 || (Os2 = {}));
;
console.log(Os2['Android']);
// null, undefined
var aa = null;
var bb = undefined;
