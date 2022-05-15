import imagenes from "../../imagenes/imagenes";

const productos = [{
        id: "01",
        name: "RG God Gundam",
        price: 300,
        image: imagenes.imagen3,
        stock: 2,
        categoria: 'maquetas'
    },
    {
        id: "02",
        name: "MG Unicorn Extreme",
        price: 350,
        image: imagenes.imagen1,
        stock: 4,
        categoria: 'maquetas'
    },
    {
        id: "03",
        name: "PG MK II Titans",
        price: 400,
        image: imagenes.imagen2,
        stock: 5,
        categoria: 'maquetas'
    },
    {
        id: "04",
        name: "Vallejo Black",
        price: 300,
        image: imagenes.imagen4,
        stock: 3,
        categoria: 'pinturas'
    },
    {
        id: "05",
        name: "Vallejo White",
        price: 300,
        image: imagenes.imagen5,
        stock: 5,
        categoria: 'pinturas'
    },
    {
        id: "06",
        name: "Vallejo Metal",
        price: 300,
        image: imagenes.imagen6,
        stock: 6,
        categoria: 'pinturas'
    }

];

export const getFetch = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const query = id ? productos.find(products => products.id === id) : productos
            resolve(query)
        }, 2000)
    })
}