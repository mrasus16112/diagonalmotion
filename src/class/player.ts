import {Physics} from 'phaser';
type Key = Phaser.Input.Keyboard.Key;
export class Player extends Physics.Arcade.Sprite {
    private Q: Key;
    private E: Key;
    private Z: Key;
    private C: Key
    constructor(scene: Phaser.Scene, x: number, y: number, frame?: number) {
        super(scene, x, y, 'char', frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.pBody.setCollideWorldBounds(true);
        this.Q = this.scene.input.keyboard.addKey('Q');
        this.E = this.scene.input.keyboard.addKey('E');
        this.Z = this.scene.input.keyboard.addKey('Z');
        this.C = this.scene.input.keyboard.addKey('C');
    }
    private get pBody(): Physics.Arcade.Body {
        return <Physics.Arcade.Body>this.body;
    }
    update() {
        this.pBody.setVelocity(0);
        if (this.Q?.isDown) {
            this.body.velocity.x = -100;
            this.body.velocity.y = -100;
        } else if (this.C?.isDown) {
            this.body.velocity.x = 100;
            this.body.velocity.y = 100;
        } else if (this.E?.isDown) {
            this.body.velocity.x = 100;
            this.body.velocity.y = -100;
        } else if (this.Z?.isDown) {
            this.body.velocity.x = -100;
            this.body.velocity.y = 100;
        }
    }
}