import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(private player1: Fighter, private player2: Fighter) {
    super(player1);
  }

  fight(): number {
    while (this.player.lifePoints > 0 && this.player2.lifePoints > 0) {
      this.player.attack(this.player2);
      this.player2.attack(this.player);
    }
    return super.fight();
  }
}