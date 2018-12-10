$('document').ready(function()
{

$('button').on('click',function(){
	var newDiv = document.createElement("div");
        newDiv.innerHTML = "<div id = 'Class1'> <p class  = 'ClassTittle'><strong>TITLE ABOUT LIFE</strong></p><p class = 'ClassText'>My sanity left me,<br>When I was 17,<br>My heart broke beyond repair, <br>When I was 17,<br>I Realized the pain is and will always be a cycle,When I was 17<br>You are not alone.<br>Rest in Power<br></p><figure class = 'ClassImg'><img src='C:\Users\alexey\Desktop\sanyaex\XXXT.jpg' width='256' height='256' alt='ERROR'></figure><p>AUTHORED BY XXXTOKYOCYON'</p><p class = 'Likes'>Likes : 10</p></div><br>";

    // добавляем только что созданый элемент в дерево DOM
    document.body.insertBefore(newDiv, null);
});
});