window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    //Tabs
    //tabItem - сам таб, content - контент таба.
    function tab (tabItem, content){        
        let tab = document.querySelectorAll(tabItem),
        tabContent = document.querySelectorAll(content);
    
        function hide (){
            for(let i = 0; i < tab.length; i++){
                tabContent[i].style.display = 'none';
            }
        }
    
        function show (b){
            tabContent[b].style.display = 'block';
        }
        
        function anim (c){
            for(let i = 0; i < tab.length; i++){
                tab[i].classList.remove('active');
                tab[c].classList.add('active');
            }
        }

        anim(0);

        for(let i = 0; i < tab.length; i++){
            tab[i].addEventListener('click', () =>{
                
                hide();
                show(i);
                anim(i);
            });
        }
    }
    //параметры подставлять с кавычками и точками.
    tab('.nav__item', '.tab-content');

    //slider portfolio
    let slideIndex = 1,
        img = document.querySelectorAll('.slider__img'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next');

        slidesThrough(slideIndex);

    function slidesThrough (a) {
        if(slideIndex > img.length + 1) {
            slideIndex = 1;
        }

        if(slideIndex < 1)  {
            slideIndex = img.length +1;
        }
        img.forEach((item) => item.style.display = 'none');
        img[a - 1].style.display = 'block';       
    }


    function changeSlide (n) {
        slidesThrough(slideIndex += n);
    }

    next.addEventListener('click',() => {
        changeSlide(1);
    });
    
    prev.addEventListener('click',() => {
        changeSlide(-1);
    });

});
