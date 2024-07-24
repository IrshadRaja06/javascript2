//1.Array creation and Intialization
let num = [1,2,3,4]
console.log(num);

//2.Array Manipulation
//add element
num.push(5);
console.log("Element add ",num);
//remove element
num.pop();
console.log("Element remove",num);

// 3.Array Searching
//IndexOf
console.log("Index :",num.indexOf(3));
// find
function find(target){
for(let i=0;i<num.length;i++){
    if(num[i]==target){
        return true;
    }
}
return false;
}
if(find(2)){
    console.log(2,' Found');
}
else{
    console.log(2," Not foud")
}


// 4.Array Sorting
function sort(arr){
    return arr.sort();
}
console.log(sort([1,5,2,4,3]));
//reverse
function reverse(arr){
    return arr.reverse();
}
console.log(reverse([1,2,3,4,5]));

// 5.Joining and Splitting 
// Join
let arr = ["raja","kabil","harish","sudhan"];
let word = arr.join();
console.log(word);
//Splitting
let name = "Irshad Raja";
console.log(name.split(''))

// 6.Finding Maximum 
function Maximum(arr){
    return Math.max(...arr);
}
console.log("Maximum number in given array",Maximum([1,4,5,6,7]));

//7.Finding Minimum
function Minimum(arr){
    return Math.min(...arr);
}
console.log("Minimum number in given array",Minimum([1,4,5,6,7]));

// 8.Array mapping
let arr2 = [1,2,3,4];
let arr3=arr2.map(num=>num*2);
console.log(arr3);

// 9.merging an array
let arrr = [1,2,3,4]
let arrr2 = [5,6,7,8]
let arr4=[...arrr,...arrr2]
console.log(arr4);

// 10.checking array element
function checkingTarget(arr,Target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==Target){
            return "Element is Present";
        }
    }
    return "Element is not Present";
}
console.log(checkingTarget([1,2,3,4,5],3)); 

// 11.Array Spreading
let l1=["raja","kabil","hari"]
let l2 =["sudhan","gogul","dhana"]
console.log(...l1,...l2);   

// 12.Array Duplication
let arrli = [10,20,30,50,50]
let newli = [...new Set(arrli)]
console.log(newli);

// 13.Array slice
console.log(arrli.slice(0,2));

// 14.reverse an array
console.log(reverse(arrli));

// 15.Array flattering
let ar=[1,[10,20],2,3,4,[60,70],5]
let ar2 = ar.flat(0);
console.log(ar2);

// 16.Array first occurence
function checkingOccurence(arr,Target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==Target){
            return i;
        }
    }
    return "Element not found";
}
console.log(checkingOccurence([1,2,3,4],2))


// 17.Array Intersection
let ArrIn = [1,2,3,4,5];
let arrIn2 = [3,4,5,7,8];

let newArrIN = ArrIn.filter((element)=>arrIn2.includes(element));

console.log(newArrIN);

//18.Array Object Sorting
let student = [
    { name: 'kabil',score: 95 },
    { name: 'Hari',score: 75 },
    { name: 'Raja', score: 80 },
  ];
  
  student.sort((a, b) => a.score - b.score);
  
  student.forEach((e) => {
    console.log(`${e.name} ${e.score}`);
  });

//19.Array Rotation
let Arr_rot= [1,2,3,4,5];
function Rotation(rot){
    for(let i=0;i<rot;i++){
        Arr_rot.unshift(Arr_rot.pop());
    }
    return Arr_rot;
}
console.log(Rotation(3));

//20.Array Splice
let array=[10,12,5,4,76]
function ArraySplice()
{
    array.splice(3,0,7);
    console.log(array);
}
ArraySplice();

  
