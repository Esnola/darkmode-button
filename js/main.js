const buttonSwitch = document.querySelector('#switch');
//const esDark = localStorage.getItem('esDark')


chekDark = (condicion) =>{
    if(condicion) 
        localStorage.setItem('esDark', true)
        else
            localStorage.removeItem('esDark')
     console.log(condicion, localStorage.getItem('esDark'))
}
chekDark(localStorage.getItem('esDark'))

if(localStorage.getItem('esDark')){
    document.body.classList.add('dark')
    buttonSwitch.classList.add('active')
}

buttonSwitch.addEventListener('click', () => {
    buttonSwitch.classList.toggle('active')
    document.body.classList.toggle('dark')
    chekDark(document.body.classList.contains('dark'))
})

document.querySelector('.logotipo').addEventListener('click',()=>{
    console.log(localStorage.getItem('esDark'))
})