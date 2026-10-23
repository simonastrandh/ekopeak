// ---------- Språk (SV / EN) ----------
const EN = {
  "f_city": "Gothenburg",
  "nav_services": "Services",
  "nav_contact": "Contact",
  "book_cta": "Book a free consultation",
  "hero_h1": "Finance and accounting",
  "hero_tag": "More time for your business.<br>Less time on paperwork.",
  "hero_btn1": "Our services",
  "hero_btn2": "Contact us",
  "trust1": "Authorised by FAR",
  "trust2": "20 years of experience",
  "trust3": "Tailored to your needs",
  "svc_eyebrow": "Complete offering",
  "svc_h2": "Everything in finance – packaged to fit your needs",
  "svc_lead": "Whether you are a sole trader or run a growth company with 50 employees, we tailor a fixed monthly package where everything is included.",
  "s1_h": "Bookkeeping",
  "s1_short": "Ongoing bookkeeping for all company types.",
  "s1_p": "We handle the daily bookkeeping and ensure ongoing reconciliations with full precision. Whatever company form you run, we make sure your figures are always correct, up to date and in safe hands.",
  "s1_l1": "VAT returns",
  "s1_l2": "Accounts receivable and payable",
  "s2_h": "Payroll",
  "s2_short": "Let us take care of the whole payroll process so you can skip the administration.",
  "s2_p": "The service covers everything from payslips and employer declarations to Fora reporting and statutory statistics.",
  "s2_l1": "Holiday pay calculations",
  "s2_l2": "AGI &amp; Fora reporting",
  "s2_l3": "Digital payslips via Kivra",
  "s3_h": "Year-end closing",
  "s3_short": "Year-end closing and annual reports with proactive advice.",
  "s3_p": "We handle year-end closing for all company types and prepare complete annual reports for limited companies. The service always includes careful reconciliations and tax planning, so you get the most out of your company’s potential.",
  "s3_l1": "Digital signing with BankID",
  "s3_l2": "K2 and K3 accounting frameworks",
  "s3_l3": "K10 forms for owners",
  "s4_h": "Tax returns",
  "s4_short": "Reliable tax return help for companies and private individuals.",
  "s4_p": "We help all types of companies and make sure everything is done right. From the ongoing accounting to your personal tax return and K10 form.",
  "s4_l1": "Tax optimisation and dividends",
  "s4_l2": "Cash flow forecasts",
  "s4_l3": "Quarterly review meetings",
  "st_eyebrow": "Easy transition",
  "st_h2": "How easy it is to become our client",
  "st_lead": "Switching to or choosing an accounting firm should not mean weeks of administrative hassle. We have made the process simple in three clear steps.",
  "st1_h": "Digital kick-off meeting",
  "st1_p": "We go through how your company’s routines look today, identify time-wasters and set a transparent monthly price with no hidden extras.",
  "st2_h": "Seamless transfer of bookkeeping data",
  "st2_p": "Do you have a previous firm or SIE files? We contact your previous firm and automatically import history, supplier ledgers and charts of accounts.",
  "st3_h": "Full control with your own accountant",
  "st3_p": "You are assigned a named, authorised accounting consultant. Photograph your receipts with the app and approve VAT and payroll with BankID",
  "cta_pill": "Take the next step today",
  "cta_h2": "Ready for an easier financial life with full control?",
  "cta_p": "Book a free, no-obligation introductory meeting. We will look at how you work today and how we can make your everyday life simpler.",
  "cta_btn1": "Book a free consultation today",
  "cta_btn2": "Call us: +46 706 78 20 70",
  "cta_a1": "No obligations",
  "cta_a2": "100% confidentiality",
  "f_desc": "Authorised accounting firm focused on modern digital solutions, fixed prices and a personal relationship for Swedish companies.",
  "f_meta": "Org. no.: 556123-4567 • Approved for F-tax",
  "f_contact": "Contact",
  "f_services": "Services",
  "f_hours": "Monday–Thursday: 8:00–16:00",
  "m_eyebrow": "Free meeting",
  "m_lead": "Fill in your details and we will contact you as soon as we can to book a time that suits you.",
  "m_name": "Your name *",
  "m_company": "Company name *",
  "m_phone": "Phone number *",
  "m_email": "Email address *",
  "m_message": "Your message *",
  "m_submit": "Send booking request",
  "m_note": "We process your data in accordance with GDPR. No hidden obligations.",
  "m_ok_h": "Thank you for your request!",
  "m_ok_p": "We have received your message and will contact you as soon as we can.",
  "m_close": "Close",
  "m_ph_name": "e.g. Anna Andersson",
  "m_ph_company": "Company Ltd",
  "m_ph_email": "anna@company.com",
  "m_ph_message": "Tell us briefly why you are contacting us and what you need help with",
  "nav_label": "Main menu"
};

const UI = {
  sv: {
    sending: "Skickar…",
    error: "Något gick fel och meddelandet skickades inte. Försök igen eller mejla oss på info@ekopeak.se.",
    subject: "Bokningsförfrågan – ",
    title: "Ekopeak – Ekonomi och redovisning",
    description: "Auktoriserad redovisningsbyrå med fokus på moderna digitala lösningar, fasta priser och personlig relation för svenska företag.",
  },
  en: {
    sending: "Sending…",
    error: "Something went wrong and your message was not sent. Please try again or email us at info@ekopeak.se.",
    subject: "Booking request – ",
    title: "Ekopeak – Finance and accounting",
    description: "Authorised accounting firm focused on modern digital solutions, fixed prices and a personal relationship for Swedish companies.",
  },
};

// Svenska texter läses från HTML-filen första gången sidan laddas
const SV = {};
document.querySelectorAll("[data-i18n]").forEach((el) => {
  SV[el.dataset.i18n] ??= el.innerHTML;
});
document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
  SV[el.dataset.i18nPlaceholder] ??= el.getAttribute("placeholder");
});
document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
  SV[el.dataset.i18nAriaLabel] ??= el.getAttribute("aria-label");
});

let currentLang = "sv";
const langLabel = document.getElementById("lang-label");
const metaDescription = document.querySelector('meta[name="description"]');

function setLanguage(lang) {
  currentLang = lang;
  const dict = lang === "en" ? EN : SV;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerHTML = dict[el.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.setAttribute("placeholder", dict[el.dataset.i18nPlaceholder]);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    el.setAttribute("aria-label", dict[el.dataset.i18nAriaLabel]);
  });

  document.documentElement.lang = lang;
  document.title = UI[lang].title;
  metaDescription.setAttribute("content", UI[lang].description);
  langLabel.textContent = lang.toUpperCase();
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  setLanguage(currentLang === "sv" ? "en" : "sv");
});

let savedLang = null;
try { savedLang = localStorage.getItem("lang"); } catch (e) {}
if (savedLang === "en") setLanguage("en");

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
  data.append("subject", UI[currentLang].subject + data.get("company"));
  data.append("from_name", "Ekopeak webbplats");

  statusEl.hidden = true;
  submitBtn.disabled = true;
  submitBtn.textContent = UI[currentLang].sending;

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
    statusEl.textContent = UI[currentLang].error;
    statusEl.hidden = false;
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = (currentLang === "en" ? EN : SV).m_submit;
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
