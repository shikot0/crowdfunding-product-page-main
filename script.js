const progressBar = document.getElementById('progress-bar');
const backThisProjectBtn = document.getElementById('back-this-project-button');
const backThisProjectModal = document.getElementById('back-this-project-modal')
const closeModalBtns = document.querySelectorAll('.close-modal-button');
const bookmarkBtn = document.getElementById('bookmark-button');
const selectPledgeCheckboxes = document.querySelectorAll('.select-pledge-checkbox');
const amountBacked = document.getElementById('amount-backed');
const numberOfBackers = document.getElementById('number-of-backers');
const pledgeBtns = document.querySelectorAll('.continue-button'); 
const thankYouModal = document.getElementById('thanks-for-your-support-modal');
const showNavBtn = document.getElementById('show-menu-button');
const nav = document.querySelector('nav');

backThisProjectBtn.addEventListener('click', () => {
    backThisProjectModal.classList.add('visible');
    selectPledgeCheckboxes.forEach(checkbox => {     
        checkbox.parentElement.parentElement.classList.remove('selected');
    })  
    selectPledgeCheckboxes[0].checked = true; 
}) 

closeModalBtns.forEach(button => {
    button.addEventListener('click', e => {    
        button.parentElement.classList.remove('visible'); 
    })
})
bookmarkBtn.addEventListener('click', () => {
    if(bookmarkBtn.classList.contains('bookmarked')) {
        bookmarkBtn.classList.remove('bookmarked');
    }else {
        bookmarkBtn.classList.add('bookmarked'); 
    }
}) 

selectPledgeCheckboxes.forEach(checkbox => { 
    checkbox.addEventListener('input', e => {   
            selectPledgeCheckboxes.forEach(checkbox => {     
                checkbox.parentElement.parentElement.classList.remove('selected');
            }) 
            if(e.target.checked) {   
                e.target.parentElement.parentElement.classList.add('selected'); 
            }else {
                e.target.parentElement.parentElement.classList.remove('selected');
            }  
        })
})

function split(value) {
    const beforeComma = value.innerText.split(',')[0];
    const afterComma = value.innerText.split(',')[1];
    const amount = parseInt(beforeComma + afterComma); 
    return amount; 
}

pledgeBtns.forEach(button => {
    button.addEventListener('click', () => { 
        backThisProjectModal.classList.remove('visible');            
        progressBar.value = split(amountBacked) + parseInt(button.parentElement.firstElementChild.firstElementChild.value);
        amountBacked.innerText = `${split(amountBacked) + parseInt(button.parentElement.firstElementChild.firstElementChild.value)}`; 
        numberOfBackers.innerText = `${split(numberOfBackers) + 1}`;   
        thankYouModal.classList.add('visible');
    })
})

showNavBtn.addEventListener('click', () => {
    if(nav.classList.contains('visible')) { 
        nav.classList.remove('visible');
        showNavBtn.innerHTML = `<svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z"/></g></svg>`;
    }else {
        nav.classList.add('visible');
        showNavBtn.innerHTML = `<svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z"/><path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z"/></g></svg>`;
    }  
})