function showContent(id) {
  document.querySelectorAll(".content").forEach(el => el.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function goHome() {
  document.querySelectorAll(".content").forEach(el => el.classList.remove("active"));
  document.getElementById("home").classList.add("active");
}
