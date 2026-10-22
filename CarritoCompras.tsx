export const CarritoCompras = () => {

    const calcularSubtotal = (precio: number, cantidad: number): number => {
        return precio * cantidad;
    };

    const calcularIVA = (subtotal: number): number => {
        return subtotal * 0.16;
    };

    const calcularTotal = (subtotal: number): number => {
        return subtotal + calcularIVA(subtotal);
    };

    const formatearPrecio = (precio: number): string => {
        return `$${precio.toFixed(2)}`;
    };

    const carrito = [
        { producto: "Laptop", precio: 15000, cantidad: 1 },
        { producto: "Mouse", precio: 350, cantidad: 2 },
        { producto: "Teclado", precio: 800, cantidad: 1 },
    ];

    const subtotal = carrito.reduce(
        (acc, item) => acc + calcularSubtotal(item.precio, item.cantidad), 0
    );

    return (
        <div className="bg-white border-4 border-pink-900 rounded-xl shadow-lg p-6 m-4 max-w-sm">
            <h3 className="text-2xl font-bold text-blue-950 font-serif text-center p-2 mb-4">
                Carrito de Compras
            </h3>

            {carrito.map((item) => (
                <div key={item.producto} className="py-3 border-b border-pink-200">
                    <p className="text-base text-fuchsia-950 font-semibold">
                        Producto: {item.producto}
                    </p>
                    <p className="text-base text-fuchsia-950 font-semibold">
                        Precio: {formatearPrecio(item.precio)}
                    </p>
                    <p className="text-base text-fuchsia-950 font-semibold">
                        Cantidad: {item.cantidad}
                    </p>
                    <p className="text-base text-fuchsia-950 font-semibold">
                        Subtotal: {formatearPrecio(calcularSubtotal(item.precio, item.cantidad))}
                    </p>
                </div>
            ))}

            <hr className="my-4 border-pink-300" />

            <p className="text-base text-fuchsia-950 font-semibold py-2">
                Subtotal: {formatearPrecio(subtotal)}
            </p>
            <p className="text-base text-fuchsia-950 font-semibold py-2">
                IVA (16%): {formatearPrecio(calcularIVA(subtotal))}
            </p>
            <p className="text-lg text-blue-950 font-bold py-2">
                Total: {formatearPrecio(calcularTotal(subtotal))}
            </p>
        </div>
    );
};