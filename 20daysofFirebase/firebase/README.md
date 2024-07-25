### Firebase Firestore Integration with React: Detailed Code Structure

This documentation will break down the code into separate modules for adding documents, deleting documents, creating references, and other operations.

#### Prerequisites
- React application setup
- Firebase project created
- Firestore database enabled in the Firebase project

#### Dependencies
Install Firebase SDK:
```bash
npm install firebase
```

### Firebase Initialization (`init.js`)
Initialize Firebase with your configuration details.

```javascript
// init.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);

export default app;
```

### Firestore Configuration (`firestoreConfig.js`)
Set up Firestore with the initialized Firebase app.

```javascript
// firestoreConfig.js
import { getFirestore, collection } from "firebase/firestore";
import app from "./init";

const db = getFirestore(app);
const colRef = collection(db, "books");

export { db, colRef };
```

### Adding a Document (`addDocument.js`)
Function to add a document to the "books" collection.

```javascript
// addDocument.js
import { addDoc } from "firebase/firestore";
import { colRef } from "./firestoreConfig";

const addDocument = async (bookData) => {
  try {
    const docRef = await addDoc(colRef, bookData);
    console.log("Document written with ID:", docRef.id);
  } catch (err) {
    console.error("Error adding document: ", err.message);
  }
};

export default addDocument;
```

### Deleting a Document (`deleteDocument.js`)
Function to delete a document from the "books" collection.

```javascript
// deleteDocument.js
import { doc, deleteDoc } from "firebase/firestore";
import { colRef } from "./firestoreConfig";

const deleteDocument = async (documentId) => {
  try {
    const docRef = doc(colRef, documentId);
    await deleteDoc(docRef);
    console.log("Document deleted");
  } catch (err) {
    console.error("Error deleting document: ", err.message);
  }
};

export default deleteDocument;
```

### Fetching Documents (`fetchDocuments.js`)
Function to fetch all documents from the "books" collection.

```javascript
// fetchDocuments.js
import { getDocs } from "firebase/firestore";
import { colRef } from "./firestoreConfig";

const fetchDocuments = async () => {
  try {
    const snapshot = await getDocs(colRef);
    const documents = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.table(documents);
  } catch (err) {
    console.error("Error fetching documents: ", err.message);
  }
};

export default fetchDocuments;
```

### Main Component (`App.js`)
Integrate all functionalities into the main React component.

```javascript
// App.js
import React, { useState, useEffect } from "react";
import { db, colRef } from "./firestoreConfig";
import fetchDocuments from "./fetchDocuments";
import addDocument from "./addDocument";
import deleteDocument from "./deleteDocument";

const App = () => {
  const [user, setUser] = useState({
    id: "",
    first_name: "",
    middle_name: "",
    last_name: "",
  });

  useEffect(() => {
    fetchDocuments();
  }, []);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookData = {
      first_name: user.first_name,
      middle_name: user.middle_name,
      last_name: user.last_name,
    };
    addDocument(bookData);
    setUser({ id: "", first_name: "", middle_name: "", last_name: "" });
  };

  const handleDelete = () => {
    deleteDocument(user.id);
    setUser({ ...user, id: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="first_name"
        value={user.first_name}
        onChange={onChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="middle_name"
        value={user.middle_name}
        onChange={onChange}
        placeholder="Middle Name"
      />
      <input
        type="text"
        name="last_name"
        value={user.last_name}
        onChange={onChange}
        placeholder="Last Name"
      />
      <button type="submit">Submit</button>
      <input
        type="text"
        name="id"
        value={user.id}
        onChange={onChange}
        placeholder="Document ID for Deletion"
      />
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </form>
  );
};

export default App;
```

### Conclusion
This structure separates concerns into distinct modules, making the codebase easier to manage and extend. You can further enhance it by adding features like form validation, user authentication, or more complex Firestore queries.