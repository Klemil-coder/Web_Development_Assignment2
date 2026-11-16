const animalCards = document.querySelectorAll("[data-wikipedia-title]");

async function loadAnimalSummary(card) {
  const title = card.dataset.wikipediaTitle;
  const summary = card.querySelector(".animal-summary");
  const link = card.querySelector(".wikipedia-link");

  try {
    const response = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`
    );

    if (!response.ok) {
      throw new Error(`Wikipedia returned ${response.status}`);
    }

    const data = await response.json();

    summary.textContent = data.extract || "No summary is available for this animal.";

    if (data.content_urls?.desktop?.page) {
      link.href = data.content_urls.desktop.page;
      link.hidden = false;
    } else {
      link.hidden = true;
    }
  } catch (error) {
    console.error(`Could not load information for ${title}:`, error);
    summary.textContent = "Information could not be loaded right now.";
    link.hidden = true;
  }
}

animalCards.forEach(loadAnimalSummary);
