
const contacteBtn = document.getElementById('contacteBtn');
const modalContacte = document.getElementById('modalContacte');
const tancaContacte = document.getElementById('tancaContacte');

contacteBtn.addEventListener('click', ()=>{
    modalContacte.showModal();
});

tancaContacte.addEventListener('click', ()=>{
    modalContacte.close();
});