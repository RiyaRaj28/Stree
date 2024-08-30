const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Backend Error";
  const extraDetails = err[0] || "Error from the Backend";
  console.log(err);

  console.error(
    `[${req.method}]  ${req.path} >> StatusCode:: ${status}, Message:: ${extraDetails} `
  );

  return res.status(status).json({ message, extraDetails });
};

module.exports = errorMiddleware;