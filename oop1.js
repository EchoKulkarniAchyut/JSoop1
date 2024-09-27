/**********************************this keyword in sloppy mode*********************** */
// in Nodejs this refers to Global Object or the current object based on how the fuction is called

    // console.log(this) //* {} or empty Object. Accessing this on global EC outside a functin gives empty object

function foo() {
  console.log(this); //  Object [global] {... Accessing this on function EC inside a functin gives Global object
}
    // foo() 

const obj = {
    par1: "Hello world",
    myFun: function () {
      console.log(this); // { par1: 'Hello world', myFun: [Function: myFun] }
      //   console.log(this.par1); // Hello world
    //   console.log(par1); // ReferenceError: par1 is not defined
    }
}
// obj.myFun() // function called using object , this refers to the immediate object that holds this funtion

const obj1 = {
  par1: "Hello world",
  obj2: {
    par2: "Inside obj2 object",
    newMyFun: function () {
        console.log(this); // { par2: 'Inside obj2 object', newMyFun: [Function: newMyFun] }
      //   console.log(this.par2); // Inside obj2 object
        // console.log(this.par); // undefined
      //   console.log(obj2.par2); // ReferenceError: obj2 is not defined
      //   console.log(obj1.obj2.par2); // Inside obj2 object
    }
  },
};
// obj1.obj2.newMyFun(); // function called using object , this refers to the immediate object that holds this funtion

const obja = {
  par1: "Hello world",
  objb: {
    par2: "Inside obj2 object",
    boo: function () {
      //   console.log(objb.par2); //ReferenceError: par2 is not defined ReferenceError: objb is not defined
      // console.log(par2); //ReferenceError: par2 is not defined
      //   console.log(obja.objb.par2); // Inside obj2 object . In order to access anything inside the nexted objects we need to do obja.objb.

      function foo() {
        console.log(this); //  Object [global] {... as the function foo() is called by itself
      }
      foo()

        //   console.log(this.par2); // this refers to current object here o/p: Inside obj2 object
        // console.log(this.par1) //undefined as current object does not have any variable called par1
    },
  },
};

// obja.objb.boo() // calling function through nested objects

// console.log(this.oops) // undefined
// console.log(oops) // ReferenceError: oops is not defined


const myArrow = () => {
  console.log(this)
}
// myArrow() // {}

const arrObj = {
  prop: 'This an is object',
  obArr: () => {
    console.log(this)
  }
}
// arrObj.obArr() // {}

const arrObj1 = {
  prop: 'This an is object',
  obArr: function () {
    const innerArraow = () => {
      console.log(this);
    }
    innerArraow()
  }
}
// arrObj1.obArr(); // { prop: 'This an is object', obArr: [Function: obArr] }