exports.helloWorld = (req, res) => {
  const message = "<font color='blue'>CloudFunctions build on GCP!</font><br><b>App Version latest</b>";
  res.status(200).send(message);
}