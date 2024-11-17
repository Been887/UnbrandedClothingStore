document.querySelectorAll('.topbarelement').forEach(element => {
    element.addEventListener('mouseover', function(e) {
        let dropdown = this.querySelector('.dropdown');
        // Calculate the left position based on the element's width and the dropdown's width
        let rect = this.getBoundingClientRect();
        let dropdownLeft = (rect.width - dropdown.offsetWidth) / 2;
        // Set the dropdown position
        dropdown.style.left = `${dropdownLeft}px`;
        dropdown.style.top = `${rect.height}px`; // Position it just below the parent element
    });
});
