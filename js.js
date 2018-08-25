let imageDom = document.querySelector('.module-image');
let defaultImage = 'стандарт++.jpg';
let path = 'img/мерседес/';
const partsIcons = document.querySelector('.parts');
let listNodes = document.querySelectorAll('.plans li');
let subListNodes = document.querySelectorAll('.partials li');


//Extend partials
document.querySelector('#open-partial').addEventListener('click', function (e) {
    document.querySelector('.partials').classList.toggle('partials-opened');
    document.querySelector('#open-partial').classList.toggle('active');
    document.querySelector('.triangle').classList.toggle('active');
    document.querySelector('.dropdown-arrow').classList.toggle('active');
    e.preventDefault();
});

//Choose car class
document.querySelector('.classes-section').addEventListener('click', function (e) {
    defaultImage = 'стандарт++.jpg';
    if(e.target.classList.contains('mini')) {
        path = 'img/ситроен/';
    }

    if(e.target.classList.contains('medium')) {
        path = 'img/мазда/'
    }

    if(e.target.classList.contains('premium')) {
        path = 'img/мерседес/'
    }
    imageDom.src = path + defaultImage;
    e.preventDefault();

    let activeState = document.querySelector('.active');
    if (e.target.classList.contains('class-heading')) {
        if(activeState !== null) {
            activeState.classList.remove('active');
        }
        e.target.parentElement.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.className = 'triangle-down active';
    }
});

//Set main plans
document.querySelector('.plans').addEventListener('mouseover', function (e) {
    let item;
    for(let i = 0; i < catalog.length; i++) {
        if(catalog[i].part === listNodes[i].firstChild.className) {
            item = catalog[i];
            if(e.target.className === catalog[i].part) {
                defaultImage = item.image;
                imageDom.src = path + defaultImage;
                partsIcons.innerHTML = '';
                for (let i = 0; i < item.sets.length; i++) {
                    partsIcons.innerHTML +=
                        `<li class="${item.sets[i]}">
                            <div class="icon ${item.sets[i]}-ico"></div>
                            <h4 class="icon-heading">${item.namePlates[i]}</h4>
                        </li>`;
                }
            }
        }
    }
});

//Set partials
document.querySelector('.partials').addEventListener('mouseover', function (e) {
    let item;
    for(let i = 0; i < partials.length; i++) {
        if(partials[i].part === subListNodes[i].firstChild.className) {
            item = partials[i];
            if(e.target.className === partials[i].part) {
                defaultImage = item.image;
                imageDom.src = path + defaultImage;
            }
        }
    }
});
/*
//add arrow
function addArrow(e) {
    //console.log(e.target);
    let activeState = document.querySelector('.active');
    if (e.target.classList.contains('triangle-down')) {
        if(activeState !== null) {
            activeState.classList.remove('active');
        }
        e.target.parentElement.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.className = 'triangle-down active';
    }
}
*/