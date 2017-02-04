var imagesArray = ["dog.jpg", "fox.jpg", "mouse.jpg", "alligator.jpg", "fish.jpg", "parrot.jpg", "cat.jpg"];

function displayImage() {
    var num = Math.floor(Math.random() * 7); // 0...6
    document.canvas.src = 'http://placehold.it/150x150/cf5&text=' + imagesArray[num];
}