exports.helloWorld = (req, res) => {
  const message = "<font color='blue'>CloudFunctions build on GCP!</font><br><b>App Version 1.0</b>";
  res.status(200).send(message);
}