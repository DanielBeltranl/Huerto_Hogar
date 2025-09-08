import  {Producto} from './Producto.js';

const productos = [
    new Producto('FR001', 'Manzanas Fuji', 4500, 'Manzanas Fuji crujientes y dulces, cultivadas en el Valle del Maule. \n' +
        'Perfectas para meriendas saludables o como ingrediente en postres. Estas manzanas \n' +
        'son conocidas por su textura firme y su sabor equilibrado entre dulce y ácido.', 'Frutas Frescas', 100),
    new Producto('FR002', 'Naranjas Valencia', 3500, 'Jugosas y ricas en vitamina C, estas naranjas Valencia son ideales para \n' +
        'zumos frescos y refrescantes. Cultivadas en condiciones climáticas óptimas que \n' +
        'aseguran su dulzura y jugosidad. ', 'Frutas Frescas', 100),
    new Producto('FR003', 'Plátanos Cavendish', 2700, 'Plátanos maduros y dulces, perfectos para el desayuno o como snack \n' +
        'energético. Estos plátanos son ricos en potasio y vitaminas, ideales para mantener una \n' +
        'dieta equilibrada. ', 'Frutas Frescas', 100),
    new Producto('VR001', 'Zanahorias Orgánicas', 3200, 'Zanahorias crujientes cultivadas sin pesticidas en la Región de O\'Higgins. \n' +
        'Excelente fuente de vitamina A y fibra, ideales para ensaladas, jugos o como snack \n' +
        'saludable. ', 'Verduras Orgánicas', 100),
    new Producto('VR002', 'Espinacas Frescas', 2500, 'Espinacas frescas y nutritivas, perfectas para ensaladas y batidos verdes. \n' +
        'Estas espinacas son cultivadas bajo prácticas orgánicas que garantizan su calidad y valor \n' +
        'nutricional.', 'Verduras Orgánicas', 100),
    new Producto('VR003', 'Pimientos Tricolores', 5900, 'Pimientos rojos, amarillos y verdes, ideales para salteados y platos \n' +
        'coloridos. Ricos en antioxidantes y vitaminas, estos pimientos añaden un toque vibrante \n' +
        'y saludable a cualquier receta.', 'Verduras Orgánicas', 100),
    new Producto('PO001', 'Miel Orgánica', 12000, 'Miel pura y orgánica producida por apicultores locales. Rica en \n' +
        'antioxidantes y con un sabor inigualable, perfecta para endulzar de manera natural tus \n' +
        'comidas y bebidas.', 'Productos Orgánicos', 100),
    new Producto('PO003', 'Quinua Orgánica', 8500, 'Grano andino rico en proteínas, ideal para comidas saludables.', 'Productos Orgánicos', 100),
    new Producto('PL001', 'Leche Entera', 4200, 'Leche fresca y cremosa, fuente de calcio y proteínas.', 'Productos Lácteos', 100)
];

const catalogo = document.querySelector('.container')

productos.forEach(producto => {

    const prod = document.createElement('li');

    // language=HTML
    prod.innerHTML = `<a class="producto" href="platano.html">
                      <img src="imagenes/${producto.id}.png" style="margin-bottom: 3px">  
                      <span style="font-size: 22px; margin-bottom: 7px">${producto.nombre}</span>
                      <span style="text-align: justify; margin-bottom: 7px"><strong>Descripción: </strong>${producto.descripcion}</span>  
                      <span style="margin-bottom: 7px"><strong>Precio: </strong>${producto.precio}</span>
                      <span style="margin-bottom: 7px"><strong>Categoria: </strong>${producto.categoria}</span>
                      <span style="margin-bottom: 7px"><strong>Stock: </strong>${producto.stock}</span>
                      </a>`

    catalogo.appendChild(prod);

})