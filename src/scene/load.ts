import { Scene, GameObjects } from 'phaser';
export class LoadScene extends Scene {
    private char: GameObjects.Sprite;
    constructor() {
        super({key: 'load_scene', active: true});
    }
    preload() {
        this.load.setBaseURL('src/asset/');
        this.load.audio('valse', 'audio/valse_gymnopedie.mp3');
        this.load.image('char', ['sprites/char1.png', 'sprites/char2.png', 'sprites/char3.png', 'sprites/char4.png', 'sprites/char5.png']);
    }
    create() {
        const sound = this.sound.add('valse');
        sound.play();
        this.char = this.add.sprite(100, 100, 'char', 1);

    }
    update() {
    }
}