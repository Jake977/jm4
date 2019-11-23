let toggleButton = document.querySelector('.btn_show_hide');
let brandsCollection = document.querySelector('.all_brands_logos');
let allblocks = brandsCollection.querySelectorAll('.brand_item');
let toggle = "hide";

toggleButton.addEventListener('click', function(){

    if (toggle === 'hide') {

        for (let i = 0; i < allblocks.length; i++) {
            allblocks[i].classList.add('show');
        }

        toggle = 'show';
        toggleButton.textContent = "Cкрыть";
        toggleButton.classList.remove('icon_arrows_down');
        toggleButton.classList.add('icon_arrows_up');
    } else {

        for (let i = 0; i < allblocks.length; i++) {
            allblocks[i].classList.remove('show');
        }

        toggle = 'hide';
        toggleButton.textContent = "Показать все";
        toggleButton.classList.remove('icon_arrows_up');
        toggleButton.classList.add('icon_arrows_down');
    }
})
