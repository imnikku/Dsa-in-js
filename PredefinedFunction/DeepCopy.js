function DeepCopy1(obj) {
  // but have some issue like undefined value Infinity value and function and date
  return JSON.parse(JSON.stringify(obj));
}

function DeepCopy2(obj) {
  // function not coppied .... and symbol not coverted
  return structuredClone(obj);
}

// function
function DeepCopy3(obj) {
  if (
    typeof obj !== "object" ||
    obj === null ||
    obj instanceof Date ||
    obj instanceof String ||
    obj instanceof Number ||
    obj instanceof Boolean
  ) {
    return obj;
  }
  let cloneData = Array.isArray(obj) ? [] : {};
  let keys = Object.keys(obj);
  for (let item of keys) {
    cloneData[item] = DeepCopy3(obj[item]);
  }
  return cloneData;
}

const obj1 = {
  name: "nitesh kumar",
  age: 20,
  date: new Date(),
  isPass: true,
  someData: undefined,
  // symbolTest: Symbol("kkkk"),
  hi: new String("Just testing"),
  getName: function () {
    console.log(`Hello ${this.name}`);
  },
  checkNull: null,
  checkInfinity: Infinity,
};
// const obj2 = DeepCopy1(obj1);
// const obj14 = DeepCopy2(obj1);
// const obj3 = structuredClone(obj1);

obj1.age = 44;
// console.log(obj1);
// console.log(obj3);
// console.log(obj2);
// console.log(obj14);
const data = DeepCopy3(obj1);
data.name = "singh";
// data.getName();
console.log(data);
// console.log(data);
