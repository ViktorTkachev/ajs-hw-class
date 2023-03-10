import Character from './characters';

class Daemon extends Character {
  constructor(name, type = 'Daemon', attack = 10, defence = 40) {
    super(name, type);
    this.attack = attack;
    this.defence = defence;
  }
}

export default Daemon;
