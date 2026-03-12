const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

window.addEventListener('message', (e) => {
    const page = e.data;
    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === page + '.html') {
            link.classList.add('active');
        }
    });
});