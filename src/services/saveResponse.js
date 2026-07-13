import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export async function saveResponse(data) {
  const docRef = await addDoc(collection(db, "responses"), {
    ...data,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}
