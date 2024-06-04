class ItsMe {
  constructor() {
    (this.name = "공욱재"), (this.age = 26), (this.home = "대전");
  }
  setence(){
    return this.name + "는 미남이다";
  }
}

let itsMe = new ItsMe();
console.log(itsMe);
