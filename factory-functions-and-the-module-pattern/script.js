// const name = "Bob";
// const age = 28;
// const color = "red";

// const thatObject = { name: name, age: age, color: color };

// // If you wanted to log these values, earlier,
// // you would have done the following
// console.log(name, age, color);
// // which would have resulted in a mess - Bob 28 red

// // Try wrapping it in some { curly braces } now,
// // which makes it an object!
// console.log({ name, age, color });
// // now it logs as - { name: "Bob", age: 28, color: "red" }

// const obj = { a: 1, b: 2 };
// const { a, b } = obj;
// // This creates two variables, a and b,
// // which are equivalent to
// // const a = obj.a;
// // const b = obj.b;

// const array = [1, 2, 3, 4, 5];
// const [ zerothEle, firstEle ] = array;
// // This creates zerothEle and firstEle, both of which point
// // to the elements in the 0th and 1st indices of the array

function createUser (name) {
    const discordName = "@" + name;
  
    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => reputation++;
  
    return { name, discordName, getReputation, giveReputation };
  }
  
  const josh = createUser("josh");
  josh.giveReputation();
  josh.giveReputation();
  
  console.log({
    discordName: josh.discordName,
    reputation: josh.getReputation()
  });
  // logs { discordName: "@josh", reputation: 2 }

  function createUser (name) {
    const discordName = "@" + name;
  
    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => reputation++;
  
    return { name, discordName, getReputation, giveReputation };
  }
  
  function createPlayer (name, level) {
    const { getReputation, giveReputation } = createUser(name);
  
    const increaseLevel = () => level++;
    return { name, getReputation, giveReputation, increaseLevel };
  }
  


  const calculator = (function () {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return { add, sub, mul, div };
  })();
  
  calculator.add(3,5); // 8
  calculator.sub(6,2); // 4
  calculator.mul(14,5534); // 77476

  
  function createElement(type, text, color) {
    const el = document.createElement(type);
    el.innerText = text;
    el.style.color = color;
    document.body.append(el);

    return {
        el,
        setText(text) {
            el.innerText = text;
        },
        setColor(color) {
            el.style.color = color;
        }
    }
  }
  
  