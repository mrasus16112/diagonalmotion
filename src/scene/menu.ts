import { Scene } from 'phaser';
export class MenuScene extends Scene {
    constructor() {
        super({key: 'menu_scene', active: true});
    }
    preload() {
        this.load.baseURL = './asset';
        this.load.audio('valse_gymnopedie', 'audio/valse_gymnopedie.mp3');
    }
    create() {
        const sound = this.sound.add('valse_gymnopedie');
        sound.play();
        const text = this.add.text(100, 100, 'diagonalmotion alpha 1.0\ncreated by marsus16112\n[ click to start ]', {fontFamily: "'Roboto Mono', monospace", color: '#fff'});    

    }
    update() {
    }
}