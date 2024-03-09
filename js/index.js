console.log('V1.1.6');
fetch('https://api.haus-marke.com/sites/get')
    .then((res) => res.json())
    .then((websites) => {
        const websitesContainer = document.getElementById('websites');
        const websiteImageContainer = document.getElementById('websiteImages');
        let websiteValues = [];
        let websiteNumber = 1;

        function loadWebsite(websiteOptions) {
            const h2 = document.createElement('h2');
            h2.innerText = websiteOptions.name.toUpperCase();
            h2.dataset.url = websiteOptions.url;
            h2.dataset.number = websiteNumber;
            websitesContainer.appendChild(h2);
        }

        function loadWebsiteImage(websiteOptions) {
            console.log(websiteOptions);
            const img = document.createElement('img');
            img.src =
                websiteOptions.imageURL ?? 'https://via.placeholder.com/150';
            img.alt = websiteOptions.name + ' Image';
            img.dataset.number = websiteNumber;
            //make opacity 0
            img.style.opacity = websiteNumber == 1 ? 0 : 0;
            websiteImageContainer.appendChild(img);
            websiteNumber++;
        }

        loadWebsite({ name: '', url: '' });
        websites.forEach((website) => {
            loadWebsite(website);
            loadWebsiteImage(website);
        });
        loadWebsite({ name: '', url: '' });
        const vmin = Math.min(window.innerWidth, window.innerHeight);
        console.log(window.innerHeight / 4 + vmin * 0.075);
        console.log(1665.5 - 1395);
        websitesContainer.addEventListener('scroll', (e) => {
            //log scroll position
            console.log(e.target.scrollTop);
        });
        /*setInterval(() => {
            console.log(websitesContainer.scrollTop);
        }, 300);*/

        document.getElementById('enterButton').addEventListener('click', () => {
            websiteValues = [];
            [].slice
                .call(websitesContainer.children)
                .forEach(function (ele, index) {
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
            document.body.classList.add('fadeOutToLeft');
            setTimeout(() => {
                window.location.href = websiteValues[0].ele.dataset.url;
            }, 500);
        });
    });
