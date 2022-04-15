import { db, auth } from '../config';
import {
    getDocs,
    doc,
    setDoc,
    addDoc,
    deleteDoc,
    collection,
    query,
    where,
    onSnapshot,
} from "firebase/firestore";

async function getmessage() {
    const messageCol = collection(db, "chats1");
    const messageSnapshot = await getDocs(messageCol);
    const messageList = messageSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
    });
    return messageList;
}

async function addmessage(message) {
    try {
        const docRef = await addDoc(collection(db, "chats1"), message);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

async function editmessage(message) {
    if (message.user == auth.currentUser.email) {
        console.log("at editmessage", message);
        await setDoc(doc(db, "chats1", message.id), message);
    } else {
        alert(' modification it is not allowed');
    }
}


async function deletemessage(message) {

    try {
        if (message.user == auth.currentUser.email) {
            await deleteDoc(doc(db, "chats1", message.id));
            console.log("Document deleted with ID: ", message.id);
        } else {
            alert(' modification it is not allowed');
        }
    } catch (error) {
        console.error("Error deleting document: ", error);
    }
}

function subscribe(callback) {
    const unsubscribe = onSnapshot(
        query(collection(db, "chats1")),
        (snapshot) => {
            const source = snapshot.metadata.hasPendingWrites ? "Local" : "Server";
            snapshot.docChanges().forEach((change) => {
                // console.log("changes", change, snapshot.metadata);
                if (callback) callback({ change, snapshot });
            });
            // console.log(source, " data: ", snapshot.data());
        }
    );
    return unsubscribe;
}


export { getmessage, addmessage, subscribe, deletemessage, editmessage };

