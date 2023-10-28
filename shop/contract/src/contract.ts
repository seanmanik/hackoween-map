import { NearBindgen, near, call, view, Vector } from 'near-sdk-js'
import { User } from './model'

@NearBindgen({})
class GuestBook {
  users: Vector<User> = new Vector<User>("v-uid");

  @call({ payableFunction: false })
  add_points({ name, points }: { name:string, points: number }) {
    const score = Number(points);
    let person: User = { name, score };
    for (let i = 0; i < this.users.length; i++) {
      if (this.users.get(i)["name"] == name) {
        const new_score = Number(this.users.get(i)["score"]) + Number(points);
        person["score"] = Number(new_score);
        this.users.replace(i, person);
        return;
      }
    }
    this.users.push(person);
  }

  @call({ payableFunction: false })
  redeem_points({ name, points }: { name:string, points: number }) {

    for (let i = 0; i < this.users.length; i++) {
      if (this.users.get(i)["name"] == name) {
        const score = Number(this.users.get(i)["score"]) - Number(points);
        const person: User = { name, score };
        this.users.replace(i, person);
        return;
      }
    }
  }

  @view({})
  get_points({ user }: { user: string }): number { 
    for (let i = 0; i < this.users.length; i++) {
      if (this.users.get(i)["name"] === user) {
          return this.users.get(i)["score"];
      }
    }  
  }
  
  @view({})
  get_all_points(): User[] {
    return this.users.toArray();
  }

}
