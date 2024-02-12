const db = require("../model/db");
const User = db.user;

require("dotenv").config();

const profileupdate = async (req, res) => {
  const { name, email } = req.body;
  if (JSON.stringify(req.body) === "{}") {
    res.status(400).json({ Message: "Please Enter name and email" });
  } else if (!name || !email) {
    res.status(400).json({ Message: "Please enter all the details" });
  } else {
    const user_id = parseInt(req.params.id);
    const user = await User.update(
      { name: name, email: email },
      {
        where: {
          id: user_id,
        },
      }
    );
    res.status(200).json({
      message: `Profile Updated `,
    });
  }
};

module.exports = { profileupdate };
