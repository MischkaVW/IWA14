const firstName = 'John';
const age = 35;
const hobby = 'Coding';

const logTwice = function (hobby1)  {
  console.log(hobby1)
  console.log(hobby1)
}

const hobby1 = function () {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)
}

hobby1()