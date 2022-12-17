export default function handler(req, res) {
  const requestMethod = req.method;
  const body = req.body && JSON.parse(req.body);
  switch (requestMethod) {
    case "POST":
      res
        .status(200)
        .json({ message: `Following product: ${body} added successfully!` });

    default:
      res.status(200).json({
        message: "Please Add Product With Post Message",
      });
  }
}
