const correctPassPhrase = 'rylee';

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
