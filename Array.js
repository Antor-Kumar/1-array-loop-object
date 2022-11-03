/*---------- Home Task Array Method ------------*/
//concat()

let firstName =["antor"];
let lastName =["kumar"];
let fullName =firstName.concat(lastName);
console.log(fullName);

//push()

let namList =["alamin","rumon","sumon"];
namList.push("hanif");//add element last position
console.log(namList);

//unshift()

let namLists =["alamin","rumon","sumon","korim","rohim"];
namLists.unshift("antor");//add element first position
console.log(namLists);

//pop()

let nemLists =["alamin","rumon","sumon","korim","rohim"];
nemLists.pop();//remove element last position
console.log(nemLists);

//shift()

let numLists =["alamin","rumon","sumon","korim","rohim"];
numLists.shift(); //remove element first position
console.log(numLists);

//slice()

let carList =["Honda","Toyota","Honda Civic","Toyota RAV4","Ram Pickup","ferrari","bmw","Audi"];
let carName=carList.slice(2,5);//start nad End
console.log(carName);//copy element a new array
let carNames=carList.slice(3);//start
console.log(carNames);

//splice()

let carBrandList=["BMW","toyota","Audi","Ferrari","Honda","volvo","jeguar","Lexus"];
let carNameList=carBrandList.splice(2,0,"Land Rover","Bentley");
console.log(carBrandList);//add element

let carBrands=["BMW","toyota","Audi","Ferrari","Honda","volvo","jeguar","Lexus"];
  let removeCars=carBrands.splice(5,7);
console.log(removeCars);//remove element

//some()

const age=[10,17,18,20,25,28];
let addult=age.some(function(age){
    return age>=18;//true
});
console.log(addult);

const ages=[10,17,18,20,25,28];
let adult=ages.some(function(ages){
    return ages>=30;//false
});
console.log(adult);

//every()

const ageList=[10,17,18,20,25,28];
let maxAge=ageList.every(function(ageList){
    return ageList>=10;
});
console.log(maxAge);//true

const ageLists=[10,17,18,20,25,28];
let maxAges=ageLists.every(function(ageLists){
    return ageLists>=17;
});
console.log(maxAges);//false

//sort()

let mixValue=[1,20,10,20,25,30,35,40,50,55];
let serialValue=mixValue.sort();//serialy print vlue
console.log(serialValue);


//reverse()

let carsList=["Audi","Toyota","Ferrari","BMW"];
let reverseVlue=carsList.reverse();
console.log(reverseVlue);


//find()
let memberNo =[6,10,15,20,25,30,35,50];
let firstMember=memberNo.find(function(memberNo){
    return memberNo>20;//print value 
});
console.log(firstMember);


//findIndex()

let membersNo =[6,10,15,20,25,30,35,50];
let firstMembers=membersNo.findIndex(function(membersNo){
    return membersNo>20;//print index number of value
});
console.log(firstMembers);

//filter()

let phonePrice=[10000,18000,25000,20000,30000];
let phoneValue=phonePrice.filter(function (phonePrice){
    return phonePrice>=15000;
});
console.log(phoneValue);


//fill()

let friendsName =["alamin","salim","hanif","morsalin"];
friendsName.fill("Titas");// replace all element in array
console.log(friendsName);


//forEach()

const numbers = [45, 4, 9, 16, 25];
let numbersValue=numbers.forEach(function(value,index){
  console.log(value+" "+ index ); // print value and index number
});


//includes()

let bikeName=["yamaha","TVS","Hero","kawasaki","Royal Enfield"];
console.log(bikeName.includes("kawasaki"));//finde element in array print true and false value



//isArray()

let createArray=["antor","Ridoy"];
console.log(Array.isArray(createArray));


//instanceof()

let typeOfArray=[];
console.log(typeOfArray instanceof Array);


// join()

let number=[1,2,3,7,8,9,6,5,4];
let addStar=number.join("*");
console.log(addStar);


//map()

const count1=[4,5,6,7,8,9];

let count2=count1.map(myFanction);
function myFanction(x){
   return x * 10;
}
console.log(count2);

//from()

let x =Array.from("Bangladesh");
console.log(x);



//concatenation tow array using spread operator

let alphabet1=["A","B","c"];
let alphabet2=["E","F","G"];
let Addalphabet=([...alphabet1,...alphabet2]);
console.log(Addalphabet);














