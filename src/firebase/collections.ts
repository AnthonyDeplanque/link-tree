import { getDocs, collection, query, where, DocumentSnapshot, addDoc, CollectionReference, DocumentData } from "firebase/firestore";
import { firestore } from "../App";
import { db } from "./firebase-app";

export interface CollectionRetrieved<T> {
  id: string, data: T
}


/**
 * Get a collection by it's name
 * @param collectionName 
 * @returns 
 */
export const getCollection = (collectionName: string) => {
  return getDocs(collection(firestore, collectionName))
    .then((querySnapshot) => {
      const items: { id: string, data: any }[] = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, data: doc.data() })
      });
      return items;
    })
    .catch((error) => {
      console.error('Error getting documents: ', error);
      throw error;
    });
}

/**
 * get an item in a collection by it's variable name and value
 * @param collectionName 
 * @param itemType 
 * @param itemValue 
 * @returns 
 */
export const getItemQuery = (collectionName: string, itemType: string, itemValue: string): Promise<CollectionRetrieved<any> | null> => {
  const c = collection(db, collectionName);
  const q = query(c, where(itemType, "==", itemValue));

  return new Promise<CollectionRetrieved<any> | null>((resolve, reject) => {
    getDocs(q)
      .then((querySnapshot) => {
        let item: CollectionRetrieved<any> | null = null;

        querySnapshot.forEach((snapshot: DocumentSnapshot) => {
          const data = snapshot.data();
          const id = snapshot.id;
          item = { id, data };
        });

        resolve(item);
      })
      .catch((error) => {
        console.error("Error while retrieving data => ", error);
        reject(error);
      });
  });
};

/**
 * add an item to a collection, permits a callback that can return collection and item
 * @param collectionName 
 * @param newItem 
 * @returns 
 */
export const addItemToCollection = (collectionName: string, newItem: any, callback?: (collection?: CollectionReference<DocumentData, DocumentData>, newItem?: any) => any): Promise<void> => {
  const c = collection(db, collectionName);

  return new Promise<void>((resolve, reject) => {
    addDoc(c, newItem)
      .then(() => {
        console.log('New item added successfully!');
        callback && callback(c, newItem);
        resolve();
      })
      .catch((error) => {
        console.error("Error while adding new item:", error);
        reject(error);
      });
  });
};