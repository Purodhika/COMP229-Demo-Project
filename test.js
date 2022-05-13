

function sumProd(a,b,...args)
{ 
let total = 0;
let prod  = a*b;
for(const arg of args)
{
total+=arg;
}
return [prod,total];
}

var myArray =[2, 6, 1, 5]; 

console.log(sumProd(...myArray)); 
