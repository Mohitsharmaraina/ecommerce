const loginUser = async (req, res) => {};

const registerUser = async (req, res) => {
  return res.json({ sucess: true, msg: "user registered" });
};

const adminLogin = async (req, res) => {};

export { loginUser, registerUser, adminLogin };
