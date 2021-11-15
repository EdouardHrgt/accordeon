const faqBlocks = document.querySelectorAll('.content-wrapper');

faqBlocks.forEach(block => {
    //Display only 1 block at a time
    block.addEventListener('click', ()=>{
        faqBlocks.forEach(faqBlock =>{     
            if(faqBlock.childNodes[3].classList.contains('active') && faqBlock != block){
                faqBlock.childNodes[3].classList.toggle('active');
                faqBlock.childNodes[1].childNodes[3].classList.toggle('active-icons');
            }
        });
        // Display hidden content
        block.childNodes[3].classList.toggle('active');
        block.childNodes[1].childNodes[3].classList.toggle('active-icons');
    });  
});

/*
Au moment du if :
Block = l'élément sur lequel on a cliqué
faqBlock = élément qui est ouvert atm
*/