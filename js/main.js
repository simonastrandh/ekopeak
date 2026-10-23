// Bokningsformulär
const modal = document.getElementById("booking-modal");
const form = document.getElementById("booking-form");

document.querySelectorAll("[data-open-booking]").forEach((btn) =>
  btn.addEventListener("click", () => {
    modal.showModal();
    document.body.style.overflow = "hidden";
  })
);

const closeModal = () => modal.close();
document.querySelectorAll("[data-close-booking]").forEach((btn) => btn.addEventListener("click", closeModal));

// Klick på den suddiga bakgrunden stänger formuläret
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
modal.addEventListener("close", () => {
  document.body.style.overflow = "";
});

// Skickas via Web3Forms → mejl till Ekopeak. Byt ut nyckeln (den är offentlig by design).
const WEB3FORMS_ACCESS_KEY = "DIN_WEB3FORMS_NYCKEL";

const statusEl = document.getElementById("form-status");
const successEl = document.getElementById("booking-success");
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  data.append("access_key", WEB3FORMS_ACCESS_KEY);
  data.append("subject", "Bokningsförfrågan – " + data.get("company"));
  data.append("from_name", "Ekopeak webbplats");

  statusEl.hidden = true;
  submitBtn.disabled = true;
  submitBtn.textContent = "Skickar…";

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
    });
    const json = await res.json();
    if (!res.ok || !json.success) throw new Error(json.message || "Något gick fel");

    form.hidden = true;
    successEl.hidden = false;
    form.reset();
  } catch (err) {
    statusEl.textContent = "Något gick fel och meddelandet skickades inte. Försök igen eller mejla oss på info@ekopeak.se.";
    statusEl.hidden = false;
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Skicka bokningsförfrågan";
  }
});

// Återställ formuläret när rutan stängs
modal.addEventListener("close", () => {
  form.hidden = false;
  successEl.hidden = true;
  statusEl.hidden = true;
});

// Mobil: tjänstekorten får hover-effekten när de är i mitten av skärmen
const mobileQuery = window.matchMedia("(max-width: 960px), (hover: none)");
const serviceCards = document.querySelectorAll(".service");

const cardObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => entry.target.classList.toggle("is-active", entry.isIntersecting));
  },
  { rootMargin: "-40% 0px -40% 0px" }
);

function updateCardObserver() {
  serviceCards.forEach((card) => {
    cardObserver.unobserve(card);
    card.classList.remove("is-active");
    if (mobileQuery.matches) cardObserver.observe(card);
  });
}
updateCardObserver();
mobileQuery.addEventListener("change", updateCardObserver);
