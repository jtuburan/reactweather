 var names = ['jason','julie','jen'];

// names.forEach(function(name) {
//     console.log('forEach',name);    
// }, this);

// names.forEach((name) => {
//     console.log('arrow func', name)
// });

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('jason'));

// var person = {
//     name: 'jason',
//     greet: function (){
//         names.forEach( (name) => {
//             console.log(this.name + ' says ho to ' +name)
//         });
//     }
// }
// person.greet();

// function add (a,b){
//     return a + b;
// }

// add statement
var addStatement = (a,b) =>{
    return a +b;
}
console.log(addStatement(4,7));
// add expression
var sub = (a,b) => a+b;
console.log(sub(3,-2))

// console.log(add(1,3));
// console.log(add(9,0));