class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    init() {
        const image = new Image();
        image.onload = () => {
            this.ctx.drawImage(image, 0, 0);
        };

        image.src = "/images/maps/DemonLower.png";

        const hero = new Image();
        hero.onload = () => {
            this.ctx.drawImage(
                hero,
                0, // 
                0
                )
        }
        hero.src = "/images/characters/people/gero.png"

    }



}
