"use strict";

// Babel:
//import 'babel-polyfill';

let p1 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("Resolved 1"), 2000);
});
let p2 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("Resolved 2"), 1000);
});
let p3 = new Promise(function(resolve, reject) {
  setTimeout(() => reject("Rejected 3"), 1500);
});

/*

await Promise.all([p1, p2, p3])
await (p1 && p2 && p3)

await Promise.race([p4, p5, p6])
await (p4 || p5 || p6)

await (Promise.all([p1, Promise.race([p2, p3])]))
await (p1 && (p2 || p3))

await (Promise.race([p1, Promise.all([p2, p3])]))
await (p1 || (p2 && p3))

await (p1 || p2 && p3)
??? await (p1 || p2 && p3)

await (p1 && p2 || p3)
??? await (p1 && p2 || p3)

// Can we write this in C# and make it work there?
// Is there already something available in C#?
// Can we write a Babel plugin?

*/

Promise.all([p1, p2 /*, p3 */])
  .then(arr => console.log("Success: " + JSON.stringify(arr)))
  .catch(err => console.log("Fail: " + err));

Promise.race([p1, p2 /*, p3 */])
  .then(text =>
    console.log(
      "Update user interface with result from either server or cache:",
      JSON.stringify(text)
    )
  )
  .catch(err => console.log("Fail:", err));

console.log("End of file...");
