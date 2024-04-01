document.addEventListener("DOMContentLoaded", function(){
   
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    for (let i=0;i< buttons.length;i++){
        buttons[i].addEventListener('click',function(botao){
            const targetTab= botao.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id= ${targetTab}]`);
            hideTabs();
            tab.classList.add('about__container--is-active');
            removeActiveButton();
            botao.target.classList.add('about__tabs__button--is-active');


            
        })
    }
})

function hideTabs(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for(let i=0;i< tabsContainer.length;i++ ){
        tabsContainer[i].classList.remove('about__container--is-active');
    }
}

function removeActiveButton(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    for(let i=0;i< buttons.length;i++ ){
        buttons[i].classList.remove('about__tabs__button--is-active');
    }
        

}