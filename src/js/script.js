window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let tabContent = document.querySelectorAll('.tab-content'),
        tabWrapper = document.querySelector('.nav__wrapper'),
        tab = document.querySelectorAll('.nav__item');

    function hide (){
        for(let i = 0; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    function show (b){
        if(tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    tabWrapper.addEventListener('click',function(event){
        let target = event.target;
        if(target && target.classList.contains('nav__item')){
            for(let i = 0; i < tab.length; i++){
                if(target == tab[i]){
                    hide();
                    show(i);
                    break;
                }
            }
        }
    });

});