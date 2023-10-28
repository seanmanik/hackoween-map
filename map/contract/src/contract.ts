import { NearBindgen, near, call, view, Vector } from 'near-sdk-js'
import { User } from './model'

@NearBindgen({})
class GuestBook {
  tracker: Vector<User> = new Vector<User>("v-uid");

  @call({ payableFunction: false })
  add_points({ user, points }: { user: string, points: number }) {
    const name = user;
    const score = points; 
    const person: User = { name, score };
    for (let i = 0; i < this.tracker.length; i++) {
      if (this.tracker[i]["name"] === user) {
          // User with the same name found, update their score.
          this.tracker[i]["score"] += points;
          return; // Exit the loop once the user is found and updated.
      }
  }
  this.tracker.push(person);  
}

  @call({ payableFunction: false })
  redeem_points({ user, points }: { user: string, points: number }) {
    for (let i = 0; i < this.tracker.length; i++) {
      if (this.tracker[i]["name"] === user) {
          // User with the same name found, update their score.
          this.tracker[i]["score"] -= points;
          return; // Exit the loop once the user is found and updated.
      }
  }
  }

  @view({})
  // Returns an array of messages.
  get_points( { user }: { user:string }): number {
    for (let i = 0; i < this.tracker.length; i++) {
      if (this.tracker[i]["name"] === user) {
          // User with the same name found, update their score.
          return this.tracker[i]["score"]; // Exit the loop once the user is found and updated.
      }
      return 0;
  }
}
}
