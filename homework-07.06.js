let firstName = 'Aidyn';
const FAMILY_NAME = 'Sairan';
var age = 22;
let mal = null;
let ochenKruto = undefined;
const vajno = true;

const address = 'Stepnoy-4-2';
console.log(firstName, FAMILY_NAME, age, address);

let book = {
    name: 'Lord of the Rings',
    year: 1956,
    author: 'J. R. R. Tolkien',
}


alert(book.name);
alert(book.author);

book.genre = 'fantasy';

delete book.genre;

let notebook = 'Macbook';
book[notebook] = 'Lenova';


let name = 'Erdos';
let friendAge = 23;
let product = { name, friendAge};

product.show function() {
    console.log(this.name + this.friendAge);
}

let dalidaShop = {
    'Macbook',
    'Lord of the rings',
    'Iphone',
    'water',
    'book',
    'JavaScript',
    'Java',
}

let shopThings = 0;
for(let i = 0; i < dalidaShop.length; i++) {
    shopThings += 1;
}
console.log(shopThings);

let e = 0;
let shopThingsText = "";

while (text[e]) {
  shopThingsText += text[e];
  e++;
}

function isThereAnyThings(sth) {
    return dalidaShop.includes(sth);
}

isThereAnyThings('water');
isThereAnyThings('books');

function show(name, surname) {
    console.log(`His name is ${name} and family name is ${surname}`);
}

show('aidyn', 'sairan');

let onlyBooks = dalidaShop.filter((book) => book === 'book' || book === 'Lord of the rings');

let otherBook = dalidaShop.map((book) => marker(book));

const numbers = { firstNum, secondNum, ...otherNum } = {
    firstNum = 77;
    secondNum = 105;
    thirdNum = 34;
    forthNum = 58;
    fifthNum = 42;
}
console.log(otherNum.slice())

console.log(otherNum);

const salam = ['Che tam brat', 'qalai jagdai?', ];
const privetsvie = { ...salam, 'yu jumsyn', 'jasadyn ba?' };

console.log(privetsvie);

const coolName = 'Sairan Aidyn Janatuly';
console.log(...coolName);

const number = [54, 66, 23, 33] 
function plusNum(a, n, d, h) {
    return a - n * d / h;
}
console.log(plusNum(...number));

