// class WorkTwo {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }

//   set a(value) {
//     if (typeof value === "number") {
//       return (this._a = value);
//     } else {
//       throw new Error("a는 숫자만 가능합니다.");
//     }
//   }
// }

// let test = new WorkTwo("qqq", 2);
// console.log(test);


class WorkTwo {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  set a(value) {
    if (typeof value === "number") {
      return (this._a = value);
    } else {
      throw new Error("a는 숫자만 가능합니다.");
    }
  }
}

let test = new WorkTwo(1, 2);
console.log(test);


