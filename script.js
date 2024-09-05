document.getElementById('downloadCV').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'CV-Isip, John Lynard.pdf';
    link.download = 'CV-Isip, John Lynard.pdf';
    link.click();
});

// function startLoader(){
//     let counterElement = document.querySelector('.counter');
//     let currentValue = ['Test','One','Two','Three'];

//     function updateCounter(){
//         for (let i = 0; i < currentValue.length; i++) {
//             counterElement.textContent = currentValue[i];
//         }
//     }
//     updateCounter();
// }

// startLoader();

// gsap.to(".counter", 0.25,{
//     delay: 0.5,
//     opacity: 0, 
// });

// gsap.to(".bar", 0.25,{
//     delay: 0.5,
//     height: 0,
//     stagger: {
//         amount: 0.5,
//     },
//     ease: "power4.inOut",
// });


gsap.registerPlugin(ScrollTrigger)

gsap.from('.logo div',{
    opacity:0,
    delay:1,
    x:20
} )

const menu_items = document.querySelector('.menu-items')
gsap.from(menu_items.children ,{
    opacity:0,
    x:0,
    duration:1,
    delay:1.5,
    stagger:{
        amount:1
    }
})

const media_links = document.querySelector('.media-links')
gsap.from(media_links.children ,{
    opacity:0,
    x:0,
    duration:1,
    delay:2,
    stagger:{
        amount:1
    }
})


gsap.utils.toArray('.skill-img').forEach((skillImg, index) => {
    gsap.fromTo(skillImg, {
        opacity: 0,
        x: -100,
        rotation: 0,
    }, {
        opacity: 1,
        x: 0,
        rotation: 360,
        duration: 0.5,
        delay: index * 0.2,
        ease: "power1.out",
        scrollTrigger: skillImg
    });
});




gsap.utils.toArray('.title').forEach(title=>{
    gsap.fromTo(title,{
        letterSpacing:'10px',
        opacity:0,
        x:300,
        skewX:65
    },{
        letterSpacing:'0',
        opacity:1,
        x:0,
        skewX:0,
        duration:1,
        delay:.5,
        scrollTrigger:title
    })
})

gsap.utils.toArray('.p').forEach(p=>{
    gsap.fromTo(p,{
        opacity:0,
        x:150,
        skewX:30
    },{
        opacity:1,
        x:0,
        skewX:0,
        duration:1,
        delay:.5,
        scrollTrigger:p

    })
})

gsap.from('.profile' ,{
    opacity:0,
    scale:.5,
    duration:1,
    delay:.5
})

gsap.fromTo('.hand',{
    scale:.2,
    opacity:0,
    skewY:30
},{
    scale:1,
    opacity:1,
    skewY:0,
    duration:1,
    delay:.5,
    scrollTrigger:'.hand'
})



gsap.utils.toArray('.line').forEach(line=>{
    gsap.fromTo(line,{
        opacity:0,
        width:'0%'
    },{
        opacity:1,
        width:'100%',
        duration:1,
        delay:0.5,
        scrollTrigger:line

    })
})


gsap.utils.toArray('.rotation').forEach(rotate=>{
    gsap.fromTo(rotate,{
        opacity:0,
        rotation:350,
        scale:.2
    },{
        opacity:1,
        rotation:0,
        scale:1,
        duration:1,
        delay:1,
        scrollTrigger:rotate

    })
})


gsap.fromTo('.card' ,{
    opacity:0,
    scale:.1,
},{
    opacity:1,
    scale:1,
    duration:1,
    delay:.5,
    stagger:{
        amount:1
    },
    scrollTrigger:'.card'
})

const menu = document.querySelector('.menu')

gsap.from(menu.children,{
    opacity:0,
    x:50,
    duration:1,
    delay:.5,
    stagger:{
        amount:1
    },
    scrollTrigger:{
        trigger:menu.children
    }
})


