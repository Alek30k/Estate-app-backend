export const register = (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
