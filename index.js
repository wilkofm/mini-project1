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

const dropdownGenre = document.querySelectorAll(".dropdown-genre");
dropdownGenre.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();

    const genre = item.getAttribute("data-category");
    const filteredGenres = data.filter((post) => post.genre === genre);

    renderPosts(filteredGenres);
  });
});

const yearRanges = {
  "2020s": { start: 2020, end: 2029 },
  "2010s": { start: 2010, end: 2019 },
  "1990s": { start: 1990, end: 1999 },
  "1980s": { start: 1980, end: 1989 },
  "1970s": { start: 1970, end: 1979 },
  "1950s": { start: 1950, end: 1959 },
};

const dropdownYear = document.querySelectorAll(".dropdown-year");
dropdownYear.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();

    const yearCategory = item.getAttribute("data-category");
    const { start, end } = yearRanges[yearCategory];

    const filteredYears = data.filter((post) => {
      const launchYear = parseInt(post.launchYear);
      return launchYear >= start && launchYear <= end;
    });

    renderPosts(filteredYears);
  });
});

const ratingRanges = {
  9: { start: 9.0, end: 9.9 },
  8: { start: 8.0, end: 8.9 },
  7: { start: 7.0, end: 7.9 },
  6: { start: 6.0, end: 6.9 },
};

const dropdownRating = document.querySelectorAll(".dropdown-rating");
dropdownRating.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();

    const ratingCategory = item.getAttribute("data-category");
    const { start, end } = ratingRanges[ratingCategory];

    const filteredRating = data.filter((post) => {
      const rating = parseInt(post.rating);
      return rating >= start && rating <= end;
    });

    renderPosts(filteredRating);
  });
});
