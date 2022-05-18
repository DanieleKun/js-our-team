/*Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html.
Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.*/

const myTeamContainer = document.querySelector(".team-container");
// const myTeamCard = document.querySelector(".team-card");
// const myCardImg = document.querySelector(".card-image");
// const myCardText = document.querySelector(".card-text");

// membri del team
const membersTeam =
    [
        {
            "name": "Wayne Barnett",
            "role": "Founder & CEO",
            "image": "img/wayne-barnett-founder-ceo.jpg"
        },

        {
            "name": "Angela Caroll",
            "role": "Chief Editor",
            "image": "img/angela-caroll-chief-editor.jpg"
        },

        {
            "name": "Walter Gordon",
            "role": "Office Manager",
            "image": "img/angela-lopez-social-media-manager.jpg"
        },

        {
            "name": "Angela Lopez",
            "role": "Social Media Manager",
            "image": "img/angela-caroll-chief-editor.jpg"
        },

        {
            "name": "Scott Estrada",
            "role": "Developer",
            "image": "img/scott-estrada-developer.jpg"
        },

        {
            "name": "Barbara Ramos",
            "role": "Graphic Designer",
            "image": "img/barbara-ramos-graphic-designer.jpg"
        },
    ];

console.log(membersTeam);

// Funzione per creare elementi nel DOM
const createMyEl = (myClass, myEl) => {
    const myElement = document.createElement(myEl);
    myElement.className = myClass;
    return myElement;
}

 // Aggiungo i vari elementi nel DOM
for (let i = 0; i < membersTeam.length; i++) {
    let cardMembers = membersTeam[i];

    let myCard = createMyEl("team-card", "div");

    let myCardImage = createMyEl("card-image", "div");

    let myImg = document.createElement("img", "div");

    let myText = createMyEl("card-text", "div");

    myImg.src = cardMembers.image;

    myText.innerHTML = `<h3>${cardMembers.name}</h3><p>${cardMembers.role}</p>`;

    myCardImage.append(myImg);

    myCard.append(myCardImage);

    myCard.append(myText);

    myTeamContainer.append(myCard);

};

