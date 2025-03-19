var block = document.getElementById('block')

block.style.marginTop = '275px';
block.style.marginLeft = '500px';

document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;

    var posT = block.style.marginTop.slice(0, -2)
    var posL = block.style.marginLeft.slice(0, -2)

    console.log(posT, posL);

    pT = parseFloat(posT)
    pL = parseFloat(posL)

    console.log(pT, pL);

    switch (name) {
        case 'ArrowUp':
            block.style.marginTop = pT - 5 + 'px';
            break;
        case 'ArrowDown':
            block.style.marginTop = pT + 5 + 'px';
            break;
        case 'ArrowLeft':
            block.style.marginLeft = pL - 5 + 'px';
            break;
        case 'ArrowRight':
            block.style.marginLeft = pL + 5 + 'px';
            break;
    }
}, false);

document.addEventListener('keyup', (event) => {
    var name = event.key;
    var code = event.code;
    console.log(name + '!');

}, false);
