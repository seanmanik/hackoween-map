import { NearBindgen, near, call, view, Vector, LookupMap, UnorderedMap } from 'near-sdk-js'
import { PostedNote } from './model'

@NearBindgen({})
class NoteList {
  notes: LookupMap<Vector<PostedNote>> = new LookupMap<Vector<PostedNote>>("notes");

  @call({ payableFunction: true })
  add_message({ location, message }: { location: string, message: string }) {
    // If the user attaches more than 0.1N the message is premium
    const sender = near.predecessorAccountId();
    const note: PostedNote = { sender, location, message };
    this.notes.set(note);
  }

  @view({})
  // Returns an array of messages.
  get_messages({ from_index = 0, limit = 10 }: { from_index: number, limit: number }): PostedMessage[] {
    return this.messages.toArray().slice(from_index, from_index + limit);
  }

  @view({})
  get_points({ name }: { name: string }): number {
     return this.messages.length 
    
  }
}
