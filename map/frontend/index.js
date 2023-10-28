// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// NEAR
import { MapGuestBook } from './map-interface';
import { NoteGuestBook } from './note-interface';

import { Wallet } from './near-wallet';

const contractKeys = ['map', 'note'];

const contractNames = {
  'map': 'dev-1698468273316-84663619117753',
  'note': 'postednotes.testnet'
};

const wallets = {};
for (const key of contractKeys) {
  wallets[key] = new Wallet({ createAccessKeyFor: contractNames[key] })
}

const mapGuestBook = new MapGuestBook({ contractId: contractNames['map'], walletToUse: wallets['map'] });
const noteGuestBook = new NoteGuestBook({ contractId: contractNames['note'], walletToUse: wallets['note'] });

// Setup on page load
window.onload = async () => {

  let isSignedIn = true;

  for (const key of contractKeys) {
    isSignedIn = isSignedIn && await wallets[key].startUp();
  }
 
  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <App isSignedIn={isSignedIn} mapGuestBook={mapGuestBook} mapWallet={wallets['map']} noteGuestBook={noteGuestBook} noteWallet={wallets['note']} />
  );

}