import { NearBindgen, near, call, view, Vector } from 'near-sdk-js'
import { User } from './model'

@NearBindgen({})
class GuestBook {
  tracker: Vector<User> = new Vector<User>("v-uid");

  // @call({ payableFunction: false })
  // // Public - Adds a new message.
  // leave_review({ text }: { text: string }) {
  //   // If the user attaches more than 0.1N the message is premium
  //   const premium = near.attachedDeposit() >= BigInt(POINT_ONE);
  //   const sender = near.predecessorAccountId();

  //   const message: Review = { premium, sender, text };
  //   this.messages.push(message);
  // }

  // @view({})
  // // Returns an array of messages.
  // get_messages({ from_index = 0, limit = 10 }: { from_index: number, limit: number }): PostedMessage[] {
  //   return this.messages.toArray().slice(from_index, from_index + limit);
  // }

  @view({})
  get_points(): number { 
    return 0;
  }
}
