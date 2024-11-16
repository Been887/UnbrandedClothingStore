document.querySelectorAll('.topbarelement').forEach(element => {
    element.addEventListener('mouseover', function(e) {
        let dropdown = this.querySelector('.dropdown');
        dropdown.style.left = `${e.clientX}px`;
        dropdown.style.top = `${e.clientY}px`;
    });
});
