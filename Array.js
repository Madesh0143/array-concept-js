const persons = [
    {
        id:1,
        name:"madesh",
        age:20,
        salary:25000,
        address:{
            city:"dharmapuri",
            pincode:636813
        }
    },{
        id:2,
        name:"murugan",
        age:16,
        salary:52000,
        address:{
            city:"coimbatore",
            pincode:639236
        }
    },{
        id:3,
        name:"hari",
        age:26,
        salary:50000,
        address:{
            city:"chennai",
            pincode:695128
        }
    },{
        id:4,
        name:"ashwin",
        age:10,
        salary:2000,
        address:{
            city:"banglore",
            pincode:670812
        }
    },{
        id:5,
        name:"keerthana",
        age:25,
        salary:50001,
        address:{
            city:"kerala",
            pincode:634785
        }
    }

];


//  console.log(persons);



/*-------------- Map Array Methods --------------*/

const mapElements = persons.map(per =>{
    return per.name 

})

// console.log(mapElements)


/*-------------- ForEach Array Methods --------------*/

//don't declare the variables

 persons.forEach(person =>{
    // console.log(person.address)
})


/*-------------- some Array  Methods --------------*/

// this method shows only true or false

const someMethod = persons.some( p =>{
    return p.age >=20;
});

// console.log(someMethod)


/*-------------- Every Array Methods --------------*/

// this mtd given array all satisfy comes true

const everyMethod = persons.every(p =>{
    return p.age >=10 
})

// console.log(everyMethod)


/*-------------- filter Array Methods --------------*/
 
const filteredElements = persons.filter(p =>{
    return p.age >= 20
})

// console.log(filteredElements)


/*-------------- reduce Array Methods --------------*/

const total = persons.reduce((currentTotal,initial)=>{
    return initial.salary + currentTotal
},0)
// initial values given Zero

// console.log(total)



/*-------------- include Array Methods --------------*/

const idList = [1,2,3,4,5,6,7,8]

// console.log(idList.includes(5)) its says only true or false statements


/*-------------- push Array Methods --------------*/
persons.push({
        id:6,
        name:"gayathri",
        age:30,
        salary:65000,
        address:{
            city:"ooty",
            pincode:637885
        }
});

// console.log(persons)

/*-------------- Find Array Methods --------------*/

const findElements = persons.find(p=>{
    return  p.name === "gayathri"
})

// console.log(findElements)

/*-------------- Join Array Methods --------------*/

const names =["banana","jack","apple","orange"];
let JoinFun = names.join('--');

// console.log(JoinFun)


/*-------------- concat Array Methods --------------*/

const fruit1 =["banana","jack","apple","orange"];
const fruit2 =["grapes","tomato","black apple","starbery"];

let joined = fruit1.concat(fruit2)

console.log(joined)


/*-------------- splice  Array Methods --------------*/
 
persons.splice(1,2);

console.log(persons)

/*-------------- indexOF  & lastindexOF  Array Methods --------------*/

 let index = fruit2.indexOf('tomato')

 console.log(index)


/*------------- - flat  Array Methods --------------*/
 
// display the array in array

let flat  = persons.flat();

 console.log(flat)

/*------------- - shift  Array Methods --------------*/

let fruits1 = ["Banana", "Orange", "Apple", "Mango"];

let shift = fruits1.shift("lemon");

console.log(shift);


/*------------- - unshift  Array Methods --------------*/

let fruits2 = ["Banana", "Orange", "Apple", "Mango"];

let shift2 = fruits2.unshift("lemon");

 console.log(shift2)


/*------------- - unshift  Array Methods --------------*/

// order name

let fruits = ["Banana", "Orange", "Apple", "Mango"];

let sort = fruits.sort();


console.log(sort)

let num = [2,4,6,8,10,1,3,5,7,9]
 
let SORT = num.sort((a,b) => a - b);



console.log(SORT)


 























