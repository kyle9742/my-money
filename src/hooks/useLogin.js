import { useEffect, useState } from "react";
import { fireauth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

const useLogin = () => {
  const [error, setError] = useState();
  const [isPending, setIsPending] = useState();
  const [isCancelled, setIsCancelled] = useState(false);
  const { dispatch } = useAuthContext();

  useEffect(() => {
    setIsCancelled(false);
    return () => setIsCancelled(true);
  }, []);

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    if (!isCancelled) {
      setIsPending(false);
      setError(null);
    }
    try {
      const res = await fireauth.signInWithEmailAndPassword(email, password);

      dispatch({ type: "LOGIN", payload: res.user });
    } catch {
      if (!isCancelled) {
        console.log(error.message);
        setError(error.message);
        setIsPending(false);
      }
    }
  };
  return { login, error, isPending };
};

export default useLogin;
