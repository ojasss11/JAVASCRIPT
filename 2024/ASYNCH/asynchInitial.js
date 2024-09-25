/*
fetch(`https://randomuser.me/api/`)
  .then((raw) => raw.json())
  .then((readable) => console.log(readable.results[0].gender));
// https://jsonplaceholder.typicode.com/posts
fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then((raw) => raw.json())
  .then((readable) => console.log(readable[0]));
// Weather data -->https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY`
)
  .then((raw) => raw.json())
  .then((read) => console.log(read));
fetch("https://dog.ceo/api/breeds/image/random")
  .then((raw) => raw.json())
  .then((read) => console.log(read));
// AXIOS
console.log("                                      ");
axios
  .get(`https://randomuser.me/api/`)
  .then((result) => console.log(result.data));
*/
// Promises::Koi code socho man main, jo async code ho, jo side stack main jayega aur baad main chalega main stack ke,ab ye socho ki apne iss code ko likha hai toh iska answer kabhi aayega aur aisa bhi ho sakta hai ki iska answer na aaye,PROMISES kya hai ki aisa samzo ki aap promise ke andar koi bhi async code likh do jo man main aaye aur PROMISE apko ek parchi de deta hai aur uss parchi par bydefault likh hota hai waiting

//Parchi par do events hote hai mainly ek event ka naam hai then aur ek event ka naam hai catch,agar apka data aagaya toh parchi pe RESOLVED likh jayega WAITING ki jagha and then chalega aur agar data main dikkat aayi toh catch chalega aur WAITING ki jagha rejected likh jayega
let letter = new Promise(function (resolve, rejected) {
  //Jaake ek user lao agar vo male ho toh green button, nhi toh red button
  fetch(`https://randomuser.me/api/`)
    .then((raw) => raw.json())
    .then((result) => {
      // console.log(result.results[0].gender);
      if (result.results[0].gender === "male") resolve();
      else rejected();
    });
});
console.log(letter);
letter
  .then(function () {
    console.log("Green button");
  })
  .catch(function () {
    console.log("red button");
  });
// new Promise((resolve, rejected) => {});
