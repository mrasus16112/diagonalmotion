import { Scene } from 'phaser';
export class MenuScene extends Scene {
    constructor() {
        super({key: 'menu_scene'});
    }
    preload() {}
    create() {
        const text = this.add.text(100, 100, 'diagonalmotion alpha 0.0.2\ncreated by marsus16112', {fontFamily: "'Roboto Mono', monospace", color: '#fff'});    

    }
    update() {
    }
}