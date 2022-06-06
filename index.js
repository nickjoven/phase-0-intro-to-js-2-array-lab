// Test 1, check for const

const cats = ["Milo" , "Otis", "Garfield"];

// Test 2, function destructivelyAppendCat

function destructivelyAppendCat(name) {
    cats.push(name);
}

// Test 3, function destructivelyPrependCat

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// Test 4, function destructivelyRemoveLastCat

function destructivelyRemoveLastCat() {
    cats.pop();
}

// Test 5, function destrtivelyRemoveFirstCat

function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Test 6, nondestructively function appendCat

function appendCat(name) {
    const appendArray = [...cats];
    appendArray.push(name);
    return appendArray;
}

// Test 7, nondestructively function prependCat

 function prependCat(name) {
    const prependArray = [...cats];
    prependArray.unshift(name);
    return prependArray;
}

/* This works, but I wonder what the "right solution is?"
function prependCat(name) {
    const prependArray = [...cats];
    prependArray.splice(0, 0, name);
    return prependArray;
}
*/

// console.log(prependCat("Nutmeg")); // => I guess it worked...

// Test 8, nondestructively remove last cat
 /* function removeLastCat() {
     const removeLastArray = cats.slice(0, 2);
     return removeLastArray;
 }

// console.log(cats.slice(0, 2)); This is another way to do it.
*/


function removeLastCat() {
    const removeLastArray = [...cats];
    removeLastArray.pop();
    return removeLastArray
}

// Test 9, nondestructively remove first cat

function removeFirstCat() {
    const removeFirstArray = cats.slice(1);
    return removeFirstArray;
}

// Wonder what's better practice.




