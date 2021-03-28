//function statement named createArray with parameter number
function createArray(number){

    var newArray = [];
  //fix infinit loop by completing the for loop which is missing a part
  //the part is the initial emement incroments by one which is 
  //counter ++
    for(var counter = 1; counter <= number; counter++){
      newArray.push(counter);
    }
    
    return newArray;
  }