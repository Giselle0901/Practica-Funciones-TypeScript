export const AnalizadorTexto = () => {

    const contarPalabras = (texto: string): number => {
        return texto.trim().split(/\s+/).length
    };

    const contarVocales = (texto: string): number => {
        return texto.match(/[aeiouáéíóú]/gi)?.length ?? 0;
    };

    const invertirTexto = (texto: string): string => {
        return texto.split('').reverse().join('')
    };

    const texto = "Hola mundo desde TypeScript";

    return (
        <div className="bg-white border-4 border-pink-900 rounded-xl shadow-lg p-6 m-4 max-w-sm">
            <h3 className="text-2xl font-bold text-blue-950 font-serif text-center rounded-lg p-2 mb-4">
                Analizador de Texto
            </h3>

            <p className="text-base text-fuchsia-950 font-semibold py-2 border-b border-pink-200">
                Texto: "{texto}"
            </p>
            <p className="text-base text-fuchsia-950 font-semibold py-2 border-b border-pink-200">
                Palabras: {contarPalabras(texto)}
            </p>
            <p className="text-base text-fuchsia-950 font-semibold py-2 border-b border-pink-200">
                Vocales: {contarVocales(texto)}
            </p>
            <p className="text-base text-fuchsia-950 font-semibold py-2 wrap-break-words">
                Invertido: {invertirTexto(texto)}
            </p>
        </div>
    )
}