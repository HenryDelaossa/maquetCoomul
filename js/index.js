import getData from "./apiGetData.js";
import { RUTA_API_NAV_TOOLS, RUTA_API_NEWS, RUTA_API_ICONS_SERVICES } from "./config.js";
import { formatDate, makeCarouser } from "./helpers.js";


// carousel banner 1
makeCarouser({
    contenedor: "content-banner",
    autoplay: false,
    timeAutoPlay: 3000
})
/************* START ALGORITM BY DATA NAVTOOLS ****************\
/*  compruebo si las variables section_tools y datanav están definidas.
*   lo están, recorre la matriz con los datos [datanav] y añade el HTML al section_tools. 
*/
const datanav = await getData(RUTA_API_NAV_TOOLS) // asigno a est avariable la data que me trae la api por medio de la funcion getData
const section_tools = document.querySelector(".section_tools")
if (section_tools && datanav) {

    datanav.forEach(element => {
        section_tools.innerHTML += `<div class="ctn-icons-nav">
                                        <div>
                                            <img src=${element.icon} alt=${element.name}>
                                        </div>
                                        <h4><a href="#">${element.name}</a></h4>
                                    </div>`;

    });
}


/************* START ALGORITM BY SUB IEMS lIST ****************\
/* Añado un eventListener de click a todos los elementos con la clase `contain-sub-items`. Cuando se hace click,
* togglea la visibilidad del siguiente elemento hermano (los subItems).
 */
const itemsWhithSubItems = document.querySelectorAll(".contain-sub-items")
itemsWhithSubItems.forEach((item) => {
    item.addEventListener("click", (e) => {
        $(e.target.nextElementSibling).fadeToggle()
    })
})



/******************** START ALGORITM BY CAROUSEL BANNER NEWS */
/** esta funcion inicializa un carousel, recibe como parametro la clase del elemento contenedor donde quiero inicializar */


const  newsData  = await getData(RUTA_API_NEWS)
console.log(newsData.data)
const container_news = document.querySelector(".banner_news")
const imgBroken = '../assets/banners/imgBroken.png'


if (container_news && newsData.status == 'ok') {
    newsData.data.forEach(({ category, urlToImage, title, publishedAt, url }) => {
        category === undefined ? category = 'sin categoria' : category
        container_news.innerHTML += `
                                        <div class="banner-news__ctn">
                                            <div class="ctn-card__image">
                                                <a href=${url} target="_blank"> 
                                                    <img src=${urlToImage} alt=${urlToImage}>
                                                </a>
                                            </div>
                                            <div class="ctn-info">
                                                <div class="ctn-card__title-category">
                                                    <p class="dateNotice">${formatDate(publishedAt)}</p>
                                                    <p class="category">${category}</p>
                                                </div>
                                                <div class="titleNotice">
                                                    <p>${title}</p>
                                                </div>
                                            </div>

                                        </div>`;

    });
    makeCarouser({
        contenedor: 'banner_news',
        slidesVisiblesMas1200: 3,
        toScrollMas1200: 3,

        slidesVisiblesMenos1200: 2,
        toScrollMenos1200: 2
    });
}


// codigo para identificar imagenes rotas y cambier por imagen indicadora

// con javascript 
/*
let img = document.querySelectorAll("img")
function imgError(image) {
    image.forEach((im) => {
        if (im.naturalHeight === 0) {
            im.style.backgroundColor = "#5c5c5c"
            im.src = imgBroken;
            return true;
        }
    })
}
imgError(img)
*/
// con jquery

$("img").on("error", function () {
    $(this).unbind("error").attr("src", imgBroken).css({ backgroundColor: "#5c5c5c" });
});

makeCarouser({
    contenedor: 'right-ctb-banner-services',
    timeAutoPlay: 1000
});



/************* START ALGORITM BY DATA NAVTOOLS ****************\
/*  compruebo si las variables section_tools y datanav están definidas.
*   lo están, recorre la matriz con los datos [datanav] y añade el HTML al section_tools. 
*/
const data_icons_servs = await getData(RUTA_API_ICONS_SERVICES) // asigno a est avariable la data que me trae la api por medio de la funcion getData
const ctn_icons_services = document.querySelector(".ctn-icons-services")
if (section_tools && data_icons_servs) {

    data_icons_servs.forEach(element => {
        ctn_icons_services.innerHTML += `<div>
                                            <img src=${element.icon} alt="${element.name} coomuldesa">
                                            <h4>${element.name}</h4>
                                        </div>`;

    });
}