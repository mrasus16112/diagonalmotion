import {Game, Types} from 'phaser';
import { LoadScene } from './scene/load';
import { BoardScene } from './scene/board';

const config: Types.Core.GameConfig = {
  title: "board",
  scale: {
    mode: Phaser.Scale.ScaleModes.RESIZE,
    width: window.innerWidth,
    height: window.innerHeight
  },
  type: Phaser.AUTO,
  scene: [LoadScene, BoardScene], // add starting scene
  autoFocus: true,
  physics: {
    default: 'arcade'
  }
};

const game = new Game(config);