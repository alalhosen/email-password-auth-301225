import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted =e.target.terms.checked;
    console.log(email, password , accepted);

    //reset error and Success
    setRegisterError("");
    setSuccess("");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Your password should have at least one upper case.");
      return;
    }
    else if(!accepted){
      setRegisterError('Please accept our terms and conditions!')
      return;
    }

    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("User Created Successfully.");
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };

  return (
    <div>
      <div className="mx-auto md:w-1/2">
        <h2 className="text 3xl underline">Please Register</h2>
        <form onSubmit={handleRegister}>
          <h1>Email</h1>
          <input
            className="mb-2 w-full bg-gray-200 py-2 px-4 rounded-lg"
            placeholder="Email Address"
            type="email"
            name="email"
            required
            id=""
          />
          <br />
          <h1>Password</h1>
          <div className="relative border mb-2">
            <input
              className="w-full bg-gray-200 py-2 px-4 rounded-lg"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              required
              id=""
            />
            <span
              className="absolute top-3 right-5"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <PiEyeSlash></PiEyeSlash>
              ) : (
                <PiEyeLight></PiEyeLight>
              )}
            </span>
          </div>
          <br />
          <div className="mb-2">
            <input type="checkbox" name="terms" id="terms" />
            <label className="ml-2" htmlFor="terms">
              Accept our <a href="">Terms and Condition</a>
            </label>
          </div>
          <br />
          <input
            className="btn btn-secondary w-full"
            type="submit"
            value="Register"
          />
        </form>
        {registerError && (
          <p className="text-red-500 font-semibold">{registerError}</p>
        )}
        {success && <p className="text-green-500 font-semibold">{success}</p>}
        <p>Already have an account? Please <Link className="text-green-500" to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
