export default function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*"); // or your frontend domain
    res.setHeader("Access-Control-Allow-Methods", "PUT,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    const { id } = req.query;

    if (req.method === "PUT") {
        res.status(200).json({ message: `Product ${id} updated`, data: req.body });
    } else if (req.method === "DELETE") {
        res.status(200).json({ message: `Product ${id} deleted` });
    } else {
        res.setHeader("Allow", ["PUT", "DELETE", "OPTIONS"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
