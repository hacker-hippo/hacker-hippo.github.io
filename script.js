import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const correctPassPhrase = 'rylee';

const firebaseConfig = {
  apiKey: "AIzaSyDY6wdUvL50VGw4B7FfDVIDITSfQWOgBeM",
  authDomain: "githubpages-21eff.firebaseapp.com",
  projectId: "githubpages-21eff",
  storageBucket: "githubpages-21eff.appspot.com",
  messagingSenderId: "1056284598072",
  appId: "1:1056284598072:web:79673a81805cd181056bcd",
  measurementId: "G-VLBD0L9SBW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref();

function checkPassPhrase() {
  const inputText = document.getElementById('input-text').value;
  const inputPassPhrase = document.getElementById('input-passphrase').value;

  if (inputPassPhrase === correctPassPhrase) {
    dbRef.update({ mainText: inputText });
  } else {
    alert('Incorrect pass phrase. Please try again.');
  }

  // Reset the form input fields
  document.getElementById('phrase-form').reset();

  // Prevent page refresh on form submission
  return false;
}

// Initialize a listener for changes in the mainText value in the database
dbRef.child('mainText').on('value', (snapshot) => {
  const mainText = snapshot.val();
  if (mainText) {
    document.getElementById('main-text').innerText = mainText;
  }
});
