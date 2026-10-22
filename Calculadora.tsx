
export const Calculadora = () => {
    const sumar = (a: number, b: number): number => a + b
    const restar = (a: number, b: number): number => a - b
    const multiplicar = (a: number, b: number): number => a * b
    const dividir = (a: number, b: number): number => b == 0 ? 0 : a / b

    const a = 15
    const b = 4


    return (
        <div className="bg-white border-4 border-pink-900 rounded-xl shadow-lg p-6 m-4 max-w-sm">
            <h3 className="text-2xl font-bold text-blue-950 font-serif text-center rounded-lg p-2 mb-4">
                Calculadora
            </h3>

            <p className="text-base text-fuchsia-950 font-semibold py-2 border-b border-pink-200">
                15 + 4 = {sumar(a, b)}
            </p>

            <p className="text-base text-fuchsia-950 font-semibold py-2 border-b border-pink-200">
                15 - 4 = {restar(a, b)}
            </p>

            <p className="text-base text-fuchsia-950 font-semibold py-2 border-b border-pink-200">
                15 * 4 = {multiplicar(a, b)}
            </p>

            <p className="text-base text-fuchsia-950 font-semibold py-2">
                15 / 4 = {dividir(a, b).toFixed(2)}
            </p>
        </div>
    );
}
