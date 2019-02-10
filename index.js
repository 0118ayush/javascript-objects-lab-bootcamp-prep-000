var recipes ={flour: "1 cup"};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
}


/*
function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign({}, recipes, {key: value}); 
  
}
*/