export default function handler(req, res) {
    const toonData = [
        { id: "1", name: "Quantum Rice", category: "Grains", quantity: 8.0, price: 89 },
        { id: "2", name: "Neon CBD Oil", category: "Liquids", quantity: 120.0, price: 3 },
        { id: "3", name: "Cyber Beans", category: "Legumes", quantity: 45.0, price: 67 },
        { id: "4", name: "Plasma Salt", category: "Seasoning", quantity: 159.0, price: 1 },
        { id: "26b3", name: "Toon Test", category: "Experimental", quantity: 4.2, price: 69 }
    ];

    res.status(200).json(toonData);
}
