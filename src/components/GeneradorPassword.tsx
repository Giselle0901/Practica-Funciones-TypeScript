
export const GeneradorPassword = () => {

    const generarPassword = (
        longitud: number,
        incluirNumeros: boolean,
        incluirSimbolos: boolean
    ): string => {
        const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numeros = "0123456789";
        const simbolos = "!@#$%^&*()_+";

        let caracteres = letras;

        if (incluirNumeros) {
            caracteres += numeros;
        }

        if (incluirSimbolos) {
            caracteres += simbolos;
        }

        let password = "";

        for (let i = 0; i < longitud; i++) {
            const indice = Math.floor(Math.random() * caracteres.length);
            password += caracteres[indice];
        }

        return password;
    };

    return (
        <div className="bg-white border-4 border-pink-900 rounded-xl shadow-lg p-6 m-4 max-w-sm">
            <h3 className="text-2xl font-bold text-blue-950 font-serif text-center p-2 mb-4">
                Generador de Contraseñas
            </h3>

            <p className="text-base text-fuchsia-950 font-semibold py-2 border-b border-pink-200">
                Básica (8): {generarPassword(8, false, false)}
            </p>

            <p className="text-base text-fuchsia-950 font-semibold py-2 border-b border-pink-200">
                Media (12): {generarPassword(12, true, false)}
            </p>

            <p className="text-base text-fuchsia-950 font-semibold py-2">
                Fuerte (16): {generarPassword(16, true, true)}
            </p>
        </div>
    );
};
