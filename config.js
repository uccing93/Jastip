// ═══════════════════════════════════════════════════════
//  config.js — Konfigurasi Firebase
//  ⚠️  FILE INI SENSITIF — jangan dibagikan / di-commit ke Git
//  Letakkan di folder yang sama dengan index.html
// ═══════════════════════════════════════════════════════

const firebaseConfig = {
  apiKey           : "AIzaSyCcRn0ymQzAUz-nvXiT8jKfgyUkXnNXHJU",
  authDomain       : "jastip-selayar-jampea.firebaseapp.com",
  projectId        : "jastip-selayar-jampea",
  storageBucket    : "jastip-selayar-jampea.firebasestorage.app",
  messagingSenderId: "676344445403",
  appId            : "1:676344445403:web:b8cd7593a05deaa7624ffe"
};

firebase.initializeApp(firebaseConfig);

const db          = firebase.firestore();
const ORDERS      = db.collection('orders');
const USERS       = db.collection('users');
const SETTINGS    = db.collection('settings');
const STAF        = db.collection('staf');
const PENGELUARAN = db.collection('pengeluaran');
