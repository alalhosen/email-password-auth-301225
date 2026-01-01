const Register = () => {
  return (
    <div>
      <div className="mx-auto">
        <h2 className="text 3xl underline">Please Register</h2>
        <form>
          <input
            className="mb-2"
            placeholder="email"
            type="email"
            name="email"
            id=""
          />
          <br />
          <input placeholder="password" type="password" name="password" id="" />
          <br />
          <input type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
};

export default Register;
