
// function workOne(a, b) {
//   if (typeof a === "number") {
//     if (typeof b === "number") {
//       let local = a + b;
//       return local;
//     }
//   }
// }

function workOne(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    let local = a + b;
    return local;
  } else {
    console.log("매개변수 잘못적음");
  }
}

