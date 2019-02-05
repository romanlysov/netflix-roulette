import join from 'lodash-es/join';

function component() {
    let element = document.createElement('div');

    element.innerHTML = join(['Hello', 'Roman'], ' ');

    return element;
}

document.body.appendChild(component());


