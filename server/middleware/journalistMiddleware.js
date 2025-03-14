exports.isAuthenticated = (req, res, next) => {
    // TEMPORARY: Skip authentication for testing
    req.user = { _id: "67d2a632a751e71b8ce9041b", role: "journalist" }; 
    next();
  };
  
  exports.isJournalist = (req, res, next) => {
    if (req.user.role !== "journalist") {
      return res.status(403).json({ message: "Access denied. Journalists only." });
    }
    next();
  };