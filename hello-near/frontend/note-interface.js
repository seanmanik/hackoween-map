/* Talking with a contract often involves transforming data, we recommend you to encapsulate that logic into a class */

import { utils } from 'near-api-js';

export class NoteGuestBook {

  constructor({ contractId, walletToUse }) {
    this.contractId = contractId;
    this.wallet = walletToUse
  }

  async leaveNote(location, text, user) {
    return await this.wallet.callMethod({ contractId: this.contractId, method: "leave_note", args: { location: location, text: text, user: user } });
  }

  async upvote(location, text) {
    return await this.wallet.callMethod({ contractId: this.contractId, method: "upvote", args: { location: location, text: text } });
  }

  async get_notes(location) {
    return await this.wallet.viewMethod({ contractId: this.contractId, method: "get_notes", args: { location: location } });
  }

}