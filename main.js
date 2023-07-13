let tab = document.querySelectorAll('.tab')
let tabContent = document.querySelectorAll('.tab-content')

window.onload = function(){
    hideTabsContent()
}

function hideTabsContent(){
    for(let i=0; i < tabContent.length; i++){
        tabContent[i].classList.add('hide')
        tabContent[i].classList.remove('show')
    }
    document.querySelector('.selected-tab').classList.remove('selected-tab')
}

for(let i=0; i<tab.length; i++){
    tab[i].addEventListener('click', (event)=>{

        let deleteShowedTab = new Promise((resolve, reject)=>{
            for(let i=0; i<tab.length; i++){
                tab[i].classList.remove('selected-tab')
            }
            resolve()
        })
        deleteShowedTab.then(()=>{
            event.target.classList.add('selected-tab')
            let indexTab = Number(event.target.getAttribute('data-index'))
            return indexTab
        }).then((indexTab2)=>{
            for(let i=0; i<tabContent.length; i++){
                tabContent[i].classList.remove('show')
                tabContent[i].classList.add('hide')
            }
            return indexTab2
        }).then((indexTab3)=>{
            tabContent[indexTab3].classList.add('show')
            tabContent[indexTab3].classList.remove('hide')
        })
})
}
