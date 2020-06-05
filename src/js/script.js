window.addEventListener('DOMContentLoaded', function(){
    'use strict';

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
            tab[i].addEventListener('click', function(){
                
                hide();
                show(i);
                anim(i);
            });
        }
    }
    //параметры подставлять с кавычками и точками.
    tab('.nav__item', '.tab-content');

});
