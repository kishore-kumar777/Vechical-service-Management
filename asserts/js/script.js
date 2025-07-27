const menu = document.getElementById('menu');
function myfunction()
{
    menu.classList.toggle('hidden');
}

menu.addEventListener('click', (e)=>{
    if(e.target === menu){
        menu.classList.add('hidden');
    }
})

document.querySelectorAll('.close').forEach(link => {
    link.addEventListener('click',()=>{
        menu.classList.add('hidden');
    });
});
