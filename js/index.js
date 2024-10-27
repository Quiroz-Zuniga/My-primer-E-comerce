const productos = [
    // Objetos de abrigos
    {
    id: "abrigo-1",
    titulo:"Abrigo 01",
    imagen: "./img/abrigo-1.jpg",
    categoria: {
        nombre:"abrigos",
        id:"abrigos"
    },
    precio:100,
    },
    {
    id: "abrigo-2",
    titulo:"Abrigo 02",
    imagen: "./img/abrigo-2.jpg",
    categoria: {
        nombre:"abrigos",
        id:"abrigos"
    },
    precio:100,
    },
    {
    id: "abrigo-3",
    titulo:"Abrigo 03",
    imagen: "./img/abrigo-3.jpg",
    categoria: {
        nombre:"abrigos",
        id:"abrigos"
    },
    precio:100,
    },
    {
    id: "abrigo-4",
    titulo:"Abrigo 04",
    imagen: "./img/abrigo-4.jpg",
    categoria: {
        nombre:"abrigos",
        id:"abrigos"
    },
    precio:100,
    },
    // objetos para camisas
    {
        id: "camisa-01",
        titulo:"Camisa 01",
        imagen: "./img/camisas-01.jpg",
        categoria: {
            nombre:"camisas",
            id:"camisas"
        },
        precio:100,
    },
    {
        id: "camisa-02",
        titulo:"Camisa 02",
        imagen: "./img/camisas-02.jpg",
        categoria: {
            nombre:"camisas",
            id:"camisas"
        },
        precio:100,
    },
    {
        id: "camisa-03",
        titulo:"Camisa 04",
        imagen: "./img/camisas-03.jpg",
        categoria: {
            nombre:"camisas",
            id:"camisas"
        },
        precio:100,
    },
    {
        id: "camisa-04",
        titulo:"Camisa 04",
        imagen: "./img/camisas-04.jpg",
        categoria: {
            nombre:"camisas",
            id:"camisas"
        },
        precio:100,
    },
    // objeto para pantalones
    {
        id: "pantalon-01",
        titulo:"Pantalon 01",
        imagen: "./img/pantalon-01.jpg",
        categoria: {
            nombre:"pantalones",
            id:"pantalones"
        },
        precio:100,
    },
    {
        id: "pantalon-02",
        titulo:"Pantalon 02",
        imagen: "./img/pantalon-02.jpg",
        categoria: {
            nombre:"pantalones",
            id:"pantalones"
        },
        precio:100,
    },
    {
        id: "pantalon-03",
        titulo:"Pantalon 03",
        imagen: "./img/pantalon-03.jpg",
        categoria: {
            nombre:"pantalones",
            id:"pantalones"
        },
        precio:100,
    },
    {
        id: "pantalon-04",
        titulo:"Pantalon 04",
        imagen: "./img/pantalon-04.jpg",
        categoria: {
            nombre:"pantalones",
            id:"pantalones"
        },
        precio:100,
    },
];

const contenedorProductos = document.querySelector("#contenedor-producto");

function cargarProductos() {
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("productos");
        div.innerHTML = `
        <img src="${producto.imagen}" class="producto-imagen" alt="${producto.imagen}">
        <div class="productos-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio"> ${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
      `
      contenedorProductos.append(div);
    })  
};

cargarProductos();