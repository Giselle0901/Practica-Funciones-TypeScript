export const EstadisticasArreglo = () => {

    const calcularPromedio = (nums: number[]): number => {
        const suma = nums.reduce((acumulado, num) => acumulado + num, 0);
        return nums.length === 0 ? 0 : suma / nums.length;
    };

    const encontrarMaximo = (nums: number[]): number => {
        return Math.max(...nums);
    };

    const encontrarMinimo = (nums: number[]): number => {
        return Math.min(...nums);
    };

    const numeros = [8, 3, 15, 7, 22, 11, 4];

    return (
        <div className="bg-white border-4 border-pink-900 rounded-xl shadow-lg p-6 m-4 max-w-sm">
            <h3 className="text-2xl font-bold text-blue-950 font-serif text-center p-2 mb-4">
                Estadísticas
            </h3>

            <p className="text-base text-fuchsia-950 font-semibold py-2 border-b border-pink-200">
                Números: [{numeros.join(', ')}]
            </p>
            <p className="text-base text-fuchsia-950 font-semibold py-2 border-b border-pink-200">
                Promedio: {calcularPromedio(numeros).toFixed(2)}
            </p>
            <p className="text-base text-fuchsia-950 font-semibold py-2 border-b border-pink-200">
                Máximo: {encontrarMaximo(numeros)}
            </p>
            <p className="text-base text-fuchsia-950 font-semibold py-2">
                Mínimo: {encontrarMinimo(numeros)}
            </p>
        </div>
    )
}