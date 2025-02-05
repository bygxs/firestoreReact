import React, { useState } from 'react';
import { firestore } from './firebaseConfig'; // Import Firestore instance
import { addDoc, collection, getDocs } from "firebase/firestore";

function App() {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [storedValues, setStoredValues] = useState([]);

  const saveDataToFirestore = async () => {
    try {
      await addDoc(collection(firestore, "myCollection"), { // Use the Firestore instance here
        field1: inputValue1,
        field2: inputValue2,
      });
      alert("Document written to Database");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const fetchDataFromFirestore = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, "myCollection")); // Use the Firestore instance here
      const temporaryArr = [];
      querySnapshot.forEach((doc) => {
        temporaryArr.push(doc.data());
      });
      setStoredValues(temporaryArr);
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  };

  return (
    <div className="App">
      <h1>Save Data to Firebase Firestore</h1>
      <input
        type="text"
        value={inputValue1}
        onChange={(e) => setInputValue1(e.target.value)}
      />
      <input
        type="text"
        value={inputValue2}
        onChange={(e) => setInputValue2(e.target.value)}
      />
      <button onClick={saveDataToFirestore}>Save to Firestore</button> <br/><br/>

      <button onClick={fetchDataFromFirestore}>Fetch from Firestore</button> <br/><br/>

      <div>
        {storedValues.map((item, index) => (
          <div key={index}>
            <p>{item.field1}: {item.field2}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
