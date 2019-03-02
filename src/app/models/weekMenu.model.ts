export class WeekMenu {
  weekNumber: number;
  recipies: Array<string>;

  constructor(weekNumber: number, recipies: Array<string>) {
    this.weekNumber = weekNumber;
    this.recipies = recipies;
  }
}
