// Importar la biblioteca de Firebase
import firebase from "firebase/app";
import "firebase/firestore";

// Configurar la conexión a Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBt1JKoEVkSwNSCZeKrbhGjBEef1unbSlI",
    authDomain: "tkbrep-fdb86.firebaseapp.com",
    projectId: "tkbrep-fdb86",
    storageBucket: "tkbrep-fdb86.appspot.com",
    messagingSenderId: "264699245389",
    appId: "1:264699245389:web:3cdfc7aee40d811a3f3d04"
};

// Inicializar la aplicación de Firebase
firebase.initializeApp(firebaseConfig);

// Obtener referencia a la colección "canciones"
const cancionesRef = firebase.firestore().collection("canciones");

// Leer datos de la colección "canciones" y mostrarlos en pantalla
cancionesRef.get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    const cancion = doc.data();
    // Mostrar los datos de la canción en tu página web como desees
  });
});
