fetch("https://api.haus-marke.com/sites/getSites")
  .then((res) => res.json())
  .then((websites) => {
    const websitesContainer = document.getElementById("websites");
    let websiteValues = [];

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
      websiteValues = [];
      [].slice.call(websitesContainer.children).forEach(function (ele, index) {
        websiteValues.push({
          val: Math.abs(
            ele.getBoundingClientRect().top -
              websitesContainer.getBoundingClientRect().top -
              300
          ),
          ele,
        });
      });
      websiteValues.sort((a, b) => a.val - b.val);
      document.body.classList.add("fadeOutToLeft");
      setTimeout(() => {
        window.location.href = websiteValues[0].ele.dataset.url;
      }, 500);
    });
  });
