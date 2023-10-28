export class PostedNote {
  points: number;
  sender: string;
  location: string;
  message: string;

  constructor({ sender, location, message }: PostedNote) {
    this.sender = sender;
    this.location = location;
    this.message = message;
    this.points = 0;
  }

  upvote(): void {
    this.points += 1;
  }

  displayNoteMessage(): string {
    return this.message;
  }

  displayNoteSender(): string {
    return this.sender;
  }

  displayNoteLocation(): string {
    return this.location;
  }
  
  displayNoteUpvotes(): number {
    return this.points;
  }
}