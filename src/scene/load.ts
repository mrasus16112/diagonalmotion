import { Scene, GameObjects } from 'phaser';
export class LoadScene extends Scene {
    private char: GameObjects.Sprite;
    constructor() {
        super({key: 'load_scene', active: true});
    }
    preload() {
        this.load.setBaseURL('src/asset/');
        this.load.audio('valse', 'audio/valse_gymnopedie.mp3');
        this.load.spritesheet('char', 'sprites/char.png', {frameWidth: 32});
    }
    create() {
        const sound = this.sound.add('valse');
        sound.play();
        // .setTexture('char', n) to change texture
        this.scene.start('board_scene');
    }
    update() {
    }
}