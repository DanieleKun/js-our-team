/*Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html.
Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.*/

const myTeamContainer = document.querySelector(".team-container");
const myTeamCard = document.querySelector(".team-card");
const myCardImg = document.querySelector(".card-image");
const myCardText = document.querySelector(".card-text");

const membersTeam = 
[
    {
        "name" : "Wayne Barnett",
        "role" : "Founder & CEO",
        "image" : "img/wayne-barnett-founder-ceo.jpg"
    },

    {
        "name" : "Angela Caroll",
        "role" : "Chief Editor",
        "image" : "img/angela-caroll-chief-editor.jpg"
    },

    {
        "name" : "Walter Gordon",
        "role" : "Office Manager",
        "image" : "img/angela-lopez-social-media-manager.jpg"
    },

    {
        "name" : "Angela Lopez",
        "role" : "Social Media Manager",
        "image" : "img/angela-caroll-chief-editor.jpg"
    },

    {
        "name" : "Scott Estrada",
        "role" : "Developer",
        "image" : "img/scott-estrada-developer.jpg"
    },

    {
        "name" : "Barbara Ramos",
        "role" : "Graphic Designer",
        "image" : "img/barbara-ramos-graphic-designer.jpg"
    },
];

console.log(membersTeam);