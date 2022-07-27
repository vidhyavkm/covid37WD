//https://api.covid19api.com/dayone/country/south-africa

var div = document.createElement('div');
div.innerHTML=`<input type ="text" id="txt">
<button type="button" onclick="foo()"> Search </button> 
<div id="active"></div>`;
div.style.textAlign="center";
document.body.append(div);

async function foo() {
    // alert("hello")
    let cc = document.getElementById("txt").value;

    console.log(cc);

    let res = await fetch(`https://api.covid19api.com/dayone/country/${cc}`)

    let res1 = await res.json();

    console.log(res1);

    let index = res1.length-1;

    var result = res1[index].Active;

    console.log(result);

    document.getElementById("active").innerText=`Total Active Cases:${result}`;
}