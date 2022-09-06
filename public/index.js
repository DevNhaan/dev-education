window.addEventListener('DOMContentLoaded', () => {
    $(document).ready(function(){
        $('.banner').slick({
            speed: 1000,
            slidesToShow: 1,
            accessibility: true,
            autoplay: true,
            dots:false,
            prevArrow: `<div class="banner__btn-prev">
                <ion-icon name="chevron-back-outline"></ion-icon>
            </div>`,
            nextArrow: `<div class="banner__btn-next">
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>`,
        });
      });

    // focus input 
    const headerInput = document.querySelector('.header-input')
    const searchElement = document.querySelector('.header-search')
    const menuBnt = document.getElementById('sidebar-menu-btn')
    const wrapperElm = document.querySelector('.wrapper')
    if(headerInput){
        headerInput.onfocus = () =>{
            searchElement.classList.add('search-active');
        }
        headerInput.onblur = () => {
            searchElement.classList.remove('search-active');
        }
    }
    if(menuBnt){
        menuBnt.onclick = () => {
            wrapperElm.classList.toggle('extend')
        }
    }
    document.addEventListener('click',e =>{
        const isDropdownBtn = e.target.matches('[data-dropdown-btn]')
        if(!isDropdownBtn && e.target.closest('[data-dropdown]') !== null) return
        let currentDropdown;
        if(isDropdownBtn){
            currentDropdown = e.target.closest('[data-dropdown]')
            currentDropdown.classList.toggle('active-dropdown')
        }
        document.querySelectorAll('[data-dropdown].active-dropdown').forEach(dropdown => {
            if(dropdown === currentDropdown) return
            dropdown.classList.remove('active-dropdown')
        })

    })
})