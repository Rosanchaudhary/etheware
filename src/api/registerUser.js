import { db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  // updateProfil,
  // onAuthStateChanged,
  // signInWithEmailAndPassword,
  // signOut,
} from "firebase/auth";

export const registerUser = async (
  email,
  password,
  country,
  language,
  contactNumber,
  fullName
) => {
  const auth = getAuth();
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const userid = response.user.uid;
    return {email, userid, country, language, contactNumber, fullName };
  } catch (error) {
    console.log(error);
  }
};

export const addUserDetail = async (
  email,
  fullName,
  contactNumber,
  country,
  language,
  vision,
  category,
  organizationName
) => {
  try {
    const auth = getAuth();
    console.log(email);
    console.log(fullName);
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      email: email,
      fullName: fullName,
      contactNumber: contactNumber,
      country: country,
      language: language,
      vision: vision,
      category: category,
      organizationName: organizationName,
    });
  } catch (error) {
    console.log(error);
  }
};
