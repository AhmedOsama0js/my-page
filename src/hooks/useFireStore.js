// import { useEffect, useState } from "react";
// import { db } from "../dist/data/firebase";

// const useFireStore = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     console.log(db);
//     const unsubscribe = db.collection("items").onSnapshot((snapshot) => {
//       const fetched = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setItems(fetched);
//     });

//     return () => unsubscribe();
//   }, []);

//   return { items };
// };

// export default useFireStore;
