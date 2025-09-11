
export class Producto  {

    //declaracion de propiedades
    constructor (id, nombre, precio, descripcion, categoria,stock) {

        this._id = id;
        this._nombre = nombre;
        this._precio = precio;
        this._descripcion = descripcion;
        this._categoria = categoria;
        this._stock = stock; // Valor por defecto

    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    get precio() {
        return this._precio;
    }

    set precio(value) {
        this._precio = value;
    }

    get descripcion() {
        return this._descripcion;
    }

    set descripcion(value) {
        this._descripcion = value;
    }

    get categoria() {
        return this._categoria;
    }

    set categoria(value) {
        this._categoria = value;
    }

    get stock() {
        return this._stock;
    }

    set stock(value) {
        this._stock = value;
    }

    mostrarInfo() {
        return `ID: ${this.id}, Nombre: ${this.nombre}, Precio: $${this.precio}, Descripción: ${this.descripcion}, Categoría: ${this.categoria}, Stock: ${this.stock}`;
    }
}

const producto = new Producto('12345', 'Manzana', 3000, 'Manzana roja fresca', 'Frutas', 100);

console.log(producto.mostrarInfo());

