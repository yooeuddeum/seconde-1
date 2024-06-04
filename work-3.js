console.log("밑도 끝도없는 this :", this);

function WorkThree(a, b) {
  console.log("함수 안에 this :", this);
  return a + b;
}

console.log(WorkThree(1, 2));
