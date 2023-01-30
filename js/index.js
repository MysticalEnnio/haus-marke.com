let websites = [
  {
    name: "Pizza",
    url: "https://pizza.haus-marke.com",
  },
  {
    name: "Brau",
    url: "https://brau.haus-marke.com",
  },
  {
    name: "Smart",
    url: "https://smart.haus-marke.com",
  },
  {
    name: "Aufgaben",
    url: "https://aufgaben.haus-marke.com",
  },
  {
    name: "Listen",
    url: "https://listen.haus-marke.com",
  },
  {
    name: "Kalender",
    url: "https://kalender.haus-marke.com",
  },
];

const websitesContainer = document.getElementById("websites");

function loadWebsite(websiteOptions) {
  const h2 = document.createElement("h2");
  h2.innerText = websiteOptions.name.toUpperCase();
  h2.dataset.url = websiteOptions.url;
  websitesContainer.appendChild(h2);
}

loadWebsite({ name: "", url: "" });
websites.forEach((website) => {
  loadWebsite(website);
});
loadWebsite({ name: "", url: "" });

document.getElementById("enterButton").addEventListener("click", () => {
  console.log("Enter button clicked");
  [].slice.call(websitesContainer.children).forEach(function (ele, index) {
    if (
      Math.abs(
        ele.getBoundingClientRect().top -
          websitesContainer.getBoundingClientRect().top
      ) < 100
    ) {
      document.body.classList.add("fadeOutToLeft");
      setTimeout(() => {
        window.location.href = ele.nextElementSibling.dataset.url;
      }, 500);
    }
  });
});
