import { useEffect, useState } from "react";
import { fireauth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

const useSignup = () => {
  const [error, setError] = useState();
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  const [isCancelled, setIsCanclled] = useState(false);

  const Signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    useEffect(() => {
      return () => setIsCanclled(true);
    }, []);

    try {
      // 이메일,패스워드로 가입
      const res = await fireauth.createUserWithEmailAndPassword(email, password);
      console.log(res.user);

      if (!res) {
        throw new Error("가입중 오류가 발생했습니다.");
      }
      // 유저 프로파일에 이름을 업데이트
      await res.user.updateProfile({ displayName: displayName });

      dispatch({ type: 'LOGIN', payload: res.user })

      setError(null);
      setIsPending(false);

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }

    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };
  return { Signup, error, isPending };
};

export default useSignup;
