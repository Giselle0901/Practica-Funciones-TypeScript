export const AplicadorDescuentos = () => {

    const aplicarDescuento = (precio: number, calcularDescuento: (precio: number) => number): number => {
        return precio - calcularDescuento(precio);
    };

    const descuento10 = (p: number): number => p * 0.10;
    const descuento25 = (p: number): number => p * 0.25;
    const descuentoEstudiante = (p: number): number => p * 0.15;

    const precio = 1000;

    return (
        <div className="bg-white border-4 border-pink-900 rounded-xl shadow-lg p-6 m-4 max-w-sm">
            <h3 className="text-2xl font-bold text-blue-950 font-serif text-center p-2 mb-4">
                Aplicador de Descuentos
            </h3>

            <p className="text-base text-fuchsia-950 font-semibold py-2 border-b border-pink-200">
                Precio original: ${precio}
            </p>
            <p className="text-base text-fuchsia-950 font-semibold py-2 border-b border-pink-200">
                Con 10% off: ${aplicarDescuento(precio, descuento10)}
            </p>
            <p className="text-base text-fuchsia-950 font-semibold py-2 border-b border-pink-200">
                Con 25% off: ${aplicarDescuento(precio, descuento25)}
            </p>
            <p className="text-base text-fuchsia-950 font-semibold py-2">
                Descuento estudiante: ${aplicarDescuento(precio, descuentoEstudiante)}
            </p>
        </div>
    )
}