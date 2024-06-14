// let n = "UmerBhai tu apny ap mai reh";
// let cast = "raja bhai mgr hn Allah ka bnda or strong man";

// console.log(`His name is ${n} and cast is ${cast}`);
// console.log(n[0]);
// console.log(n[1]);
// console.log(n[2]);
// console.log(n[3]);
// console.log(n[4]);
// console.log(n[5]);

// console.log(n.length);
// console.log(n.toUpperCase());
// console.log(cast.toUpperCase());
// console.log(n.toLowerCase());
// console.log(cast.toLowerCase());
// console.log(cast.slice(10 ,13));
// let nn=n.replace ("UmerBhai", "hahahaha");
// console.log(n);
// console.log(nn);

// let baby=" jorna achy bandy ";
// let papa=baby.trim();
// console.log(papa);
// let jordiya=baby.concat(papa,"yes");
// console.log(jordiya);
// // console.log("umer\"".length);
// let yellows="Give me please Rs 5000";
// // console.log(yellows.slice((yellows.length)-4));
// let pink= yellows.replace(yellows[4],"chances")
// console.log(pink);



// Adjectives:
// Crazy
// Amazing
// Fire
// Shop Name:
// Engine
// Foods
// Garments
// Another Word:
// Bros
// Limited
// Hub

// Bussiness Name Creator 
let a;
let b;
let n = prompt("Enter your name");
let c;
alert(`Welcome to Bussiness Name Creator ${n}`);
while (true) {
    let z;
    z = Math.random();
    // alert(z);
    if (z < 0.2) {
        a = "Crazy";
    }
    else if (z < 0.5) {
        a = "Amazing";
    }
    else {
        a = "Fire";
    }
    z = Math.random();
    // alert(z);
    if (z < 0.2) {
        b = "Engine";
    }
    else if (z < 0.5) {
        b = "Foods";
    }
    else {
        b = "Garments";
    }
    z = Math.random();
    // alert(z);
    if (z < 0.1) {
        c = "Bros";
    }
    else if (z < 0.5) {
        c = "Limited";
    }
    else {
        c = "Hub";
    }
    alert(`${n},Your Bussiness Name is ${a} ${b} ${c}`);
    // reply=prompt("Are you want to get more name? no/y");
    // if (reply == "no") {
    //     break;
    // }
}



