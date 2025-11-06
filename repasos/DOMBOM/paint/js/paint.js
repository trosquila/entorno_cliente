let color = '#000000ff';
let paleta = document.querySelectorAll('input[type="color"]')[0];

paleta.addEventListener('input', function(){
    color = paleta.value;
});

let lienzo = document.querySelectorAll('.pixel');
lienzo.forEach(pixel => {
    pixel.addEventListener('click', function(){
        this.style.backgroundColor = color;
    })
});