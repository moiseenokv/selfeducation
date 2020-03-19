
//var sample = [1, 2, 3];
//console.log("array by defaults"+sample);
//foreach

// es5

/*sample.forEach(function (elem, index){
  // console.log(elem + ' comes at ' + index);
}) */

// es6

//sample.forEach((elem, index) => console.log(`${elem} comes at ${index}`))

/*
output

1 comes at 0
2 comes at 1
3 comes at 2
*/
//console.log("array after foreach "+sample);


//filter

// es5

/*sample.filter(function(elem){
    return elem !== 2;
})

//console.log(result)

// es6

var result = sample.filter(elem =>elem !== 2);

console.log(result);

console.log("after filter configuration"+sample); */


/* Вывод */

//map

//var sample = [1, 2, 3] // Оууу еее я не изменюсь

// es5

/*var mapped = sample.map(function(elem) {
    return elem * 10;
}) */

// es6

//let mapped = sample.map(elem => elem * 10)

//console.log(mapped);

//console.log(sample);

/* Умножили всё на 10 и получили такой массив */

[10, 20, 30]

//reduce

//ever

var h="3";
var z=[2,4];

console.log(typeof h, typeof z);


var obj = [ ["hello","this","is","an","array!"], ["a","b","c","d","e!"]];
var out="";
for(i=0; i<=obj.length-1; i++){
  //console.log(Object.values(obj[i]));
  obj[i].forEach(function(item){
    out +=item+",";
  })
}
console.log(out)
//console.log(Object.assign(obj[0], obj[1]));
//Object.values(el+",")
//console.log(typeof obj);

 

