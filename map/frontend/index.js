// React
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// NEAR
import { MapGuestBook } from './map-interface';
import { ShopGuestBook } from './shop-interface';
import { NoteGuestBook } from './note-interface';

import { Wallet } from './near-wallet';

const contractKeys = ['map', 'shop', 'note'];

const contractNames = {
  'map': '',
  'shop': '',
  'note': ''
};

const wallets = {};
for (const key of contractKeys) {
  wallets[key] = new Wallet({ createAccessKeyFor: contractNames[key] })
}

const mapGuestBook = new MapGuestBook({ contractId: contractNames['map'], walletToUse: wallets['map'] });
const shopGuestBook = new ShopGuestBook({ contractId: contractNames['shop'], walletToUse: wallets['shop'] });
const noteGuestBook = new NoteGuestBook({ contractId: contractNames['note'], walletToUse: wallets['note'] });

// Setup on page load
window.onload = async () => {

  const isSignedIn = (await Object.values(wallets).startUp()).filter(x => x === false).length === 0;
 
  ReactDOM.render(
    <App isSignedIn={isSignedIn} mapGuestBook={mapGuestBook} mapWallet={wallets['map']} shopGuestBook={shopGuestBook} shopWallet={wallets['shop']} noteGuestBook={noteGuestBook} noteWallet={noteWallet} />,
    document.getElementById('root')
  );
}