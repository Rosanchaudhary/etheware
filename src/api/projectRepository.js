import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import uuid from "react-uuid";
import { getAuth } from "firebase/auth";

async function uploadTaskPromise(imageAsFile) {
  return new Promise(function (resolve, reject) {
    const storageRef = ref(storage, `/images/${imageAsFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageAsFile);
    uploadTask.on(
      "state_changed",
      function (snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      function error(err) {
        console.log("error", err);
        reject();
      },
      function complete() {
        getDownloadURL(uploadTask.snapshot.ref).then(function (downloadURL) {
          resolve(downloadURL);
        });
      }
    );
  });
}

export const uploadPhoto = async (imageAsFile) => {
  try {
    const storageUrl = await uploadTaskPromise(imageAsFile);

    return storageUrl;
  } catch (error) {
    console.log(error);
  }
};

export const addProjectToServer = async (data) => {
  const auth = getAuth();
  try {
    await setDoc(
      doc(db, "users", auth.currentUser.uid, "projects", uuid()),
      data
    );
  } catch (error) {
    console.log(error);
  }
};
