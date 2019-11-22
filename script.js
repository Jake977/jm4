let toggleButton = document.querySelector('.btn_show_hide');
//let elementsContainer = document.querySelector('.all_brands_logos');
let allblocks = document.querySelectorAll('.brand_item');
let toggle = "hide";

toggleButton.addEventListener('click', function(){

    if (toggle === 'hide') {
        for (let i = 0; i < allblocks.length; i++) {
            allblocks[i].classList.add('show2');
        }
        toggle = 'show';
        toggleButton.textContent = "Cкрыть";
        toggleButton.classList.remove('icon_arrows_down');
        toggleButton.classList.add('icon_arrows_up');
    } else {
        for (let i = 0; i < allblocks.length; i++) {
            allblocks[i].classList.remove('show2');
        }
        toggle = 'hide';
        toggleButton.textContent = "Показать все";
        toggleButton.classList.remove('icon_arrows_up');
        toggleButton.classList.add('icon_arrows_down');
    }
})
