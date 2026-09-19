function updateProgressBar() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

  let progressBar = document.getElementById("reading-progress");
  if (!progressBar) {
    progressBar = document.createElement("div");
    progressBar.id = "reading-progress";
    progressBar.className = "reading-progress-bar";
    document.body.appendChild(progressBar);
  }
  progressBar.style.width = Math.min(100, Math.max(0, progress)) + "%";
}

window.addEventListener("scroll", updateProgressBar, { passive: true });
document.addEventListener("DOMContentLoaded", updateProgressBar);

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
