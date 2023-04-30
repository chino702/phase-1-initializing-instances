class Breakfast {
    constructor(food, drink) {
      this.food = food;
      this.drink = drink;
    }
  }

  class Lunch {
    constructor(salad, soup, drink) {
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }

  class Dinner {
    constructor(salad, soup, entree, dessert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this._dessert = dessert;
    }

    get courses() {
        return [this.salad, this.soup, this.entree, this._dessert];
    }

    set courses(courses) {
        this.salad = courses[0];
        this.soup = courses[1];
        this.entree = courses[2];
        this._dessert = courses[3];
    }
}