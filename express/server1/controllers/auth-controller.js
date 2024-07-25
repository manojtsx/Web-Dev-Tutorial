function apiHome(req, res) {
  res.status(200).json({ msg: "Home of api route" });
}

function login(req, res) {
    const {username, password} = req.body;
  res.status(200).json({ msg: "Login of api route" , username, password});
}

function register(req, res) {
    const userId = req.params.id;
  res.status(200).json({ msg: "Register of api route" , userId});
}

module.exports = { apiHome, login, register };
