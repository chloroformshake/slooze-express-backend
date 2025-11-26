// api/index.js
let jsonData = [
    { id: "1", name: "Quantum Rice", category: "Grains", quantity: 8.0, price: 89 },
    { id: "2", name: "Neon CBD Oil", category: "Liquids", quantity: 120.0, price: 3 },
    { id: "3", name: "Cyber Beans", category: "Legumes", quantity: 45.0, price: 67 },
    { id: "4", name: "Plasma Salt", category: "Seasoning", quantity: 159.0, price: 1 },
    { id: "26b3", name: "Tron Test", category: "Experimental", quantity: 4.2, price: 69 }
];

export default function handler(req, res) {
    // CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*"); // replace * with your frontend domain for security
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // Handle preflight
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    if (req.method === "GET") {
        return res.status(200).json(jsonData);
    }

    if (req.method === "POST") {
        const newItem = { id: Date.now().toString(), ...req.body };
        jsonData.push(newItem);
        return res.status(201).json({ message: "Product added", data: newItem });
    }

    res.setHeader("Allow", ["GET", "POST", "OPTIONS"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
}
