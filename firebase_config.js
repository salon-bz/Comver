// firebase_config.js

const firebaseConfig = {
  apiKey: "AIzaSyAcbewB4Orpx4JyaXq141GgUidJbXUrEnY",
  authDomain: "sociosxit-5f841.firebaseapp.com",
  databaseURL: "https://sociosxit-5f841-default-rtdb.firebaseio.com",
  projectId: "sociosxit-5f841",
  storageBucket: "sociosxit-5f841.firebasestorage.app",
  messagingSenderId: "364183519851",
  appId: "1:364183519851:web:52a5a95d2c57f8f9f5e72e"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Exporta la referencia a la base de datos (Realtime Database) para usarla globalmente
const db = firebase.database();
