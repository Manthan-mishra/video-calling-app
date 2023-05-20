import React,{useEffect} from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../app/slices/AuthSlice";
import { firebaseAuth } from "../utils/FirebaseConfig";

const useAuth = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {            
          if (!currentUser) navigate("/login");
          else {
            dispatch(
              setUser({
                uid: currentUser.uid,
                email: currentUser.email!,
                name: currentUser.displayName!,
              })
            );
          }
        });
        return () => unsubscribe();
      }, [dispatch, navigate]);


    }

    export default useAuth;