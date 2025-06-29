import jwt from "jsonwebtoken";

// user authentication middleware
const authUser = (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.json({ success: false, message: "No token. Please log in again." });
    }

    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    req.user = { _id: token_decode.id }; //  Proper key naming for consistency

    next();
  } catch (error) {
    console.error("Error in authUser middleware:", error);
    return res.json({ success: false, message: "Internal server error" });
  }
};

export default authUser;
