const logoutUser = (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    res.status(200).json({
      success: true,
      message: "Logout successfully!",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Server error.",
    });
  }
};

export default logoutUser;
