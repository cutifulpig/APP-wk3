//bind

var person={
  firstname:'wei',
  lastname:'wu',
  getname:function(){
    var fullname=this.firstname+' '+this.lastname;
    return fullname;
  }
}


var logname=function(){
  console.log(`logged: `+this.getname());
}

var logpersonname=logname.bind(person);
logpersonname();




