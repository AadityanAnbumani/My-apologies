const imageUrl = 'cat.jpg';
const totalImages = 10;
const container = document.getElementById('image-container');

for (let i = 0; i < totalImages; i++) {
    const img = document.createElement('img');
    img.src = imageUrl;
    img.classList.add('random-img');

    // Generate random positions (percentage keeps them inside the viewport)
    const randomTop = Math.floor(Math.random() * 90); // 0% to 90%
    const randomLeft = Math.floor(Math.random() * 90); // 0% to 90%

    img.style.top = `${randomTop}%`;
    img.style.left = `${randomLeft}%`;

    container.appendChild(img);
}
