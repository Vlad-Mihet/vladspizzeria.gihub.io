document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

activeLink = document.getElementsByClassName('active');
list = document.querySelectorAll(".nav-item");
list.forEach(
    item.addEventListener('click', function(e) {
        activeLink = document.getElementsByClassName('active');
        activeLink.classList.remove('active');
        item.classList.add('active');
    })
);

// Script Needed for every collapsible item