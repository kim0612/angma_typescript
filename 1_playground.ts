function add(num1:number, num2:number) {
  console.log(num1+num2)
}

//add();
//add(1);
add(4, 7);
//add(3, 4, 5);
//add("hello", "world");


console.log("=========================");


function showItems(arr:number[]) {
  arr.forEach((item)=>{
    console.log(item);
  });
}

showItems([1,2,3]);
//showItems(1,2,3);