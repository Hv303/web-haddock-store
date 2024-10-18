const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Model pengguna

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Cek apakah email sudah ada di database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email sudah terdaftar." });
    }

    // Buat pengguna baru
    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: "Pendaftaran berhasil." });
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan, coba lagi." });
  }
});

module.exports = router;
