const logTimeUrl = (req, res, next) => {
  if (req.url !== `/favicon.ico`) {
    const date = new Date(Date.now());
    console.log(`Time: ${date.toLocaleTimeString("en-US")} - Serving request ${req.method} at ${req.url}`);
  }
  next()
}


const setHeaders = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', 'true');
  if ('OPTIONS' === req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
};

module.exports = {
  logTimeUrl,
  setHeaders
}
