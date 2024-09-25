// ASYNC JS
// Aisa koi bhi code jismain time lagta hai,JS main usse by default ASYNC code mankar side stack main daal diya jata hai
// setTimeout,setInterval,FETCH API,AXIOS,Promise  ye sab use hie tab kiye jate hai jab kuch aisa karna hai jismain timelagta ho
// setTimeout : setTimeout ka code kuch der baad chalta hai
// setInterval : setInterval ka code kuch der baad chalta hai baar baar ek particular interval ke baad
//Fetch api:: Ye kisi aur (API)/url par jakar kuch data layega  ya data hamare pas se uss url par lekar jayega
// Axios:: Ye bhi vahi karega jo fetch karta hai bas ye thoda jyada developer friendly hai
// promise:iske andar jo code likhoge vo apna kaam karega aur ye khud side stack main chala jayega uss code ko lekar aur jab andar se code ke resolve kiya jayega tab ye chalega
console.log("hey 1");
console.log("hey 2");
setTimeout(function () {
  console.log("hey 3");
}, 1000); //1000 millisecond -->1 second ke baad chal jayega
console.log("hey 4");
// Firstly hey1,hey2,hey4 will be executed and then hey4
/*
console.log("hey 1");
console.log("hey 2");
console.log("hey 4");
ye tino jayenge main stack main aur 
console.log("hey3")  jayega side--stack main
*/
setTimeout(() => {
  console.log("champ");
}, 2000);
/*
setInterval(() => {
  console.log("hello interval");
}, 2000);
*/
let count = 1;
let interval = setInterval(() => {
  console.log("New interval " + count);
  count++;
  if (count === 4) {
    clearInterval(interval);
  }
}, 2000);
// RANDOM USER API:https://randomuser.me/api/::(Kyuki ye internet par jayega aur fir data ko lekar aayega toh ismain time lagta hai toh by default hie js main fetch ko async banaya gaya hai kyuki fetch ka kaam hai data ko lana vo bhi kisi url se ab yesa ho sakta hai ki uss url ki website slow ho, toh data lane main time lage aur agar fetch synchronous hota toh uske baad ka code tab tak nhi chalta jab tak uska data nhi aajata,which is a big problem)
// Pura code atak sakta tha
/*
fetch(`https://randomuser.me/api/`);-->ye jayega side stack pe
console.log("after code");-->ye aayega main stack pe
*/
