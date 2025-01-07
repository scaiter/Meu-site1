document.getElementById('add-link').addEventListener('click', function() {
    var link = prompt("Digite a URL do link:");
    if (link) {
        var a = document.createElement('a');
        a.href = link;
        a.innerText = link;
        document.querySelector('.container').appendChild(a);
    }
});

document.getElementById('add-text').addEventListener('click', function() {
    var text = prompt("Digite o texto que deseja adicionar:");
    if (text) {
        var p = document.createElement('p');
        p.innerText = text;
        document.querySelector('.container').appendChild(p);
    }
});

document.getElementById('add-image').addEventListener('click', function() {
    var imageUrl = prompt("Digite a URL da imagem:");
    if (imageUrl) {
        var img = document.createElement('img');
        img.src = imageUrl;
        img.style.width = '200px';
        img.style.height = '200px';
        document.querySelector('.container').appendChild(img);
    }
});