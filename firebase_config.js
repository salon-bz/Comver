// firebase-config.js

// --- Configuración de Firebase ---
const firebaseConfig = {
  apiKey: "AIzaSyAcbewB4Orpx4JyaXq141GgUidJbXUrEnY",
  authDomain: "sociosxit-5f841.firebaseapp.com",
  databaseURL: "https://sociosxit-5f841-default-rtdb.firebaseio.com",
  projectId: "sociosxit-5f841",
  storageBucket: "sociosxit-5f841.firebasestorage.app",
  messagingSenderId: "364183519851",
  appId: "1:364183519851:web:52a5a95d2c57f8f9f5e72e"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Exportar instancias de los servicios que se usarán
// Ahora se pueden usar estas variables (db, pubsRef) directamente en el script principal
const db = firebase.database();
const pubsRef = db.ref("publications");
