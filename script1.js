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

// 6.Finding Maximum and Minimim
//Maximum
function Maximum(arr){
    return Math.max(...arr);
}
console.log("Maximum number in given array",Maximum([1,4,5,6,7]));
//Minimum
function Minimum(arr){
    return Math.min(...arr);
}
console.log("Minimum number in given array",Minimum([1,4,5,6,7]));

