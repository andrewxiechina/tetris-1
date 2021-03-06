import RainbowText from 'objects/RainbowText'
import * as Phaser from 'phaser'

export default class GameOverState extends Phaser.State {

    create() {
        let center = {x: this.game.world.centerX, y: this.game.world.centerY}
        this.text = new RainbowText(this.game, center.x, center.y, 'Game Over!\n\nPress any key\nto start a new game')
        this.text.anchor.set(0.5)

        this.input.onDown.add(this.onDown, this)
    }

    onDown() {
        this.text.destroy()

        this.game.state.start('GameState')
    }
}
