let toggleButton = document.querySelector('.btn_show_hide');
let brandsCollection = document.querySelector('.all_brands_logos');
let allblocks = brandsCollection.querySelectorAll('.brand_item');

toggleButton.addEventListener('click', function(){

    for (let i = 0; i < allblocks.length; i++) {
        allblocks[i].classList.toggle('show');
    }

    toggleButton.classList.toggle('icon_arrows_up');
    toggleButton.classList.toggle('icon_arrows_down');

    if (toggleButton.textContent === 'Cкрыть') {
        toggleButton.textContent = "Показать все";
    } else {
        toggleButton.textContent = "Cкрыть";
    }
})
