export function mostrarCatalogo (catalogo, productos) {

    productos.forEach(producto => {

        const prod = document.createElement('div');
        prod.className = 'col-lg-3 col-md-5  col-sm-12  col-10 max-auto mb-4 pd-2';
        // language=HTML
        prod.innerHTML = `<div id="item">
                                <div class="card" style="width: 100%;">
                                  <img src="Imagenes/${producto.id}.png" class="card-img-top" alt="${producto.nombre}">
                                  <div class="card-body">
                                    <h5 class="card-title">${producto.nombre}</h5>
                                      <div class="desc">
                                        <p class="card-text">${producto.descripcion}</p>
                                      </div>
                                  </div>
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item"> <strong> Precio: </strong> ${producto.precio} $ </li>
                                    <li class="list-group-item"> <strong>Stock:  </strong> ${producto.stock} </li>
                                  </ul>
                                  <div class="card-body">
                                      <a href="#" class="btn btn-primary">Agregar al carrito</a>
                                      
                                  </div>
                                </div>
                          </div>  `

        catalogo.appendChild(prod);

    })
}