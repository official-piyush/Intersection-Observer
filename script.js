const hero = document.querySelector(`.hero`);
const nav = document.querySelector(`nav`);

const heroObserver = new IntersectionObserver(function(entries, heroObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting)
            nav.classList.add(`nav-changed`);
        else
        nav.classList.remove(`nav-changed`);
        console.log(nav);
    });
}, {
    root: null,
    threshold: 0,
    rootMargin: "-85px"
});

heroObserver.observe(hero);

// observe Cards and arts

const cardsParent = document.querySelector(`.cards`);
const cardList = cardsParent.querySelectorAll(`.card`);

const sliderList = document.querySelectorAll(`.slider`);

const cardOptions = {
    threshold: 0.5,
    rootMargin: "0px  0px -150px 0px"
};

const callback = function(entries, cardsObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add(`show-element`);
            cardsObserver.unobserve(entry.target);
        }
    });
}


const cardsObserver = new IntersectionObserver(callback, cardOptions);

cardList.forEach(card => {
    cardsObserver.observe(card);
})

sliderList.forEach(slider => {
    cardsObserver.observe(slider);
});