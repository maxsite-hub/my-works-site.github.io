/*const images = document.querySelectorAll('img');


// параметр option отслеживает относительно какого-то div class id
const options = {
    root: null,
    rootMargin: '0px', //
    threshold: 0.1 // порог срабатывания (срабатывает когда объект изображение пересекает зону видимости)
}

function handleImg(myImg, observer) {
    myImg.forEach(myImgSingle => {
        console.log(myImgSingle.intersectionRatio);
        if (myImgSingle.intersectionRatio > 0) {
            loadImage(myImgSingle.target);
        }
    })
}

function loadImage(image) {
    image.src = image.getAttribute('data');
}
//объект conts создание экземпляра объекта interset позволяет отслеживать по мере того попадает объект в зону видимости или нет функция
const observer = new IntersectionObserver(handleImg, options);

images.forEach(img => {
    observer.observe(img);// объект observer методом observe следит за элементами img
})*/
