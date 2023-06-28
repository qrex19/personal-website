//making icons clickable

const github = document.querySelector("#github-icon");
const twitter = document.querySelector("#twitter-icon");

github.addEventListener("click", function run() {
  open("https://github.com/qrex19");
});

twitter.addEventListener("click", function run() {
  open("https://twitter.com/nishants_twt");
});
