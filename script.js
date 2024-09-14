function na(){
    var num1=document.getElementById("one").value;
    var num2= document.getElementById("two").value;
    var sum = document.getElementById("three");
    
    var s=Number.parseFloat(num1)+ Number.parseFloat(num2);
    sum.innerHTML=("sum of number is "+s);


}
function nb(){
    var num1=document.getElementById("four").value;
    var num2= document.getElementById("five").value;
    var sum = document.getElementById("six");
    var s=Number.parseFloat(num1)-Number.parseFloat(num2);
    sum.innerHTML=("difference of number is "+s);


}
function nc(){
    var num1=document.getElementById("seven").value;
    var num2= document.getElementById("eight").value;
    var sum = document.getElementById("nine");
    var s=Number.parseFloat(num1)/Number.parseFloat(num2);
    sum.innerHTML=("division of number is "+s);
}
function nd(){
    var num1=document.getElementById("ten").value;
    var num2= document.getElementById("eleven").value;
    var sum = document.getElementById("twelve");
    var s=Number.parseFloat(num1)*Number.parseFloat(num2);
    sum.innerHTML=("product of number is "+s);
}
function ne(){
    var num1=document.getElementById("13").value;
    var sum = document.getElementById("14");
    var s=Number.parseInt(num1)
    var b;
    Array=[]

while(s>=1){
    b=s%2;
    Array.push(b);
    s=Math.floor(s/2);

}
Array0=[];
for(let i=Array.length;i>=0;i--){
    Array0.push(Array[i]);
}
Array1=Array0.join(" ")
sum.innerHTML=("binary of number is "+Array1)
    

}
 
$("#btod").click(function(){
        var valu = $("#num1").val();
        var len = valu.length;
        var count = 0;
        for (let i = 0; i < len; i++){
            if (valu[i] === '1'){
                count += Math.pow(2, len - 1 - i);
            }
        }
        $("#dis").innerHTML("The decimal number is "+count);
    });  
