var siteName=document.getElementById("siteName") ;
var siteUrl=document.getElementById("siteUrl") ;
var webSite=[] ;


if(localStorage.getItem("webSite")){
    webSite=JSON.parse(localStorage.getItem("webSite"));
    displayWeb(webSite);
}else{
    webSite=[] ;
}




function submitSite(){
    
if (validateUrl()){
bookMarker={
    name:siteName.value ,
    url:siteUrl.value,
}
webSite.push(bookMarker)
displayWeb(webSite)
    localStorage.setItem("webSite",JSON.stringify(webSite))
    
clearData()
}}



function displayWeb(list){
var cartona=''

for (var i=0 ; i<list.length ; i++)

cartona+=`<tr>
<td>${i+1}</td>
<td>${list[i].name}</td>
<td><button class="btn btn-warning" onclick="visitWeb(${i})">Visit</button></td>
<td><button class="btn btn-danger  " onclick="clearElement(${i})">Delete</button></td>
</tr>`

document.getElementById('displayData').innerHTML=cartona

}

function clearData(){
siteName.value='';
siteUrl.value='';
}


function clearElement(index){
webSite.splice(index,1)
localStorage.setItem("webSite",JSON.stringify(webSite))
displayWeb(webSite)
}

function visitWeb(index){
    
window.open(webSite[index].url);
}


function validateUrl() {
    var regex = /^https:|www.[a-z]{2,}$/
    if(regex.test(siteUrl.value)){
        siteUrl.classList.replace('is-invalid','is-valid')
        return true
    }else{
        siteUrl.classList.add('is-invalid')
        return false
        
    }
    }