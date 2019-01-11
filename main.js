// ХТМЛ шаблон для поста
const postTempate = (title, text, author, likes) => `
<br>
  <div id="Class1">
      <p class="ClassTittle">
        <strong class="title">${title}</strong>
     </p>
      <p class="ClassText">${text}<br>
     </p>
      <figure
         class="ClassImg"><img src="https://2sticker.ru/wa-data/public/shop/products/00/10/1000/images/3460/3460.750.png" width="256" height="256" alt="ERROR">
     </figure>
      <p>
         Authored by "${author}"
     </p>
      <div id="Liker">
        ${likes} liked it
     </div>
  </div>
  <br>`;

const apiURL = "https://jsonplaceholder.typicode.com/posts?userId=3";
const postTitle = document.getElementById("title");
const postText = document.getElementById("text");
const postAuthor = document.getElementById("author");

// Массив всех постов
const posts = [];

// Фуннкция для создания поста
const addPost = (title, text, author, likes) => {
  // Пушим новый пост в наш массив
  posts.push({ title, text, author, likes });
  console.log({ title, text, author, likes });

  // Создаём хтмл элемент для нашего нового поста
  let newDiv = document.createElement("div");
  newDiv.innerHTML = postTempate(title, text, author, likes);

  // Вешаем лисенер на лайкер в нашем новом посте (вместо document.querySelector мы исспользуем newDiv.querySelector т е ищем лайкер только в этом посте)
  const newLiker = newDiv.querySelector("#Liker");
  newLiker.addEventListener("click", () => {
    // Находим наш пост в массиве постов что-бы добавить ему лайк
    const post = posts.find(p => {
      // По идее у постов должны быть ID, но так как их нет мы будем сравнивать по тайтлу
      return p.title === title;
    });

    // Добавляем до старых лайков ещё один
    const newLikes = post.likes + 1;

    // Изменяем старые лайки в массиве и в элементе
    post.likes = newLikes;
    newLiker.innerHTML = newLikes + " "+"liked it";
  });

  // Добавляем новый хтмл элемент
  document.body.appendChild(newDiv);
};

document.querySelector("#ClassButt").addEventListener("click", function(event) {
  addPost(postTitle.value, postText.value, postAuthor.value, 0);
});

document.querySelector("#FetchButt").addEventListener("click", function(event) {
  fetch(apiURL)
    .then(res => res.json())
    .then(posts =>
      posts.forEach(post => {
        const { title, body, id } = post;
        addPost(title, body, id, 0);
      })
    );
});

document
  .querySelector("#ServerButt")
  .addEventListener("click", function(event) {
    fetch(apiURL, {
      method: "POST",
      body: JSON.stringify({
        title: postTitle,
        text: postText,
        author: postAuthor
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(res => res.json())
      .then(newpost => {
        addPost(postTitle.value, postText.value, postAuthor.value, 0);
      });
  });
