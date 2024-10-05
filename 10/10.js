const chek1=document.getElementById('chek1'),
    input=document.getElementById('input'),
    btn=document.getElementById('btn');


const url=['https://www.google.com/search?q=', "https://www.google.com/maps?q="]
let cheked=false
let city=document.getElementById('city')
btn.addEventListener('click',()=>{
    let m;
    cheked?m=url[1]:m=url[0];
    location.href=m+input.value;
    city=input.value
    console.log(`City: ${city}`)
})

chek1.addEventListener('input',()=>{
    chek1.checked?cheked=true:cheked=false;
    console.log(cheked)
})

