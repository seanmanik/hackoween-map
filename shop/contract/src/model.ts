export class User {
  name: string;
  score: number;

  constructor({ name, score }: User) {
    this.name = name;
    this.score = score;
  }
}