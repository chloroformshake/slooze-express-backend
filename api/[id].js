// api/[id].js

let jsonData = [
    { id: "1", name: "Quantum Rice", category: "Grains", quantity: 8.0, price: 89 },
    { id: "2", name: "Neon CBD Oil", category: "Liquids", quantity: 120.0, price: 3 },
    { id: "3", name: "Cyber Beans", category: "Legumes", quantity: 45.0, price: 67 },
    { id: "4", name: "Plasma Salt", category: "Seasoning", quantity: 159.0, price: 1 },
    { id: "26b3", name: "Tron Test", category: "Experimental", quantity: 4.2, price: 69 }
];

export default function handler(req, res) {
    // CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*"); // replace * with your frontend domain
    res.setHeader("Access-Control-Allow-Methods", "PUT,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // Handle preflight
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    const { id } = req.query;

    if (req.method === "PUT") {
        const index = jsonData.findIndex(item => item.id === id);
        if (index === -1) {
            return res.status(404).json({ message: "Product not found" });
        }
        jsonData[index] = { ...jsonData[index], ...req.body };
        return res.status(200).json({ message: `Product ${id} updated`, data: jsonData[index] });
    }

    if (req.method === "DELETE") {
        const index = jsonData.findIndex(item => item.id === id);
        if (index === -1) {
            return res.status(404).json({ message: "Product not found" });
        }
        const deleted = jsonData.splice(index, 1);
        return res.status(200).json({ message: `Product ${id} deleted`, data: deleted[0] });
    }

    res.setHeader("Allow", ["PUT", "DELETE", "OPTIONS"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
}
