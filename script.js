document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Search Bar Script Implementation

let searchBarContent = document.getElementById('searchBar').value;
let filteredSearchBarContent = searchBarContent.toLowerCase();

// Script Needed for every collapsible item

let menuCards = document.getElementsByClassName('cardItem');