import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";
const  useSignUp =  () => {
  const [loading, setLoading] = useState(false);
  
  const { setAuthUser } = useAuthContext();

  const signup = async ({ fullName, username, password, gender }) => {
    const success = handleInputErrors({ fullName, username, password,  gender });
    if (!success) return;


    setLoading(true);
		try {
      const res = await fetch("/api/auth/signup",{
        method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ fullName:fullName, userName:username, pwd:password, gender:gender }),
      })

      const data = await res.json();
      if (data.error) {
				throw new Error(data.error);
			}
      console.log(data);

      // local storage
      localStorage.setItem("chat-user", JSON.stringify(data));

      setAuthUser(data);
      



    } catch(error){
      toast.error(error.message);
    }finally {
			setLoading(false);
		}

  }


  return { loading, signup };
}

export default useSignUp;

function handleInputErrors({ fullName, username, password, gender }) {

  if (!fullName || !username || !password  || !gender) {
    toast.error("Please fill up all the details Asap!")

    return false;
  }

  if (password.length < 8) {
    toast.error("Password should has atleast 8 characters or more")
    return false;
  }

  return true;
}

