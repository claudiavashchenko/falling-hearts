const body = document.querySelector("body");

class Heart {
    constructor(color, position, speed) {
        this.color = color
        this.position = position
        this.speed = speed
    }
    draw() {
        const divElement = document.createElement("div")
        divElement.classList.add("heart")
        divElement.style.left = this.position + "px"
       divElement.style.setProperty("--c", this.color)
        body.append(divElement)
    }
}

function addHeart() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16)
    const randonLeft = Math.floor(Math.random() * window.innerWidth)
    const randomSpeed = Math.floor(Math.random() * 500)

    const newHeart = new Heart(randomColor, randonLeft, randomSpeed)
    console.log(newHeart)
    newHeart.draw()
}

addHeart()
