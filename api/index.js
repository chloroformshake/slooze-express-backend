export default function handler(req, res) {
    // Set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*"); // or your frontend domain
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // Handle preflight OPTIONS request
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    const toonData = [
        { id: "1", name: "Quantum Rice", category: "Grains", quantity: 8.0, price: 89 },
        { id: "2", name: "Neon CBD Oil", category: "Liquids", quantity: 120.0, price: 3 },
        { id: "3", name: "Cyber Beans", category: "Legumes", quantity: 45.0, price: 67 },
        { id: "4", name: "Plasma Salt", category: "Seasoning", quantity: 159.0, price: 1 },
        { id: "26b3", name: "Tron Test", category: "Experimental", quantity: 4.2, price: 69 }
    ];

    if (req.method === "GET") {
        res.status(200).json(toonData);
    } else if (req.method === "POST") {
        res.status(201).json({ message: "Product added", data: req.body });
    } else {
        res.setHeader("Allow", ["GET", "POST", "OPTIONS"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
