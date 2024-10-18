let data = [];

fetch("data.json")
  .then((response) => response.json())
  .then((fetchedData) => {
    data = fetchedData.movies;
    renderPosts(data);
  });

function renderPosts(posts) {
  const postsContainer = document.getElementById("posts-container");
  postsContainer.innerHTML = "";

  posts.forEach((post) => {
    const card = document.createElement("div");
    card.classList.add("col-12", "col-sm-6", "col-md-3");

    card.innerHTML = `
        <div class="card" style="width: 18rem;">
  <img src="${post.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${post.title}</h5>
    <p class="card-text">${post.director}</p>
    <p class="card-text">${post.launchYear}</p>
    <p class="card-text">${post.genre}</p>
    <p class="card-text">${post.rating}</p>
    </div>
</div>`;

    postsContainer.appendChild(card);
  });
}
