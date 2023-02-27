console.log("taking Shape")


const imageElement: HTMLImageElement | null = document.querySelector('img');


if (imageElement) {
    imageElement.addEventListener('click', function() {
      imageElement.style.transform = 'perspective(600px) rotateY(45deg)';
      imageElement.style.animation = 'rotate 2s linear infinite';
    });
  }
   