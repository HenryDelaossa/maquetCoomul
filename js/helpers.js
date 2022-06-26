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
    timeAutoPlay = 4000


}) => {
    $(`.${contenedor}`).slick({
        dots: true,
        slidesToShow: slidesVisiblesMas1200,
        slidesToScroll: toScrollMas1200,
        autoplay: autoplay,
        autoplaySpeed: timeAutoPlay,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: slidesVisiblesMenos1200,
                    slidesToScroll: toScrollMenos1200,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: slidesVisiblesMenos992,
                    slidesToScroll: toScrollMenos992
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: slidesVisiblesMenos768,
                    slidesToScroll: toScrollMenos768
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