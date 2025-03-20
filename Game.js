var block = document.getElementById('block')
block.style.height = 50 + 'px';
block.style.width = 50 + 'px';

block.addEventListener("mouseover", function (event) {
    // let x = event.clientX;
    // let y = event.clientY;

    block.style.height = 100 + 'px';
    block.style.width = 100 + 'px';

    // block.style.marginLeft = x - 50 + 'px';
    // block.style.marginTop = y - 50 + 'px';
});

block.addEventListener("mouseleave", function () {
    block.style.height = 50 + 'px';
    block.style.width = 50 + 'px';
});

document.addEventListener("click", function (event) {

    let x = event.clientX;
    let y = event.clientY;
    console.log(x, y);

    block.style.marginLeft = x - 25 + 'px';
    block.style.marginTop = y - 25 + 'px';
});

document.addEventListener("keydown", (event) => {

    var n = event.key

    console.log(n);
    var x = block.style.marginLeft
    var y = block.style.marginTop
    console.log(x, y);


    switch (n) {
        case 'ArrowUp':
            block.style.marginTop = parseFloat(y) - 5 + 'px';
            break;
        case 'ArrowDown':
            block.style.marginTop = parseFloat(y) + 5 + 'px';
            break;
        case 'ArrowRight':
            block.style.marginLeft = parseFloat(x) + 5 + 'px';
            break;
        case 'ArrowLeft':
            block.style.marginLeft = parseFloat(x) - 5 + 'px';

    }
});
