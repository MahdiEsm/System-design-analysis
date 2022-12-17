export default function handler(req, res) {
  const requestMethod = req.method;
  const body = req.body && JSON.parse(req.body);
  switch (requestMethod) {
    case "POST":
      res
        .status(200)
        .json({ message: `You deleted the order with this id: ${body?.id}` });

    default:
      res.status(200).json({
        message: "Please Remove Order With Post Message",
      });
  }
}
