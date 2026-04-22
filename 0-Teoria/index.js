//Capturar respuesta y también como ejecutar una suma directo en la pagina web HTML

// const txtn1 = document.getElementById('n1');
// const txtn2 = document.getElementById('n2');
// const respuesta = document.getElementById('resp');
// const btncalcular = document.getElementById('calcular');
// btncalcular.addEventListener('click', calcular); 

// function calcular(){
//     const op1 = parseFloat(txtn1.value);
//     const op2 = parseFloat(txtn2.value);
//     let resp=op1+op2;
//     respuesta.innerText= resp;
//     respuesta.style="color:blue";

// }


// const respuesta = document.getElementById("resp");
// const btnejecutar = document.getElementById("ejecuta");
// btnejecutar.addEventListener('click', iniciar);
// let frutas = ['Manzana', 'Banana', 'Pera'];

// function iniciar(){
//     frutas.forEach(function(item, index, array){
//         respuesta.innerText= array;
//     })

// }

async function obtenerData(){
    const response = await fetch('http://127.0.0.1:5500/Teoria/data.json')
    .then(response=>response.json())
    .then(json=> console.log(json))
    .catch(error => console.log('solicitud fallida', error));
}

obtenerData();