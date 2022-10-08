import { db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  // updateProfil,
  // onAuthStateChanged,
  signInWithEmailAndPassword,
  // signOut,
} from "firebase/auth";

export const loginUser = async (formValues) => {
  const auth = getAuth();
  try {
    const response = await signInWithEmailAndPassword(
      auth,
      formValues.email,
      formValues.password
    );
    const userid = response.user.uid;
    return userid;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (formValues) => {
  const auth = getAuth();
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      formValues.email,
      formValues.password
    );
    const userid = response.user.uid;
    const data = {
      email: formValues.email,
      userid: userid,
      country: formValues.country,
      language: formValues.language,
      contact: formValues.contact,
      fullName: formValues.fullName,
    };
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
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
