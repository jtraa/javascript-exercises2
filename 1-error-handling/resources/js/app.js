const user = {email: `jdoe@gmail.com`};

try {
    //Produce a ReferenceError
// myFunction();

//Produce a TypeError
// null.myfunction();

// Will produce SyntaxError
// console.log(eval(`2+2`));
// eval('Hello World');

//Will produce a URI error
// decodeURIComponent(`%`);
// console.log(e.name);

if(!user.name){
    // throw 'User has no name';
    throw new SyntaxError('User has no name');
}

}catch(e){
    console.log(`User Error: ${e.message}`)
    // console.log(`${e.name}: Error`);
console.log(e);
// console.log(e.name);
// console.log(e.message;
// console.log(e instanceof TypeError);
}finally {
    console.log('Finally runs reguardless of result...')
}


console.log('Program Continues...')