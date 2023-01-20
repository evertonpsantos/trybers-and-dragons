import Fighter, { SimpleFighter } from '../Fighter';
// import Monster from '../Monster';
import getRandomInt from '../utils';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _mainCharacter: Fighter, 
    private _enemies: SimpleFighter[],
  ) { 
    super(_mainCharacter); 
  }

  fight(): number {
    while (this._mainCharacter.lifePoints > 0 
      && this._enemies.some((enemy) => enemy.lifePoints > 0)) {
      this.player
        .attack(this._enemies[getRandomInt(0, this._enemies.length - 1)]);
      this._enemies[getRandomInt(0, this._enemies.length - 1)]
        .attack(this._mainCharacter);
    }
    return super.fight();
  }
}