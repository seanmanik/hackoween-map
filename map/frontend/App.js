import 'regenerator-runtime/runtime';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Upvote from './pages/Upvote';
import Redeem from './pages/Redeem';
import SendNote from './pages/SendNote';

const App = ({ isSignedIn, mapGuestBook, mapWallet, noteGuestBook, noteWallet }) => {

  return (
    <Router>

      <ul>
        <li>
          <Link to="/upvote">Upvote</Link>
        </li>
        <li>
          <Link to="/redeem">Redeem</Link>
        </li>
        <li>
          <Link to="/send_note">Send Note</Link>
        </li>
      </ul>

      <Route path="/upvote">
        <Upvote noteGuestBook={noteGuestBook} noteWallet={noteWallet} />
      </Route>
      <Route path="/redeem">
        <Redeem mapGuestBook={mapGuestBook} mapWallet={mapWallet} />
      </Route>
      <Route path="/send_note">
        <SendNote noteGuestBook={noteGuestBook} noteWallet={noteWallet} />
      </Route>

    </Router>
  )

};

// const App = ({ isSignedIn, guestBook, wallet }) => {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     guestBook.getMessages().then(setMessages);
//   }, []);

//   onSubmit = async (e) => {
//     e.preventDefault();

//     const { fieldset, message, donation } = e.target.elements;

//     fieldset.disabled = true;

//     await guestBook.addMessage(message.value, donation.value)
//     const messages = await guestBook.getMessages()

//     setMessages(messages);
//     message.value = '';
//     donation.value = '0';
//     fieldset.disabled = false;
//     message.focus();
//   };

//   const signIn = () => { wallet.signIn() }

//   const signOut = () => { wallet.signOut() }

//   return (
//     <main>
//       <table>
//         <tr>
//           <td><h1>📖 NEAR Guest Book</h1></td>
//           <td>{ isSignedIn
//           ? <button onClick={signOut}>Log out</button>
//           : <button onClick={signIn}>Log in</button>
//         }</td>
//         </tr>
//       </table>

//       <hr />
//       { isSignedIn
//         ? <Form onSubmit={onSubmit} currentAccountId={wallet.accountId} />
//         : <SignIn/>
//       }

//       <hr />

//       { !!messages.length && <Messages messages={messages}/> }

//     </main>
//   );
// };

export default App;