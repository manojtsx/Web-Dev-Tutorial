import React from "react";
import app from "./init";
import { getFirestore, collection, doc, getDocs, addDoc, deleteDoc } from "firebase/firestore";

const App = () => {
  const db = getFirestore();
  const colRef = collection(db, "books");
  getDocs(colRef)
    .then((snapshot) => {
      console.table(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    })
    .catch((err) => {
      console.error(err.message);
    });

  const [user, setUser] = React.useState({
    id: "",
    first_name: " ",
    middle_name: " ",
    last_name: "",
  });

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(user);

    addDoc(docRef)
      .then(() => {
        console.log("Document written with ID:");
      })
      .catch((err) => console.error(err.message));
  };

  const handleDelete = () => {
    const docRef = doc(colRef, user.id);
    deleteDoc(docRef)
      .then(() => {
        console.log("Document deleted");
      })
      .catch((err) => console.error(err.message))
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="first_name"
        value={user.first_name}
        onChange={onChange}
      />
      <input
        type="text"
        name="second_name"
        value={user.second_name}
        onChange={onChange}
      />
      <input
        type="text"
        name="last_name"
        value={user.last_name}
        onChange={onChange}
      />
      <button type="submit" value="submit">
        Submit
      </button>
      <input type="text" name="id" value={user.id} onChange={onChange} />
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </form>
  );
};

export default App;
