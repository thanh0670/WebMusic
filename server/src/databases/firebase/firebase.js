import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBNG27FyOI-FjfcAr3oJ58IHF6HUvkR2IQ",
    authDomain: "webmusic-9fda0.firebaseapp.com",
    projectId: "webmusic-9fda0",
    storageBucket: "webmusic-9fda0.firebasestorage.app",
    messagingSenderId: "77049852957",
    appId: "1:77049852957:web:317ac29e47d52d549782f4",
    measurementId: "G-8X1YP7J9LM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const uploadToFirebase = async (filePath) => {
    const fileBuffer = fs.readFileSync(filePath);
    const fileName = path.basename(filePath);
    const storageRef = ref(storage, `audio/${fileName}`);

    const snapshot = await uploadBytes(storageRef, fileBuffer);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
};

