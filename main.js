const template = data => `<h1>${data}</h1>`;
const postTitle = document.getElementById('tittle');
const postText = document.getElementById("text");
const postAuthor = document.getElementById("author");



document.querySelector("#FetchButt").addEventListener('click', function(event)
{
fetch("https://jsonplaceholder.typicode.com/posts?userId=3")
 .then(res => res.json())
 .then(posts => posts.forEach(post => {
  let serDiv = document.createElement("div");
 serDiv.innerHTML +=`
  <br>
    <div id = "Class1">
        <p class  = "ClassTittle">
          <strong class = "titl">${post.title}</strong>
       </p>
        <p class = "ClassText">${post.body}<br>
       </p>
        <figure
           class = "ClassImg"><img src="https://2sticker.ru/wa-data/public/shop/products/00/10/1000/images/3460/3460.750.png" width="256" height="256" alt="ERROR">
       </figure>
        <p>
           Authored by "${post.id}"
       </p>
        <div id = "Liker">
          <input type ="button" class = "Likes" value = "0 liked it" >
       </div>
    </div>
    <br>`;
    document.body.insertBefore(serDiv, null);
    document.querySelectorAll('#Liker').forEach(function(param)
    {
      let likeSer =1;
      param.addEventListener('click', function(event) 
      {
        param.innerHTML = "<input type ='button' class = 'Likes' value = '"+likeSer +" "+"liked it' >";
        likeSer++;
    })
    })
 } ));
});
document.querySelectorAll('#Liker').forEach(function(Liker)
{
	let like = 1;
    document.querySelector("#Liker").addEventListener('click', function(event) 
    {
      Liker.innerHTML = "<input type ='button' class = 'Likes' value = '"+like +' '+"liked it' >";
      like++;
	})
})
document.querySelector("#ClassButt").addEventListener('click', function(event)
{
	  let newDiv = document.createElement("div");
    newDiv.innerHTML =`
  <br>
    <div id = "Class1">
        <p class  = "ClassTittle">
          <strong class = "titl">${postTitle.value}</strong>
       </p>
        <p class = "ClassText">${postText.value}<br>
       </p>
        <figure
           class = "ClassImg"><img src="https://2sticker.ru/wa-data/public/shop/products/00/10/1000/images/3460/3460.750.png" width="256" height="256" alt="ERROR">
       </figure>
        <p>
           Authored by "${postAuthor.value}"
       </p>
        <div id = "Liker">
          <input type ="button" class = "Likes" value = "0 liked it" >
       </div>
    </div>
    <br>`;
    document.body.insertBefore(newDiv, null);
    document.querySelectorAll('#Liker').forEach(function(param)
    {
      let likeNew =1;
      param.addEventListener('click', function(event) 
      {
        param.innerHTML = "<input type ='button' class = 'Likes' value = '"+likeNew +" "+"liked it' >";
        likeNew++;
	  })
    })
});  
document.querySelector("#ServerButt").addEventListener('click',function(event){
     let newSerDiv =  document.createElement("div");
     fetch('https://jsonplaceholder.typicode.com/posts',{method : 'POST',body: JSON.stringify({
      title: postTitle,
      text: postText,
      author: postAuthor
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }})
     .then(res => res.json())
     .then(newpost => {
      newSerDiv.innerHTML =`
  <br>
    <div id = "Class1">
        <p class  = "ClassTittle">
          <strong class = "titl">${postTitle.value}</strong>
       </p>
        <p class = "ClassText">${postText.value}<br>
       </p>
        <figure
           class = "ClassImg"><img src="https://2sticker.ru/wa-data/public/shop/products/00/10/1000/images/3460/3460.750.png" width="256" height="256" alt="ERROR">
       </figure>
        <p>
           Authored by "${postAuthor.value}"
       </p>
        <div id = "Liker">
          <input type ="button" class = "Likes" value = "0 liked it" >
       </div>
    </div>
    <br>`;
    document.body.insertBefore(newSerDiv, null);
    document.querySelectorAll('#Liker').forEach(function(param)
    {
      let likeNew =1;
      param.addEventListener('click', function(event) 
      {
        param.innerHTML = `<input type ='button' class = 'Likes' value = '${likeNew} liked it' >`;
        likeNew++;
    })
    })
     })
});

  

