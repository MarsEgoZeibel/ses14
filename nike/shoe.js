document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const shoeId = params.get('id');

    const shoeInfo = {
        'nike-sb-dunk': {
            name: 'Nike SB Dunk Low Pro Chicago',
            price: '$414',
            image: 'img/dank-mask1.png',
            sideImage: 'img/dank-mask2.png',
            shortDescription: 'Кроссовки SB Dunk Low Pro Chicago',
            longDescription: `
                <p class="ocrosah">Кроссовки SB Dunk Low Pro "Chicago"</p>
                <p class="ocrosah">это привлекательная модель,</p>
                <p class="ocrosah">выполненная в классической</p>
                <p class="ocrosah">цветовой гамме всемирно</p>
                <p class="ocrosah">известной баскетбольной команды</p>
                <p class="ocrosah">под названием "Chicago Bulls".</p>
            `
        },
        'nike-air-force': {
            name: 'Air Force 1 Low Triple Black',
            price: '$125',
            image: 'img/air-mask1.png',
            sideImage: 'img/air-mask2.png',
            shortDescription: 'Air Force 1 Low Triple Black',
            longDescription: `
                <p class="ocrosah">это одна из самых узнаваемых и </p>
                <p class="ocrosah">популярных моделей кроссовок от</p>
                <p class="ocrosah">всемирно известного американского</p>
                <p class="ocrosah">бренда Nike. Эта модель</p>
                <p class="ocrosah">является классикой streetwear</p>
                <p class="ocrosah">и имеет долгую и богатую историю.</p>
            `
        },
        // Добавьте другие кроссовки по аналогии
    };

    const shoe = shoeInfo[shoeId];
    if (shoe) {
        document.getElementById('shoe-name').textContent = shoe.name;
        document.getElementById('shoe-price').textContent = shoe.price;
        document.getElementById('shoe-image').src = shoe.image;
        document.getElementById('shoe-side-image').src = shoe.sideImage;
        document.getElementById('shoe-short-description').textContent = shoe.shortDescription;
        document.getElementById('shoe-long-description').innerHTML = shoe.longDescription;
    } else {
        document.getElementById('shoe-name').textContent = 'Air Max Plus TN';  //кросовок не найден
    }
});
