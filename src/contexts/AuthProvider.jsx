import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Create user with async/await
  const createUser = async (email, password) => {
    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      return userCredential.user;
    } catch (error) {
      console.error("Error creating user:", error.code, error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // ✅ Update user profile (proper object destructuring)
  const updateUserProfile = async (updatedInfo) => {
    try {
      setLoading(true);
      await updateProfile(auth.currentUser, updatedInfo);
    } catch (error) {
      console.error("Error updating profile:", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signInUser = async (email, password) => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error signing in:", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, provider);
      return result.user;
    } catch (error) {
      console.error("Error with Google Sign-In:", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  });

  const AuthInfo = {
    createUser,
    updateUserProfile,
    signInUser,
    signInWithGoogle,
    user,
    setUser,
    loading,
    setLoading,
    signOutUser,
  };

  return <AuthContext value={AuthInfo}>{children}</AuthContext>;
};

export default AuthProvider;
