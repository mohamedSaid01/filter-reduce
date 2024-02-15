
//ex1
let arr = [2,7,4,1,10,6];
let val = arr.reduce(callback,0);

function callback(prevValue, currentValue) {
    return prevValue+currentValue;
}
console.log("la somme est " +val);


//ex2
let arr = [2,7,4,1,10,6];
let val = arr.reduce(callback,0);

function callback(prevValue, currentValue) {
    return prevValue.toString() + " " + currentValue.toString();
}
console.log(val);


//ex3
let arr = [person1={
    id:1,
    nom: "Sa3id",
    prenom: "Boubaker",
    age:21,
    vote:"oui"},

    person2={
        id:2,
        nom: "Ahmed",
        prenom: "Dridi",
        age:17,
        vote:"non"},

        person3={
            id:3,
            nom: "Yassin",
            prenom: "3bid",
            age:18,
            vote:"oui"},

            person4={
                id:4,
                nom: "3omar",
                prenom: "Brahim",
                age:21,
                vote:"non"},

                person5={
                    id:5,
                    nom: "Ghassen",
                    prenom: "Rhouma",
                    age:17,
                    vote:"non"}
            
];


let acc = 0;
let val = arr.reduce(callback , acc);

function callback(prevValue , currentValue) {
    if(currentValue.vote == "non"){
        return acc += 1; 
    }
}

console.log( "nombres des personnes qui ont voté est " +acc);


//ex4
let listeDeSouhaits = [
    { nom: "PC GAMER", prix: 7000 },
    { nom: "clavier", prix: 150 },
    { nom: "casque", prix: 300 },
    { nom: "souris", prix: 200 }
];
let x = listeDeSouhaits.reduce(callback,0);

function callback(prevValue, currentValue) {
    return prevValue + currentValue.prix
}
console.log(x);


//ex5
let arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
let val = arr.reduce(callback,[]);

function callback(prevValue, currentValue) {
    return prevValue.concat(currentValue);
}
console.log(val);







