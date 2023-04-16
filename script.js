const correctPassPhrase = 'rylee';

function checkPassPhrase() {
    const inputText = document.getElementById('input-text').value;
    const inputPassPhrase = document.getElementById('input-passphrase').value;

    if (inputPassPhrase === correctPassPhrase) {
        document.getElementById('main-text').innerText = inputText;
    } else {
        alert('Incorrect pass phrase. Please try again.');
    }

    // Reset the form input fields
    document.getElementById('phrase-form').reset();

    // Prevent page refresh on form submission
    return false;
}
