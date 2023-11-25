// Fetch portfolio data
fetch('assets/js/portfolio.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(portfolioData => {
        // Get the portfolio ID from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const portfolioId = urlParams.get('id');
        console.log(urlParams);
        console.log(portfolioId);

        // Ensure portfolioData is an object
        if (typeof portfolioData !== 'object') {
            throw new Error('Invalid portfolio data!');
        }

        // Find the portfolio item with the matching ID
        const portfolioItem = portfolioData[portfolioId];

        // Update the page with the portfolio details
        if (portfolioItem) {
            document.querySelector('#title-text').textContent = portfolioItem.title;
            document.querySelector('#category-text').textContent = portfolioItem.category;
            document.querySelector('#client-text').textContent = portfolioItem.details.client;
            document.querySelector('#projectDate-text').textContent = portfolioItem.details.projectDate;
            document.querySelector('#projectUrl-text').textContent = portfolioItem.details.projectURL;
            document.querySelector('#projectUrl-text').href = portfolioItem.details.projectURL;
            document.querySelector('#project-image-1').src = portfolioItem.image1;
            document.querySelector('#project-image-2').src = portfolioItem.image2;
            document.querySelector('#project-image-3').src = portfolioItem.image3;
            document.querySelector('#project-desc').textContent = portfolioItem.details.description;
        }
    })
    .catch(error => {
        console.log('There was a problem with the fetch operation: ' + error.message);
    });