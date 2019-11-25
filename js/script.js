let brandsCollection = document.querySelector('.all_brands_logos');
let toggleButton = document.querySelector('.btn_show_hide');
let buttonTextShowall = toggleButton.querySelector('.textShowall');
let buttonTextHide = toggleButton.querySelector('.textHide');

toggleButton.addEventListener('click', function(){

    brandsCollection.classList.toggle('overflow_hide');
    toggleButton.classList.toggle('icon_arrows_up');
    toggleButton.classList.toggle('icon_arrows_down');
    buttonTextShowall.classList.toggle('show');
    buttonTextHide.classList.toggle('show');
})
