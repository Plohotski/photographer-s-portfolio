
import i18Obj from "./translate.js"

let langGlobal

let themeGlobal

function getTranslate(lang) {
    let allData = document.querySelectorAll('[data-i18]')
    for (let key of allData)
        if (key.dataset.i18) 
            key.textContent = i18Obj[lang][key.dataset.i18]
}
const hamburger = document.querySelector('.hamburger');
function toggleMenu() {
    hamburger.classList.toggle('open');
    
    if (hamburger.classList.contains("open")) {

        document.getElementById("hamburger-item").style.right = "0"
        document.getElementById("hamburger-item").style.width = "100%"
    } else { 
    
        document.getElementById("hamburger-item").style.right = "-620px"
        document.getElementById("hamburger-item").style.width = "0%"
    }
}
hamburger.addEventListener('click', toggleMenu);

function hideHamburger() {
    document.getElementById("hamburger-item").style.right = "-620px"
    document.getElementById("hamburger-item").style.width = "0%"
    document.getElementById("hamburger").classList.toggle("open")
}

let hambNavItem1 = document.getElementById("header-link-1")
hambNavItem1.onclick = function () {hideHamburger()
    
}

let hambNavItem2 = document.getElementById("header-link-2")
hambNavItem2.onclick = function () { hideHamburger() }

let hambNavItem3 = document.getElementById("header-link-3")
hambNavItem3.onclick = function () {hideHamburger()}

let hambNavItem4 = document.getElementById("header-link-4")
hambNavItem4.onclick = function () {hideHamburger()}

let hambNavItem5 = document.getElementById("header-link-5")
hambNavItem5.onclick = function () { hideHamburger() }

let carbon = document.querySelector(".carbon-moon")
function themeSwith() {
    carbon.classList.toggle('active');
    document.body.classList.toggle('lit');
    let title_wrapper = document.querySelectorAll(".title-wrapper");
    for (let i = 0; i < title_wrapper.length; i++)
        title_wrapper[i].classList.toggle("lit");
    let title = document.querySelectorAll(".title");
    for (let i = 0; i < title.length; i++)
        title[i].classList.toggle("lit");
    let portfolio_btn = document.querySelectorAll(".portfolio-btn");
    for (let i = 0; i < portfolio_btn.length; i++)
        portfolio_btn[i].classList.toggle("tot");
    let hamburger_list = document.querySelector(".hamburger-nav-list");
    hamburger_list.classList.toggle("qwer");
    let hamburger_link = document.querySelectorAll(".hamburger-link");
    for (let i = 0; i < hamburger_link.length; i++)
        hamburger_link[i].classList.toggle("black");
    let line1 = document.querySelector(".line1");
    line1.classList.toggle("ble");
    let line3 = document.querySelector(".line3");
    line3.classList.toggle("ble");
    if (document.body.classList.contains("lit"))
        themeGlobal = 'light'
    else
        themeGlobal = 'dark'
}  

carbon.onclick = function () {
    themeSwith()
}

function setLocalStorage() {
    localStorage.setItem('langGlobal', langGlobal);
    localStorage.setItem('themeGlobal', themeGlobal);
  }
window.addEventListener('beforeunload', setLocalStorage)

  function getLocalStorage() {
    if(localStorage.getItem('langGlobal')) {
      const lang = localStorage.getItem('langGlobal');
      getTranslate(lang);
      if(lang === 'ru'){
        ru.classList.add('is-active')
        en.classList.remove('is-active')
      } else{
        ru.classList.remove('is-active')
        en.classList.add('is-active')
      }
    }
    if(localStorage.getItem('themeGlobal')) {
        const theme = localStorage.getItem('themeGlobal');
        if (theme === 'light')
        themeSwith()
      }
  }
 window.addEventListener('load', getLocalStorage)

const portfolioBtn = document.querySelectorAll('.portfolio-btn');
const portfolioImages = document.querySelectorAll('.portfolio-image');
const winter = document.querySelector('.winter')
winter.onclick = function () {
    if (!winter.classList.contains("active")){
        for(let i = 0; i<portfolioBtn.length; i++)
            portfolioBtn[i].classList.remove("active")
        winter.classList.add("active")
    portfolioImages.forEach((img, index) => img.src =`./assets/img/winter/${index + 1}.jpg`);
    }
}

const spring = document.querySelector('.spring')
spring.onclick = function () {
    if (!spring.classList.contains("active")){
        for(let i = 0; i<portfolioBtn.length; i++)
            portfolioBtn[i].classList.remove("active")
        spring.classList.add("active")
    portfolioImages.forEach((img, index) => img.src = `./assets/img/spring/${index + 1}.jpg`);
}}

const summer = document.querySelector('.summer')
summer.onclick = function () {
    if (!summer.classList.contains("active")){
        for(let i = 0; i<portfolioBtn.length; i++)
            portfolioBtn[i].classList.remove("active")
        summer.classList.add("active")
    portfolioImages.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.jpg`);
}}

const autumn = document.querySelector('.autumn')
autumn.onclick = function () {
    if (!autumn.classList.contains("active")){
        for(let i = 0; i<portfolioBtn.length; i++)
            portfolioBtn[i].classList.remove("active")
        autumn.classList.add("active")
    portfolioImages.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.jpg`);
}}

    const ru = document.querySelector('.header-link-ru')
    const en = document.querySelector('.header-link-en')
    
    ru.onclick = function () {
        if (!ru.classList.contains("is-active")) {
            langGlobal = 'ru'
            getTranslate('ru')
            ru.classList.toggle('is-active')
            en.classList.toggle('is-active')
        }
    }
    en.onclick = function () {
        if (!en.classList.contains("is-active")) {
            langGlobal = 'en'
            getTranslate('en')
            ru.classList.toggle('is-active')
            en.classList.toggle('is-active')
        }
    }


    function preloadImages() {
        const seasons = ['winter', 'spring', 'summer', 'autumn'];
        for (let j = 0; j < 4; j++)
            for (let i = 1; i <= 6; i++) {
                const img = new Image();
                img.src = `./assets/img/${seasons[j]}/${i}.jpg`;
            }
    }
    
preloadImages();
console.log("Ваша отметка - 75 балла(ов)")