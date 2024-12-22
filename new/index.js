const select = document.querySelector('#select')
select.addEventListener('change',(e)=>{
    console.log(`group ${select.value}`);
})