//OBJETS CANDIDATS
const candidats= [
  {id: 1,
    img: '/imgs/fille1.jpg',
    name:'Julie Ducast',
    job:'Web Designer',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, modi molestiae! Dolor ratione modi voluptatum aliquam dolore quia, praesentium officiis. Voluptatibus odio aspernatur harum doloribus odit rem. Impedit, earum minus!'
},
{
    id: 2,
    img: '/imgs/fille2.jpg',
    name:'Maria Johnson',
    job:'Programer',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, modi molestiae! Dolor ratione modi voluptatum aliquam dolore quia, praesentium officiis. Voluptatibus odio aspernatur harum doloribus odit rem. Impedit, earum minus!'
  
},
{id: 3,
    img: '/imgs/garcon1.jpg',
    name:'John Café',
    job:'Consultant',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, modi molestiae! Dolor ratione modi voluptatum aliquam dolore quia, praesentium officiis. Voluptatibus odio aspernatur harum doloribus odit rem. Impedit, earum minus!'
},
{id: 4,
    img: '/imgs/garcon2.jpg',
    name:'Alain Nicaragua',
    job:'Web developer',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, modi molestiae! Dolor ratione modi voluptatum aliquam dolore quia, praesentium officiis. Voluptatibus odio aspernatur harum doloribus odit rem. Impedit, earum minus!'
}

];
//INFORMATION SUR LES CANDIDATS
const imgAuteur= document.getElementById('auteur-img')
const author= document.getElementById('auteur')
const travail= document.getElementById('job')
const travailInfo= document.querySelector('.job-info')

//INFORMATION SUR LES BOUTONS
const boutonPrev= document.querySelector('.prevBtn')
const boutonNext= document.querySelector('.nextBtn')
const boutonRandom= document.querySelector('.randomBtn')

//BOUTONS EVENEMENTS
 boutonNext.addEventListener('click', BtnNext)
boutonPrev.addEventListener('click', BtnPreview)
boutonRandom.addEventListener('click',BtnRandom)

//CONTENT LOADED FUNCTION
let currentCandidat = 0
window.addEventListener('DOMContentLoaded', loadCandidats)

function loadCandidats(){
ShowCandidats(currentCandidat)


}

//FUNCTION SHOW CANDIDATS

function ShowCandidats(candidat){
    const item = candidats[candidat]
    imgAuteur.src= item.img;
    author.textContent = item.name;
    travail.textContent= item.job;
    travailInfo.textContent= item.text;

}
//BUTTON NEXT FUNCTION
function BtnNext(){
   currentCandidat++
    if(currentCandidat > candidats.length -1){
        currentCandidat = 0
    }
    ShowCandidats(currentCandidat)
}

//BUUTON PREVIEW FUNCTION
function BtnPreview(){
    currentCandidat--
    if(currentCandidat < 0){
        currentCandidat = candidats.length-1
    }
     ShowCandidats(currentCandidat)
 }
 //RANDOM BUTTON FUNCTION
function BtnRandom(){
randomBtn= Math.floor(Math.random() * candidats.length)
ShowCandidats(randomBtn)
}