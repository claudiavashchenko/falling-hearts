const body = document.querySelector("body");

class Heart {
    constructor(color, position, speed) {
        this.color = color
        this.position = position
        this.speed = speed
    }
}

function addHeart() {
    const randomColor = "#000000"
    const randonLeft = 40
    const randomSpeed = 400

    const newHeart = new Heart(randomColor, randonLeft, randomSpeed)
    console.log(newHeart)
}

addHeart()
