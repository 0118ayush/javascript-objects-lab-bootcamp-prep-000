var recipes ={flour: "1 cup"};

function updateObjectWithKeyAndValue(recipes, key, value){
  recipes[key] = value; 
  return recipes
}



function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign({}, recipes, {key: value}); 
  
}
