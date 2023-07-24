const pages = document.querySelectorAll('.page') 
const disabledElems = document.querySelectorAll('.preventDefault')
const switchBtns = document.querySelectorAll('.switchPage')
// DOM ELEMS

function disableElem(){
    disabledElems.forEach(elem=>{
        elem.addEventListener('click', (e)=>{
            e.preventDefault()
        })
    })
}
disableElem()
function switchPage(){
    pages.forEach(elem=>{
        elem.classList.toggle('hidden')
    })
}
switchBtns.forEach(elem=>{
    elem.addEventListener('click', switchPage)
})