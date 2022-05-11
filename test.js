//spread, rest

function sum(...args){ //rest operator
let totalsum = 0;
for(const arg of args)
{
totalsum+=arg;
}
return totalsum;
}

var myArray =[4,5,1,2]; 

console.log(sum(...myArray)); 
