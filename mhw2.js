//CONCORSO
function vinci(event){
    const elem = document.querySelector('#barra div');
    elem.classList.remove('hidden')
}

function rvinci(event){
    const elem = document.querySelector('#barra div');
    elem.classList.add('hidden')
}


const elem = document.querySelector('#concorso');
elem.addEventListener('mouseover', vinci);

elem.addEventListener('mouseleave', rvinci);


//IMMAGINI PAVESINI

function cambiapavesino(event){
    const image = event.currentTarget;
    image.src = 'https://www.pavesini.it/wp-content/uploads/2023/07/originali_on.png';
}
const image = document.querySelector('#pavesino [data-index="1"] img');
image.addEventListener("mouseover", cambiapavesino);
function ripristinapavesino(event){
    const image = event.currentTarget;
    image.src = 'https://www.pavesini.it/wp-content/uploads/2023/07/originali_off.png';
}
image.addEventListener("mouseleave", ripristinapavesino);



function cambiapavesino2(event){
    const image2 = event.currentTarget;
    image2.src = '	https://www.pavesini.it/wp-content/uploads/2023/07/cacao_on.png';
}
const image2 = document.querySelector('#pavesino [data-index="2"] img');
image2.addEventListener("mouseover", cambiapavesino2);
function ripristinapavesino2(event){
    const image2 = event.currentTarget;
    image2.src = '	https://www.pavesini.it/wp-content/uploads/2023/07/cacao_off.png';
}
image2.addEventListener("mouseleave", ripristinapavesino2);



function cambiapavesino3(event){
    const image3 = event.currentTarget;
    image3.src = '	https://www.pavesini.it/wp-content/uploads/2023/07/caffe_on.png';
}
const image3 = document.querySelector('#pavesino [data-index="3"] img');
image3.addEventListener("mouseover", cambiapavesino3);
function ripristinapavesino3(event){
    const image3 = event.currentTarget;
    image3.src = 'https://www.pavesini.it/wp-content/uploads/2023/07/caffe_off.png';
}
image3.addEventListener("mouseleave", ripristinapavesino3);



function cambiapavesino4(event){
    const image4 = event.currentTarget;
    image4.src = 'https://www.pavesini.it/wp-content/uploads/2023/07/double_on.png';
}
const image4 = document.querySelector('#pavesino [data-index="4"] img');
image4.addEventListener("mouseover", cambiapavesino4);
function ripristinapavesino4(event){
    const image4 = event.currentTarget;
    image4.src = 'https://www.pavesini.it/wp-content/uploads/2023/07/double_off.png';
}
image4.addEventListener("mouseleave", ripristinapavesino4);

function mostranuovaricetta(){
    const image = document.createElement('img');
    image.src= "https://www.pavesini.it/wp-content/uploads/2023/09/tiramisu-alle-fragole-con-pavesini-listing.jpg";
    const sezione = document.querySelector('#ric');
    sezione.appendChild(image);

    innescodiv.removeEventListener('click', mostranuovaricetta)

}

const innescodiv = document.querySelector('#nuovaricetta');
innescodiv.addEventListener('click', mostranuovaricetta);