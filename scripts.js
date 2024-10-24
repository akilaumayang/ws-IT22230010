
const boxes = document.querySelectorAll('.vulnerability-box');
boxes.forEach(box => {
    box.addEventListener('click', function() {
        alert(this.getAttribute('data-message'));
    });
});
