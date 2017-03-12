//call back function

function greet(callback){
  console.log('hello');
  var data={
    name:'dtd ntue'
  };
  callback(data);
}

greet(data=>{
  console.log(`invoked`);
  console.log(data);
});
