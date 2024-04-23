import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  // const token = req.cookies?.token;

  // console.log(token);

  // if (!token) return res.status(401).json({ message: "Not Authenticated!" });

  jwt.verify(token, "Q3k5EuDm3EnrVFb", async (err, payload) => {
    // if (err) {
    //   console.error("Error verifying token:", err);
    //   return res.status(403).json({ message: "Token is not Valid!" });
    // }
    req.userId = payload.id;

    next();
  });
};
