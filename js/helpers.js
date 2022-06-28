/**
 * Esta función toma un nombre de clase como argumento y luego utiliza ese nombre de clase para apuntar a un 
 * carrusel y hacer que funcione.
 * @param contenedor -  la clase del contenedor que será el carrusel
 */

export const makeCarouser = ({
    contenedor,
    slidesVisiblesMas1200 = 1,
    slidesVisiblesMenos1200 = 1,
    slidesVisiblesMenos992 = 1,
    slidesVisiblesMenos768 = 1,
    toScrollMas1200 = 1,
    toScrollMenos1200 = 1,
    toScrollMenos992 = 1,
    toScrollMenos768 = 1,
    autoplay = true,
    timeAutoPlay = 4000,
    dots = true,
    speed = 1000,
    arrows= true,



}) => {
    $(`${contenedor}`).slick({
        dots: dots,
        slidesToShow: slidesVisiblesMas1200,
        slidesToScroll: toScrollMas1200,
        autoplay: autoplay,
        autoplaySpeed: timeAutoPlay,
        cssEase: "linear",
        speed: speed,
        arrows,
        
        
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: slidesVisiblesMenos1200,
                    slidesToScroll: toScrollMenos1200,
                    infinite: true,
                    dots: dots
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: slidesVisiblesMenos992,
                    slidesToScroll: toScrollMenos992,
                    dots: dots
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: slidesVisiblesMenos768,
                    slidesToScroll: toScrollMenos768,
                    dots: dots
                }
            }
        ]
    });
}

export const redirect = (url) => {
    window.location.href = url
}

export const formatDate = (date) => {
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    const newDate = new Date(date);

    return `${newDate.getDate()} ${meses[newDate.getMonth()].toUpperCase()}, ${newDate.getUTCFullYear()}`
}