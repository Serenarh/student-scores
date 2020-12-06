import db from "./db";

export default {
  async index() {
    // https://firebase.google.com/docs/firestore/query-data/get-data
    const querySnapshot = await db.collection("students").get();

    // https://firebase.google.com/docs/reference/js/firebase.firestore.QuerySnapshot?authuser=0#docs
    // docs property essentially turns query snapshot into an array
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },

  // More generically, the PARAMETER might be called 'payload'
  async create(student) {
    // https://firebase.google.com/docs/firestore/manage-data/add-data
    db.collection("students").add(student);
  },
};
