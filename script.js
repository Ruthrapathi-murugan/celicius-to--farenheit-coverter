function start(){
    const val=Number(document.getElementById("input").value);
    const res=val*(9/5)+32;
    const result1=document.getElementById("result")
    result1.innerHTML=res;
}