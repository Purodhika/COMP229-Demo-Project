

function sum(...args)
{ 
let total = 0;
for(const arg of args)
{
total+=arg;
}
return total;
}

var myArray =[2, 6, 1, 5]; 

console.log(sum(...myArray)); 
