const singleProduct = document.querySelector('#singleproduct');
const thumb = document.querySelectorAll('.prod-thumb');
const figImg = document.querySelector('.figure-img');

const buttonMin = document.querySelector('.min');
const buttonPlus = document.querySelector('.plus');
const quantity = document.querySelector('.quantity');
let quantityProduct = document.querySelector('.quantity span');
let numb = 1;
buttonPlus.addEventListener('click', function () {
    numb++;
    quantityProduct.innerHTML = numb;
})
buttonMin.addEventListener('click', function () {
    numb--;
    quantityProduct.innerHTML = numb;
    if (numb == 0) {
        const newAlert = document.createElement('div');
        const alert = document.createTextNode('Angka harus lebih dari 0');
        newAlert.appendChild(alert);
        newAlert.setAttribute('class', 'alert alert-warning');
        newAlert.setAttribute('role', 'alert');
        quantity.insertBefore(newAlert, buttonMin);
    }
})
singleProduct.addEventListener('click', function (e) {
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