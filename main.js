let menu=document.querySelector('.mob-menu-icon')
let mob_nav=document.querySelector('.mob-nav')

menu.addEventListener('click',()=>{
mob_nav.classList.toggle('mob-nav-open')
})


//intersectional observer

let card = document.querySelectorAll(".card");


const config = {
    root: null,
    rootMargin: "-20px 0px",
    threshold: 0.5
}

let observer = new IntersectionObserver((entries, observer) => {
    let x = 0;
    entries.forEach(entry => {
        console.log(entry.target.className=='card toLeft')
        if (entry.isIntersecting&&entry.target.className=='card toLeft') {
            console.log('pp')
            setTimeout(() => {
                entry.target.classList.add("card-animation-right");
            }, x += 200);
            observer.unobserve(entry.target)
        }  else if (entry.isIntersecting&&entry.target.className=='card toRight') {
            setTimeout(() => {
                entry.target.classList.add("card-animation-left");
            }, x += 200);
        }
    });
}, config)
card.forEach(e => observer.observe(e));


//reviews

const arrow = document.querySelector('.arrow')
const reviews = document.querySelectorAll('.review')

const review1={
    number:'Отзыв 3',
    review:'dgfdsfgsdfghsdghsfdhgs sd hgsdfh sdh sdfh sdfh ',
    name:'dsfgsd',
}
const review2={
    number:'Отзыв 4',
    review:'dgfdsfgsdfghsdghsfdhgs sd hgsdfh sdh sdfh sdfh ',
    name:'dsfgsd',
}

arrow.addEventListener('click',()=>{
    reviews.forEach((review,num)=>{
        review.querySelector('.reviewText').innerHTML=review
    })
})