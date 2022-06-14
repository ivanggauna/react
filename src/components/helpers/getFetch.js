import images from "../../images/images";

const products = [{
        id: "01",
        name: "RG God Gundam",
        price: 300,
        image: images.imagen3,
        stock: 2,
        category: 'maquetas'
    },
    {
        id: "02",
        name: "MG Unicorn Extreme",
        price: 350,
        image: images.imagen1,
        stock: 4,
        category: 'maquetas'
    },
    {
        id: "03",
        name: "PG MK II Titans",
        price: 400,
        image: images.imagen2,
        stock: 5,
        category: 'maquetas'
    },
    {
        id: "04",
        name: "Vallejo Black",
        price: 300,
        image: images.imagen4,
        stock: 3,
        category: 'pinturas'
    },
    {
        id: "05",
        name: "Vallejo White",
        price: 300,
        image: images.imagen5,
        stock: 5,
        category: 'pinturas'
    },
    {
        id: "06",
        name: "Vallejo Metal",
        price: 300,
        image: images.imagen6,
        stock: 6,
        category: 'pinturas'
    }

];

export const getFetch = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const query = id ? products.find(products => products.id === id) : products
            resolve(query)
        }, 2000)
    })
}