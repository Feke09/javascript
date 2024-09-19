/* depending on the data types of a value,is what determines,what we can do with that value,
what kind of operations we can perform on that value*/

// string data type
// anything between single quote'' or double quote ""is a string

const PLACE_OF_ORIGIN = "edo";
const AGE = "89";

//number data type
const DISTANCE = 546.78;
const DOLLAR_RATE = 1500;
const INTEREST_RATE = 7.8;

//boolean data type
const IS_YUSUF_AVAILABLE = true;
const IS_CLASS_HOLDING = false;

//null data type
const TOTAL_COST = null;
const EXPECTED_RETURN = null;

//undefined data type
let DESTINATION;

//array data type
const studentOne = "oladapo";

//array data type
//for storing values that are similar together
//each item is an array is seperated by a comma
const STUDENTS = ["oladapo", "ahmad", "yusuf"];
const MY_TECH_STACK = ["javascript", "HTML", "css", "tailwindcss"];
const studentScores = ["100", "43", "78"];

const MY_NAME = "feke";
const age = "70";
const marital_status = "divorsed";
const place_of_birth = "lagos";
const isSick = "false";
const hobbies = ["sleeping", "gaming", "fighting"];

//object data type
//objects allows us to group attributes of a real world object together

const USER_BIO = {
  name: "feke",
  age: "70",
  marital_status: "divorsed",
  isSick: false,
  hobbies: ["fighting", "gaming", "sleeping"],
};

const Laptop = {
  brand: "apple",
  laptopName: "macbook pro",
  isFaulty: "false",
  isInGoodStatus: "true",
  storage: "1 gigabyte",
  color: "silver",
};

//accessing individual values in an array
//individual values in an array are accesed by their indexes
const states_in_nigeria = ["lagos", "edo", "kano", "imo"];
const exchange_rates_in_nigeria = [155, 78, 90, 76, 56, 43, 89, 32, 32, 49, 90];

console.log(exchange_rates_in_nigeria);
console.log(exchange_rates_in_nigeria[6]);

console.log(states_in_nigeria);
console.log(states_in_nigeria[2]);

const ALL_PRODUCTS = [
  {
    product_id: "165246",
    product_name: "iphone 12",
    product_price: 12000,
    product_quantity: 3,
    product_in_stock: true,
    product_image: "https://------",
  },
];

console.log(ALL_PRODUCTS[2]);

//accessing values in an object
const phone = {
  name: "techno",
  storage_capacity: 256,
  color: "purple",
  camera: "12pixels",
  supportTypeC: true,
  supportESim: false,
};

/*when accessing items in an object,we use the object name followed by a dot then the key name(objectName.key)*/
console.log(phone.camera);
console.log(phone.supportTypeC);

//nested
const person = {
  name: "feke",
  place: {
    city: "Abuja",
    country: "nigeria",
  },
};
console.log(person.place.country);
