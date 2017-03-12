//this

var person={
  firstname:'wu',
  lastname:'wei',
  greet0:function(){
    console.log(this);
  }
}

var person1={
  firstname:'wu',
  lastname:'wei',
  greet1:()=>{
    console.log(this);
  }
}

var person2={
  firstname:'wu',
  lastname:'wei',
  greet2:function(){
    (()=>{
      console.log(this);
    })();
  }
}


person.greet0();
person1.greet1();
person2.greet2();



