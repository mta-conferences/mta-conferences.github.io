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
