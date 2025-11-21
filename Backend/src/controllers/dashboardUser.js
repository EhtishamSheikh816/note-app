const dashboardUser = (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access.",
      });
    }

    res.status(200).json({
      success: true,
      message: `Welcome ${req.user.email} to your dashboard!`,
      user: req.user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong.",
      error: error.message,
    });
  }
};

export default dashboardUser;
