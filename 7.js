//json

var personobj={
  firstname:"simon",
  fullname:"",
  age:37,
  married:true,
  hasownhair:null,
  chidren:[{
    firstname:"erica"
  },{
    firstname:"isobel"
  }]
};

var personjson=JSON.stringify(personobj);
console.log(personobj);
console.log(personjson);




