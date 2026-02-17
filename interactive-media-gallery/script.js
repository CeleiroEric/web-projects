const filterButtons = document.querySelectorAll('button');
const galleyItems = document.querySelectorAll('.gallery-container div');

filterButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        const filterValue = button.dataset.filter;

        galleyItems.forEach(item => {
            const category = item.dataset.category;

            if (filterValue === 'all' || filterValue === category){
            item.style.display = 'block';
            }else{
                item.style.display = 'none';
            }
        })
    })
})
const modal = document.getElementById('modal');
const fullImg = document.getElementById('full-img');
const images = document.querySelectorAll('.gallery-container img');

images.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex'; 
        fullImg.src = img.src; 
    });
});

modal.addEventListener('click', (event) => {
   
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modal.style.display = 'none';
    }
});
