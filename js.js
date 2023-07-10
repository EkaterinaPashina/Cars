const data = [{
        id: 1,
        type: 'car',
        brand: 'Audi',
        doors: 4,
        price: 4300000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
        id: 2,
        type: 'car',
        brand: 'Mercedes-Benz',
        doors: 4,
        price: 2800000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
    {
        id: 3,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 210,
        price: 1300000,
        image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
        id: 4,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 220,
        price: 1400000,
        image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];

class Transport {
    constructor(id, type, brand, price, image) {
        this.id = id;
        this.type = type;
        this.brand = brand;
        this.price = price;
        this.image = image;
    }

    getInfo() {
        return {
            type: this.type,
            brand: this.brand,
            price: this.price,
        }
    }

    getPrice() {
        return this.price;
    }
}

class Car extends Transport {
    constructor(id, type, brand, doors, price, image) {
        super(id, type, brand, price, image);
        this.doors = doors;
    }

    getDoorsCount() {
        return this.doors;
    }
}

class Bike extends Transport {
    constructor(id, type, brand, maxSpeed, price, image) {
        super(id, type, brand, price, image);
        this.maxSpeed = maxSpeed;
    }
    getMaxSpeed() {
        return this.maxSpeed;
    }
}

const id1 = new Car(1, "car", "Audi", 4, 4300000, 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg');

console.log(id1);

const id2 = new Car(2, "car", "Mercedes-Benz", 4, 2800000, 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg');

console.log(id2);

const id3 = new Bike(3, "bike", "Harley-Davidson", 210, 1300000, 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg');

console.log(id3);

const id4 = new Bike(4, "bike", "Harley-Davidson", 220, 1400000, 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png')

console.log(id4);

let transports = [id1, id2, id3, id4];
console.log(transports);

for (trans of transports) {
    parent = document.getElementById(`id${trans.id}`);
    if (trans.type === "car") {
        parent.innerHTML = `<h2>${trans.brand}</h2><img src = ${trans.image} /><p>Количество дверей: ${trans.doors}</p><p>${trans.price}р</p>`;
    }
    if (trans.type === "bike") {
        parent.innerHTML = `<h2>${trans.brand}</h2><img src = ${trans.image} /><p>Максимальная скорость: ${trans.maxSpeed}км/ч</p><p>${trans.price}р</p>`;
    }
};