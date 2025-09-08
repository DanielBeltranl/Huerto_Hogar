import  {Producto} from './Producto.js';

const productos = [
    new Producto('FR001', 'Manzanas Fuji', 4500, 'Manzanas dulces y crujientes, ideales para snacks o postres.', 'Frutas Frescas', 100),
    new Producto('FR002', 'Naranjas Valencia', 3500, 'Naranjas jugosas perfectas para jugo o consumo fresco.', 'Frutas Frescas', 100),
    new Producto('FR003', 'Plátanos Cavendish', 2700, 'Plátanos maduros de textura suave, ricos en potasio.', 'Frutas Frescas', 100),
    new Producto('VR001', 'Zanahorias Orgánicas', 3200, 'Zanahorias cultivadas sin pesticidas, frescas y crocantes.', 'Verduras Orgánicas', 100),
    new Producto('VR002', 'Espinacas Frescas', 2500, 'Hojas verdes y tiernas, excelentes para ensaladas y batidos.', 'Verduras Orgánicas', 100),
    new Producto('VR003', 'Pimientos Tricolores', 5900, 'Mezcla de pimientos rojos, amarillos y verdes, coloridos y dulces.', 'Verduras Orgánicas', 100),
    new Producto('PO001', 'Miel Orgánica', 12000, 'Miel natural obtenida de flores silvestres, sin aditivos.', 'Productos Orgánicos', 100),
    new Producto('PO003', 'Quinua Orgánica', 8500, 'Grano andino rico en proteínas, ideal para comidas saludables.', 'Productos Orgánicos', 100),
    new Producto('PL001', 'Leche Entera', 4200, 'Leche fresca y cremosa, fuente de calcio y proteínas.', 'Productos Lácteos', 100)
];

const catalogo = document.querySelector('.container')

productos.forEach(producto => {

    const prod = document.createElement('li');
    prod.className = 'producto'
    prod.innerHTML = `<a class="producto" href="platano.html"><span>${producto.nombre}</span>
                      <span><strong>Precio </strong>${producto.precio}</span>
                      <span><strong>Categoria </strong>${producto.categoria}</span>
                      <span><strong>Stock </strong>${producto.stock}</span>
                      </a>`

    catalogo.appendChild(prod);

})