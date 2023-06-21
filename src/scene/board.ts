import { Scene } from 'phaser';
import { Player } from '../class/player';
export class BoardScene extends Scene {
    private player!: Player;
    constructor() {
        super({key: 'board_scene'});
    }
    create() {
        this.player = new Player(this, 100, 100, 3);
    }
    update() {
        this.player.update();
    }
}