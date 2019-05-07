function printArray(array){
var out="";
result=""
for(i=0; i<=array.length-1; i++){
  if(typeof array[i] =="object"){
    array[i].forEach(function([]){
    out +=item[key]+","; 
    });
  }else{
out +=array[i]+","
}
}
return out.slice(0, -1);
}
obj2 = [ [ 'hello', 'this', 'is', 'an', 'array!' ], [ 1, 2, 3, 4, 5 ] ];
obj = [ [ 'hello', 'this', 'is', 'an', 'array!' ],[ 'a', 'b', 'c', 'd', 'e!' ] ];
obj3 = [ { firstName: 'John', lastName: 'Doe' }, { firstName: 'Ruslan', lastName: 'López' } ];


obj3.forEach((value, key) => console.log(value))
//let arr = Object.keys(obj).map((k) => obj[k])


//console.log(printArray(obj3))
//console.log(obj3)




//works


var out="";
result=""
for(i=0; i<=array.length-1; i++){
  if(typeof array[i] =="object"){
    array[i].forEach(function(item){
    out +=item+","; 
    });
  }else{
out +=array[i]+","
}
}
return out.slice(0, -1);

//
var out="";
var result=""
for(i=0; i<=array.length-1; i++){
  if(typeof array[i] =="object"){
    array[i].forEach(function(item){
    out +=item+","; 
    });
  }else{
out +=array[i]+","
}
}


function printArray(array){
    console.log(array)
    var out="";
    var result=""
    for(i=0; i<=array.length-1; i++){
      if(typeof array[i] =="object"){
        array[i].forEach(function(item){
        out +=item+","; 
        });
      }else{
    out +=array[i]+","
    }
    }
    return out.slice(0, -1);
    }