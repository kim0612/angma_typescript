console.log('========================');

let age:number = 30;

let namae:string = 'hello';

let a1:number[] = [1,2,3];
let a2:Array<number> = [4,5,6];

let week1:string[] = ['mon','tue','wed'];
let week2:Array<string> = ['thu','fri','sat'];

//week1.push(3)


// 튜플 (tuple)
let b:[string,number];

b = ['hello', 5];
// b = [5, 'hello'];
b[0].toLowerCase();
// b[1].toLowerCase();


// void (아무것도 반환하지 않는 함수)
function sayHello():void{
  console.log('hello');
}


//never (항상 error를 반환하거나, 영원히 끝나지 않는 함수)
function showError():never{
  throw new Error();
}

function infLoop():never{
  while (true){
    // do something
  }
}

// enum (비슷한 값들 끼리 묶어줬다.)
enum Os1{ //숫자 일때는 양방향 mapping!
  Window = 3,
  Ios = 10,
  Android,
};

console.log(Os1[11]);
console.log(Os1['Android']);

enum Os2{ //문자열 일때는 단방향 mapping!
  Window = 'win',
  Ios = 'ios',
  Android = 'and',
};

console.log(Os2['Android']);


// null, undefined
let aa:null = null;
let bb:undefined = undefined;