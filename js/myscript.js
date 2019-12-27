const singleproduct = document.querySelector('.singleproduct');
const thumb = document.querySelectorAll('.prod-thumb');
const figImg = document.querySelector('.figure-img');

singleproduct.addEventListener('click', function (e) {
    if (e.target.className == 'prod-thumb') {
        thumb.forEach(function (t) {
            if (t.classList.contains('active-thumb')) {
                t.classList.remove('active-thumb');
            }
            figImg.src = e.target.src;
            e.preventDefault();
            e.target.classList.add('active-thumb');
        })
    }

})