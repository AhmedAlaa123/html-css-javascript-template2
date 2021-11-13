'use strict';
const header=document.querySelector('header');
const btnToggelMenu=document.querySelector('.btn-toggel-menu');
const btnScrollTop=document.querySelector('.btn-scrollTop')
const navMenu=document.querySelector('nav .nav-menu ');
const logo=document.querySelector('.logo img')
const links=document.querySelectorAll('nav .nav-menu>li>a');
const sections=document.querySelectorAll('section')
const servicesSlidingImage=document.querySelector('.services .service-item .service-item-img')
const btnSlidRight=document.querySelector('.slid-btn-right')
const btnSlidLeft=document.querySelector('.slid-btn-left')
const indicators=document.querySelectorAll('.indicators .inicator')
const images=['./images/about/about1.webp','./images/about/about2.webp']
const loaddingOverlay=document.querySelector('.loading-overlay')
let slidingIndex=0

btnToggelMenu.addEventListener('click',(e)=>{   

    navMenu.classList.toggle('active')
})
btnScrollTop.addEventListener('click',e=>{
    sections[0].scrollIntoView()
})
btnSlidRight.addEventListener('click',()=>{
    slidingIndex=slidingIndex+1>=images.length?0:slidingIndex+1
    servicesSlidingImage.setAttribute('src',images[slidingIndex])
    setActiveIndicator()
})
btnSlidLeft.addEventListener('click',()=>{
    slidingIndex=slidingIndex-1<0?images.length-1:slidingIndex-1
    servicesSlidingImage.setAttribute('src',images[slidingIndex])
    setActiveIndicator()
})
window.onscroll=()=>{

    changeHeaderStyleAndBtnScrollTop()
    activeMenu()
}
function changeHeaderStyleAndBtnScrollTop()
{
    if(window.scrollY>560)
    {
        document.documentElement.style.setProperty('--header-background-color','#fff')
        document.documentElement.style.setProperty('--header-text-color','#333')
        header.style.boxShadow='0 1px 10px 1px rgba(0, 0, 0, 0.2)'
        logo.setAttribute('src','./images/logo.webp')
        btnScrollTop.style.display='flex'
    }
    else{
        document.documentElement.style.setProperty('--header-background-color','transparent')
        document.documentElement.style.setProperty('--header-text-color','#fff')
        logo.setAttribute('src','./images/logo-alt.webp')
        header.style.boxShadow='none'
        btnScrollTop.style.display='none'


    }
}
function activeMenu()
{
    let lenght=sections.length;
    while(--lenght&&window.scrollY+100<sections[lenght].offsetTop){}
   
    links.forEach(link => {
        if(sections[lenght].id===link.dataset.target)
        {
            link.classList.add('active')
        }
        else{
        link.classList.remove('active')
        }
    });
   
    
    
}

// this function to add active class to indicator
function setActiveIndicator(){
    indicators.forEach(indicator=>indicator.classList.remove('active'))
    indicators[slidingIndex].classList.add('active')
}

// this will call only once
changeHeaderStyleAndBtnScrollTop()
activeMenu()

//this make loadig overlay shown on 2 seconds
setTimeout(()=>{
    loaddingOverlay.style.display='none'
},2000)