import getData from "./apiGetData.js";
import { RUTA_API_NAV_TOOLS, RUTA_API_NEWS, RUTA_API_ICONS_SERVICES } from "./config.js";
import { formatDate, makeCarouser } from "./helpers.js";




// 
/* creacion banner carousel home section uno*/
makeCarouser({
    contenedor: ".content-banner",
    autoplay: true,
    timeAutoPlay: 3000,
    speed: 1000
})



/* Checking if the variable section_tools and datanav are defined. If they are, it loops through the
data array [datanav] and adds the HTML to section_tools. */
const datanav = await getData(RUTA_API_NAV_TOOLS)
if ($('.section_tools') && datanav) {
    datanav.forEach(element => {
        $('.section_tools').append(`<div class="ctn-icons-nav">
                                        <div>
                                            <img src=${element.icon} alt=${element.name}>
                                        </div>
                                        <h4><a href="#">${element.name}</a></h4>
                                    </div>`);
    });
}

/* Checking if the variable section_tools_mobile and datanav are defined. If they are, it loops through
the data array [datanav] and adds the HTML to section_tools_mobile. */

if ($(".section_tools_mobile") && datanav) {
    datanav.forEach(element => {
        $(".section_tools_mobile").append(`<div class="ctn-icons-nav-mobile">
                                        <div>
                                            <img src=${element.icon} alt=${element.name}>
                                        </div>
                                        <h4><a href="#">${element.name}</a></h4>
                                    </div>`);
    });
    makeCarouser({
        contenedor: '.section_tools_mobile',
        slidesVisiblesMas1200: 7,
        toScrollMas1200: 1,
        slidesVisiblesMenos768: 6,
        toScrollMenos768: 1,
        dots: false,
        speed: 1800,
        timeAutoPlay: 0,
        autoplay: true,
        arrows: true
    })
}




const { articles } = await getData(RUTA_API_NEWS)
console.log(articles)
const container_news = document.querySelector(".banner_news")
const imgBroken = '../assets/banners/imgBroken.png'


/* Checking if the variable container_news and articles are defined. If they are, it loops through the
* data array [articles] and adds the HTML to container_news. 
* After,  run function to creates a banner carouser.
*/
if (container_news && articles) {
    articles.forEach(({ category, urlToImage, title, publishedAt, url }) => {
        category === undefined ? category = 'sin categoria' : category
        $(container_news).append(`
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
                                        </div>`);

    });
    makeCarouser({
        contenedor: '.banner_news',
        slidesVisiblesMas1200: 3,
        toScrollMas1200: 3,

        slidesVisiblesMenos1200: 2,
        toScrollMenos1200: 2,
        arrows: false
    });
}



// with vanila js: 
/* let img = document.querySelectorAll("img")
function imgError(image) {
    image.forEach((im) => {
        if (im.naturalHeight === 0) {
            im.style.backgroundColor = "#5c5c5c"
            im.src = imgBroken;
            return true;
        }
    })
}
imgError(img) */


/* This is a jQuery function that is checking for any image that has an error. If it does, it will
change the image to the imageBroken.png image. */
$("img").on("error", function () {
    $(this).unbind("error").attr("src", imgBroken).css({ backgroundColor: "#5c5c5c" });
});

/* Creating a carousel on service's container. */
makeCarouser({
    contenedor: '.right-ctb-banner-services',
    timeAutoPlay: 1000,
    autoplay: false,
    arrows: false
});



/* Checking if the variable section_tools and data_icons_servs are defined. If they are, it loops
through the data array [data_icons_servs] and adds the HTML to ctn_icons_services. */
const data_icons_servs = await getData(RUTA_API_ICONS_SERVICES)
if ($(".ctn-icons-services") && data_icons_servs) {

    data_icons_servs.forEach(element => {
        $(".ctn-icons-services").append(`<div>
                                            <img src=${element.icon} alt="${element.name} coomuldesa">
                                            <h4>${element.name}</h4>
                                        </div>`);

    });
}