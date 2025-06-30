import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from './firebase'; // your firebase.js default export

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const token = await result.user.getIdToken();
    return { token, email: result.user.email, name: result.user.displayName };
  } catch (error) {
    console.error('Firebase Sign-In Error:', error);
    return { error };
  }
};
