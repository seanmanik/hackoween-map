/* Talking with a contract often involves transforming data, we recommend you to encapsulate that logic into a class */

import { utils } from 'near-api-js';

export class MapGuestBook {

  constructor({ contractId, walletToUse }) {
    this.contractId = contractId;
    this.wallet = walletToUse
  }

  async redeemPoints(user, points) {
    return await this.wallet.callMethod({ contractId: this.contractId, method: "redeem_points", args: { user: user, points: points } });
  }

}