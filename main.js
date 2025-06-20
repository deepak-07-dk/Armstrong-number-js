var number = prompt("enter your number:");
let sum=0;
let temper=number;
while(temper>0){
	let remb=(temper%10);
sum+=remb*remb*remb;
temper=Math.floor(temper/10);
}
if(sum==number){
    console.log("it is armstrong number");
}else{
	console.log("it is not armstrong number");
}	






