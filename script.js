
var like = 1;
var array = [];
document.querySelectorAll('#Liker').forEach(function(Liker){
document.querySelector("#Liker").addEventListener('click', function(event) {
    Liker.innerHTML = "<input type ='button' class = 'Likes' value = '"+like +' '+"liked it' >";
    like++;
	})
})
	
document.querySelector("#ClassButt").addEventListener('click', function(event) {
     
	var title = document.getElementById('tittle');
    var text = document.getElementById("text");
	var newDiv = document.createElement("div");
    newDiv.innerHTML = '<br><div id = "Class1"> <p class  = "ClassTittle"><strong class = "titl">'+title.value+'</strong></p><p class = "ClassText">'+text.value+'<br></p><figure class = "ClassImg"><img src="https:/i.ytimg.com/vi/tUcKtqmI8E0/maxresdefault.jpg" width="256" height="256" alt="ERROR"></figure><p>AUTHORED BY "XXXTOKYOCYON"</p><div id = "Liker"><input type ="button" class = "Likes" value = "0 liked it" ></div></div><br>';
    document.body.insertBefore(newDiv, null);
    array.push(newDiv);
    document.querySelectorAll('Liker').forEach(function(param){
    param.addEventListener('click', function(event) {
    param.innerHTML = "<input type ='button' class = 'Likes' value = '"+like +" "+"liked it' >";
    like++;
	})
})
});

