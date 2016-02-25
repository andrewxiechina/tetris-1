import _ from 'lodash'
import {PieceTypes} from 'objects/PieceTypes'

export default class Piece {
    constructor(game) {
        let type = _.cloneDeep(_.sample(PieceTypes))
        this.frame = type.frame
        this.bits = type.bits
        this.x = -100
        this.y = -100

        _.each(this.bits, bit => {
            bit.sprite = game.add.sprite(this.x, this.y, 'bit', this.frame)
        })
    }

    move(x, y) {
        this.x = x
        this.y = y
        _.each(this.bits, bit => {
            bit.sprite.x = x + (bit.ox * 32)
            bit.sprite.y = y + (bit.oy * 32)
        })
    }

    moveRelative(dx, dy) {
        return this.move(this.x + dx, this.y + dy)
    }

    destroy() {
        _.each(this.bits, bit => {
            bit.sprite.destroy()
        })
    }
}
