let boton = document.getElementById('sumar');
let boton1 = document.getElementById('restar');
let boton2 = document.getElementById('multiplicar');
let boton3 = document.getElementById('dividir');
let respuesta = document.getElementById('respuesta');

boton.addEventListener('click', hacersuma);
boton1.addEventListener('click', hacerresta);
boton2.addEventListener('click', hacermultiplicacion);
boton3.addEventListener('click', hacerdivision );


function hacersuma(){
    let n1 =parseFloat(document.getElementById('n1').value);
    let n2 =parseFloat(document.getElementById('n2').value);
    let n3 = n1+n2;
    respuesta.innerHTML=`El resultado de la suma es: ${n3}`;
}

function hacerresta(){
    let n1 =parseFloat(document.getElementById('n1').value);
    let n2 =parseFloat(document.getElementById('n2').value);
    let n3 = n1-n2;
    respuesta.innerHTML=`El resultado de la suma es: ${n3}`;
}

function hacermultiplicacion(){
    let n1 =parseFloat(document.getElementById('n1').value);
    let n2 =parseFloat(document.getElementById('n2').value);
    let n3 = n1*n2;
    respuesta.innerHTML=`El resultado de la suma es: ${n3}`;
}

function hacerdivision(){
    let n1 =parseFloat(document.getElementById('n1').value);
    let n2 =parseFloat(document.getElementById('n2').value);
    let n3 = n1/n2;
    respuesta.innerHTML=`El resultado de la suma es: ${n3}`;
}