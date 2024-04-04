// GSAP for animation
const tl = gsap.timeline();
tl.from('nav ul li',{
    y : -100,
    opacity : 0,
    duration : 2,
    stagger : 1
})
gsap.from('.header-images img', {
    x: -1500,
    opacity: 0,
    duration: 2,
    stagger: 1
});
  
const headerImage = document.querySelector('.header-images');
let scrollAmount = 0;
window.addEventListener('scroll', () => {
    const delta = window.scrollY - scrollAmount;
    scrollAmount = window.scrollY;
    headerImage.scrollLeft += delta * 5.5; // Change '2' to adjust the scroll speed
}
);
