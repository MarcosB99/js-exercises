const pantry = [
    { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
    { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
    "A10|Tomatoes|5|2027-01-01",
    "B21|Bananas|10|2027-01-01",
    "C32|Eggs|3|2027-01-01|fridge",
    "C32|Eggs|3|2027-01-01",
    "D43|Pineapples|0|2027-01-01",
    "E54|Peppers|-1|2027-01-01|fridge"
];

function parseShipment(rawData) {
    const parsedItems = [];
    const seenSkus = [];

    for (let i = 0; i < rawData.length; i++) {
        const rawString = rawData[i];
        const parts = rawString.split("|");
        const sku = parts[0].trim();
        if (seenSkus.includes(sku)) {
            continue;
        }
        const name = parts[1].trim();
        const qty = parseInt(parts[2].trim());
        const expires = parts[3].trim();
        const zone = parts[4];
        seenSkus.push(sku);
        parsedItems.push({ sku: sku, name: name, qty: qty, expires: expires, zone: zone ? zone.trim() : "general" });
    }

    return parsedItems;
}

function planRestock(pantry, shipment) {
    const actions = [];
    for (let i = 0; i < shipment.length; i++) {
        const item = shipment[i];
        if (item.qty <= 0) {
            actions.push({ type: "discard", item: item });
            continue;
        } else {
            const pantryItem = pantry.find(p => p.sku === item.sku);
            if (pantryItem) {
                actions.push({ type: "restock", item: item });
            } else {
                actions.push({ type: "donate", item: item });
            }
        }
    }

    return actions;
}

function groupByZone(actions) {
    const grouped = {};
    for (let i = 0; i < actions.length; i++) {
        const action = actions[i];
        const zone = action.item.zone;
        if (!grouped[zone]) {
            grouped[zone] = [];
        }
        grouped[zone].push(action);
    }
    return grouped;
}

function clonePantry(pantry) {
    const cloned = [];
    for (let i = 0; i < pantry.length; i++) {
        const item = pantry[i];
        cloned.push({ sku: item.sku, name: item.name, qty: item.qty, expires: item.expires, zone: item.zone });
    }
    return cloned;
}

const cleanShipment = parseShipment(rawData);
const safePantry = clonePantry(pantry);
const actions = planRestock(safePantry, cleanShipment);
const finalResult = groupByZone(actions);

console.log(finalResult);