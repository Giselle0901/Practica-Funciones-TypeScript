
export const ValidadorEdad = () => {

    const esMayorDeEdad = (edad: number): boolean => {
        return edad >= 18;
    };

    const obtenerMensaje = (edad: number): string => {
        if (esMayorDeEdad(edad)) {
            return "Puede votar";
        }
        return `Le faltan ${18 - edad} años`;
    };

    const edades = [15, 18, 25, 12];

    return (
        <div className="bg-white border-4 border-pink-900 rounded-xl shadow-lg p-6 m-4 max-w-sm">
            <h3 className="text-2xl font-bold text-blue-950 font-serif text-center p-2 mb-4">
                Validador de Edad
            </h3>

            {edades.map((edad) => (
                <p
                    key={edad}
                    className="text-base text-fuchsia-950 font-semibold py-2 border-b border-pink-200 last:border-b-0"
                >
                    Edad {edad}: {obtenerMensaje(edad)}
                </p>
            ))}
        </div>
    );
};
