fetch("https://api.haus-marke.com/sites/getSites")
  .then((res) => res.json())
  .then((websites) => {
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
        console.log(`${
          ele.innerHTML
        } ${Math.abs(ele.getBoundingClientRect().top - websitesContainer.getBoundingClientRect().top - 300)}
    `);
        if (
          Math.abs(
            ele.getBoundingClientRect().top -
              websitesContainer.getBoundingClientRect().top -
              300
          ) < 100
        ) {
          document.body.classList.add("fadeOutToLeft");
          setTimeout(() => {
            window.location.href = ele.dataset.url;
          }, 500);
        }
      });
    });
  });
