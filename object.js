//using spread operator merging two object

let car1={
    name:"Volvo",
    price:500000
}
let car2={
    names :"Audi",
    prices:4000000
};
let carValue={...car1,...car2};
console.log(carValue);



// entries()

let bikeName={
    1:"yamaha mt",
    2:"hero hunk",
    3:"Tvs",
    4:"suzuki"
}
let bikeList=Object.entries(bikeName);
console.log(bikeList);


//hasOwn()

let gameName={
    z:"Free Fire",
    x:"PUBG",
    c:"Minecraft",
    v:"Fortnite"
}
let favuritGame=Object.hasOwn(gameName,"z");
console.log(favuritGame);


//keys()

let birdName={
    a :"Eagle",
    b :"Kingfisher",
    c :"Duck",
    d :"Kite"
}
let birdValue=Object.keys(birdName);
console.log(birdValue);

//values()

let pSpacfation ={
    name:"iphone 14 Pro",
    ram : "4 GB",
    rom : "128 GB",  
};
let phoneValue=Object.values(pSpacfation);
console.log(phoneValue);

