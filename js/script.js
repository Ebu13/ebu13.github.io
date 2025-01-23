const username = "Ebu13";
const reposContainer = document.getElementById("repos");
const searchInput = document.getElementById("search");
const contactForm = document.getElementById("contact-form");
const thankYouMessage = document.getElementById("thank-you-message");

let repos = [];

async function fetchRepos() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    if (!response.ok) {
      throw new Error(`GitHub API hatası: ${response.status}`);
    }
    repos = await response.json();
    updateRepos(repos);
  } catch (error) {
    console.error("Repo bilgileri alınamadı:", error);
    reposContainer.innerHTML =
      '<p class="text-danger">Projeler yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.</p>';
  }
}

function updateRepos(filteredRepos) {
  reposContainer.innerHTML = "";
  if (filteredRepos.length === 0) {
    reposContainer.innerHTML =
      '<p class="text-muted">Aramanıza uygun proje bulunamadı.</p>';
    return;
  }

  filteredRepos.forEach((repo) => {
    const repoCard = `
          <div class="col-md-4 my-3">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">${repo.name}</h5>
                <p class="card-text">${repo.description || "Açıklama yok"}</p>
                <a href="${
                  repo.html_url
                }" target="_blank" class="btn btn-primary">Projeyi Gör</a>
              </div>
            </div>
          </div>
        `;
    reposContainer.innerHTML += repoCard;
  });
}

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm)
  );
  updateRepos(filteredRepos);
});

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  try {
    const response = await fetch(contactForm.action, {
      method: contactForm.method,
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      contactForm.reset();
      thankYouMessage.style.display = "block";
    } else {
      alert("Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.");
    }
  } catch (error) {
    alert("Mesaj gönderilemedi. Lütfen tekrar deneyin.");
    console.error("Form gönderimi hatası:", error);
  }
});

fetchRepos();
