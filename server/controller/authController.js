import bcrypt from "bcryptjs"; // use bcryptjs for easier setup
import generateToken from "../utils/GenerateToken.js";

const users = [];

// Signup controller
export const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExist = users.find(u => u.email === email);
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = { id: users.length + 1, email, password: hashPassword };
    users.push(newUser);

    const token = generateToken(newUser.id);
    res.status(201).json({ message: "User created successfully", token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Login controller
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = users.find(u => u.email === email);
    if (!user) {
      return res.status(404).json({ message: "Invalid credentials" });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user.id);
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
