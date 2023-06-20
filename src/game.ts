import {Game, Types} from 'phaser';
import { LoadScene } from './scene/load';

const config: Types.Core.GameConfig = {
  title: "board",
  scale: {
    mode: Phaser.Scale.ScaleModes.RESIZE,
    width: window.innerWidth,
    height: window.innerHeight
  },
  type: Phaser.AUTO,
  scene: [LoadScene], // add starting scene
  autoFocus: true,
};

const game = new Game(config);