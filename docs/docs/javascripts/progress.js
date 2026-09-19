document.addEventListener("scroll", function () {
  const docElement = document.documentElement;
  const body = document.body;
  const scrollTop = docElement.scrollTop || body.scrollTop;
  const scrollHeight = (docElement.scrollHeight || body.scrollHeight) - docElement.clientHeight;
  const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

  let progressBar = document.getElementById("reading-progress");
  if (!progressBar) {
    progressBar = document.createElement("div");
    progressBar.id = "reading-progress";
    progressBar.className = "reading-progress-bar";
    document.body.appendChild(progressBar);
  }
  progressBar.style.width = progress + "%";
});
function copyArticleUrl(button) {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(function () {
    const originalText = button.innerText;
    button.innerText = "کپی شد! ✓";
    button.style.backgroundColor = "#27ae60";
    setTimeout(function () {
      button.innerText = originalText;
      button.style.backgroundColor = "#555";
    }, 2000);
  });
}
