function fetchStars(repo) {
  fetch(`https://api.github.com/repos/${repo}`)
    .then(response => response.json())
    .then(data => {
      document.querySelector('[data-repo="' + repo + '"]').textContent = data.stargazers_count;
    });
}
