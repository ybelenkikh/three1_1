function carousel(){
    let arrowLeft =document.querySelector('.arrow-left');
    let arrowRight =document.querySelector('.arrow-right');
    let item = document.querySelector('.item1');
    let containerUl = document.querySelector('ul');
    let itemWidth = item.clientWidth;
    let position = 0;
    arrowRight.addEventListener('click', function () {
        position -= itemWidth;
        position = Math.max(position, -itemWidth * (containerUl.children.length - 1))
        containerUl.style.marginLeft = position + 'px';
    });
    arrowLeft.addEventListener('click', function () {
        position += itemWidth;
        position = Math.min(position, 0)
        containerUl.style.marginLeft = position + 'px';
    })
}
export {carousel}