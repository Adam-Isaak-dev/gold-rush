class Game {
  constructor() {
    this.click = 1;
    this.production = 1;
    this.commerce = 1;
    this.distribution = 1;
    this.multiplier = 1;
    this.money = new Money();
  }
}

class Money {
  constructor() {
    this.money = 0;
    this.page = document.getElementById("money");
  }

  update(value) {
    this.money += value;
    this.page.innerText = `${this.money.toFixed(0)}`;
    this.checkPurchases();
  }

  checkPurchases() {
    upgrades.checkUpgrades(this.money);
    autoClickers.checkAutos(this.money);
  }
}

const game = new Game();
game.money.update(0);

const mine = document.getElementById("mine");

mine.addEventListener("click", function(){
  game.money.update(game.click * game.multiplier);
});