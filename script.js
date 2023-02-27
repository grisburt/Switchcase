let age = document.querySelector("#age");
const formvalid = document.querySelector("#bouton");
const rst = document.querySelector("#resultat");

formvalid.addEventListener('click', check);

function check(){
    console.log(typeof age.value)
    switch (parseInt(age.value)){
        case 5:
        case 6:
             rst.textContent = 'Poussins';
        break;
        case 7:
        case 8:
            rst.textContent ='Diablotins';
        break;
        case 9:
        case 10:
            rst.textContent='Préminimes';
        break;
        case 11:
        case 12:
            rst.textContent='Minimes';
        break;
        case 13:
        case 14:
            rst.textContent='Cadets';
        break;
        case 15:
        case 16:
            rst.textContent='Scolaires';
        break;
        case 17:
        case 18:
            rst.textContent="espoirs";
        break;
        case (age.Value >18):
            rst.textContent="seniors";
        break;
        default:
            rst.textContent ='Aucun groupe';
    }
}