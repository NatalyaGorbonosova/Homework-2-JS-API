const arrayImg = [{
    index: 1,
    path: 'https://img.freepik.com/free-photo/plate-with-a-keto-diet-food-cherry-tomatoes-chicken-breast-eggs-carrot-salad-with-arugula-and-spinach-keto-lunch-top-view_2829-16941.jpg?size=626&ext=jpg&ga=GA1.1.1282611295.1714762791&semt=ais'}, 
    {index: 2,
    path: 'https://img.freepik.com/free-photo/chicken-steak-topped-with-white-sesame-peas-tomatoes-broccoli-and-pumpkin-in-a-white-plate_1150-24770.jpg?size=626&ext=jpg&ga=GA1.1.1282611295.1714762791&semt=ais'}, 
    {index: 3,
    path: 'https://img.freepik.com/free-photo/person-eating-healthy-salad-of-fresh-vegetables-and-boiled-eggs_1150-37002.jpg?size=626&ext=jpg&ga=GA1.1.1282611295.1714762791&semt=ais'},
    {index: 4,
    path: 'https://img.freepik.com/free-photo/top-view-ingredients-and-veggies-in-a-salad_23-2148585648.jpg?size=626&ext=jpg&ga=GA1.1.1282611295.1714762791&semt=ais'},
    {index: 5,
    path: 'https://img.freepik.com/free-photo/top-view-of-citrus-fruits-vegetables-and-pulses-on-black-table_23-2148062427.jpg?size=626&ext=jpg&ga=GA1.1.1282611295.1714762791&semt=ais'}
];

const contentImgEl = document.querySelector('.content-img');
const backBtn = document.querySelector('.back');
const forwardBtn = document.querySelector('.forward');
const navPointsEl = document.querySelector('.nav-points');
const imgEl = document.querySelector('.content-img');

arrayImg.forEach(element => {
    navPointsEl.insertAdjacentHTML('beforeend', `<button class="point" data-id="${element.index}"></button>`);
});

testBtn();
setHover();

navPointsEl.addEventListener('click', ({target}) => {
   
    if (target.closest('.point')) {
        removeHover();
        target.classList.add('hover');
        const currentImg = findImgById(Number(target.dataset.id));
        contentImgEl.innerHTML= `<img src=${currentImg.path} alt="photo" data-id="${currentImg.index}"></img>`;
    }
    testBtn();
});

backBtn.addEventListener('click', function (e) {
    const numberId = Number(imgEl.firstElementChild.dataset.id);
    
    if (numberId > 1) {
        const currentImg = findImgById(numberId - 1);
        contentImgEl.innerHTML = `<img src=${currentImg.path} alt="photo" data-id="${currentImg.index}"></img>`
    }
    testBtn();
    removeHover();
    setHover();
});

forwardBtn.addEventListener('click', function (e) {
    const numberId = Number(imgEl.firstElementChild.dataset.id);
    
    if (numberId < arrayImg.length) {
        const nextImg = findImgById(numberId + 1);
        
        contentImgEl.innerHTML = `<img src=${nextImg.path} alt="photo" data-id="${nextImg.index}"></img>`
    }
    testBtn();
    removeHover();
    setHover();
});

function findImgById(id) {
    return arrayImg.find((img) => id === img.index)
}

function removeHover() {
    const pointEls = document.querySelectorAll('.point');
    pointEls.forEach((el) => el.classList.remove('hover'));
}

function testBtn() {
    if (Number(imgEl.firstElementChild.dataset.id) === 1) {
        backBtn.disabled = true;
        forwardBtn.disabled = false;
    } else if (Number(imgEl.firstElementChild.dataset.id) === arrayImg.length) {
        forwardBtn.disabled = true;
        backBtn.disabled = false;
    } else {
        backBtn.disabled = false;
        forwardBtn.disabled = false;
    }
}

function setHover() {
    const numberId = Number(imgEl.firstElementChild.dataset.id);
    document.querySelector(`.point[data-id="${numberId}"`).classList.add('hover');
}
