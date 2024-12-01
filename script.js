const url='https://api.adviceslip.com/advice';
document.getElementById("#id")
function click(e){
    if(e.target){
        reload();
    }
}
function reload(){
    document.querySelector("#id").innerHTML="--";
document.querySelector("#advice").innerHTML="wait we retriving ";
    fetch(url)
.then(function (respone)
{
    return respone.json();
    console.log(respone.json());
}
)
.then(function(data)
{
const advice=data.slip.advice;
const id=data.slip.id;
document.querySelector("#id").innerHTML=id;
document.querySelector("#advice").innerHTML="\""+advice+"\"";
}
)
}
reload();
