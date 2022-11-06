const allBlocs = document.querySelectorAll('.bloc');


allBlocs.forEach(bloc => {
    // e = object d'évènements
   
    // la propriété target retourne l'évenement qui 
    // a déclenché l'évènement
    bloc.addEventListener('click', (e) => {
       // console.log(e.target )

       e.target.classList.add('active');

       for(let i = 0; i < allBlocs.length; i++){
        if(allBlocs[i] !== e.target){
            allBlocs[i].classList.remove('active');
        }
       }
    })
})


// STOPPER LA PROPAGATION DE L'EVENEMENT AU CLICK SUR LE BOUTON

const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
    })
})