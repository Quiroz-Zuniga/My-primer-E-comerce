const productos = [
    // Objetos de blazers
    {
        id: "blazer-1",
        titulo:"Blazer 01",
        imagen: "./img/Blazer/blazer-01.jpg",
        categoria: {
            nombre:"blazer",
            id:"blazer"
        },
        precio:1000,
    },
    {
    id: "blazer-2",
    titulo:"Blazer 02",
    imagen: "./img/Blazer/blazer-02.jpg",
    categoria: {
        nombre:"blazer",
        id:"blazer",
    },
    precio:1000,
    },
    {
        id: "blazer-3",
        titulo:"Blazer 03",
        imagen: "./img/Blazer/blazer-03.jpg",
        categoria: {
            nombre:"blazer",
            id:"blazer"
        },
        precio:1000,
    },
    {
        id: "blazer-4",
        titulo:"Blazer 04",
        imagen: "./img/Blazer/blazer-04.jpg",
        categoria: {
            nombre:"blazer",
            id:"blazer"
        },
        precio:1000,
    },
    {
        id: "blazer-5",
        titulo:"Blazer 05",
        imagen: "./img/Blazer/blazer-05.jpg",
        categoria: {
            nombre:"blazer",
            id:"blazer"
        },
        precio:1000,
    },
    {
        id: "blazer-6",
        titulo:"Blazer 06",
        imagen: "./img/Blazer/blazer-06.jpg",
        categoria: {
            nombre:"blazer",
            id:"blazer"
        },
        precio:1000,
    },
    {
        id: "blazer-7",
        titulo:"Blazer 07",
        imagen: "./img/Blazer/blazer-07.jpg",
        categoria: {
            nombre:"blazer",
            id:"blazer"
        },
        precio:1000,
    },
    {
        id: "blazer-8",
        titulo:"Blazer 08",
        imagen: "./img/Blazer/blazer-08.jpg",
        categoria: {
            nombre:"blazer",
            id:"blazer"
        },
        precio:1000,
    },
    
 
    // objetos para camisas
    {
        id: "camisa-01",
        titulo:"Camisa 01",
        imagen: "./img/Camisas/camisas-01.jpg",
        categoria: {
            nombre:"camisas",
            id:"camisas"
        },
        precio:100,
    },
    {
        id: "camisa-02",
        titulo:"Camisa 02",
        imagen: "./img/Camisas/camisas-02.jpg",
        categoria: {
            nombre:"camisas",
            id:"camisas"
        },
        precio:100,
    },
    {
        id: "camisa-03",
        titulo:"Camisa 04",
        imagen: "./img/Camisas/camisas-03.jpg",
        categoria: {
            nombre:"camisas",
            id:"camisas"
        },
        precio:100,
    },
    {
        id: "camisa-04",
        titulo:"Camisa 04",
        imagen: "./img/Camisas/camisas-04.jpg",
        categoria: {
            nombre:"camisas",
            id:"camisas"
        },
        precio:100,
    },
    {
        id: "camisa-05",
        titulo:"Camisa 05",
        imagen: "./img/Camisas/camisas-05.jpg",
        categoria: {
            nombre:"camisas",
            id:"camisas"
        },
        precio:100,
    },
    {
        id: "camisa-06",
        titulo:"Camisa 06",
        imagen: "./img/Camisas/camisas-06.jpg",
        categoria: {
            nombre:"camisas",
            id:"camisas"
        },
        precio:100,
    },
    {
        id: "camisa-07",
        titulo:"Camisa 07",
        imagen: "./img/Camisas/camisas-07.jpg",
        categoria: {
            nombre:"camisas",
            id:"camisas"
        },
        precio:100,
    },
    // objeto para Zapatos
    {
        id: "zapatilla-01",
        titulo:"Zapatillas 01",
        imagen: "./img/Zapatos/zapatillas-01.jpg",
        categoria: {
            nombre:"zapatillas",
            id:"zapatillas"
        },
        precio:2100,
    },
    {
        id: "zapatilla-02",
        titulo:"Zapatillas 02",
        imagen: "./img/Zapatos/zapatillas-02.jpg",
        categoria: {
            nombre:"zapatillas",
            id:"zapatillas"
        },
        precio:2100,
    },
    {
        id: "zapatilla-03",
        titulo:"Zapatillas 03",
        imagen: "./img/Zapatos/zapatillas-03.jpg",
        categoria: {
            nombre:"zapatillas",
            id:"zapatillas"
        },
        precio:2100,
    },
    {
        id: "zapatilla-04",
        titulo:"Zapatillas 04",
        imagen: "./img/Zapatos/zapatillas-04.jpg",
        categoria: {
            nombre:"zapatillas",
            id:"zapatillas"
        },
        precio:2100,
    },
    {
        id: "zapatilla-05",
        titulo:"Zapatillas 05",
        imagen: "./img/Zapatos/zapatillas-05.jpg",
        categoria: {
            nombre:"zapatillas",
            id:"zapatillas"
        },
        precio:2100,
    },
    {
        id: "zapatilla-06",
        titulo:"Zapatillas 06",
        imagen: "./img/Zapatos/zapatillas-06.jpg",
        categoria: {
            nombre:"zapatillas",
            id:"zapatillas"
        },
        precio:2100,
    },
    {
        id: "zapatilla-07",
        titulo:"Zapatillas 07",
        imagen: "./img/Zapatos/zapatillas-07.jpg",
        categoria: {
            nombre:"zapatillas",
            id:"zapatillas"
        },
        precio:2100,
    },
    {
        id: "zapatilla-08",
        titulo:"Zapatillas 08",
        imagen: "./img/Zapatos/zapatillas-08.jpg",
        categoria: {
            nombre:"zapatillas",
            id:"zapatillas"
        },
        precio:2100,
    },
];

const contenedorProductos = document.querySelector("#contenedor-producto");
const botoncategoria = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector(".titulo-principal");

function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";
    productosElegidos.forEach(producto => {
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

cargarProductos(productos);

botoncategoria.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botoncategoria.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active")
         if (e.currentTarget.id != "todos") {
            const productosCategoria = productos.find(productos => productos.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productosCategoria.categoria.nombre;
          

            const productosBoton = productos.filter(productos => productos.categoria.id === e.currentTarget.id);

            cargarProductos(productosBoton);
         } else {
            tituloPrincipal.innerText = "Todo los productos";
            cargarProductos(productos);
         }
    })
})
