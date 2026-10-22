export const SistemaCalificaciones = () => {

    const calcularPromedio = (calificaciones: number[]): number => {
        const suma = calificaciones.reduce((acumulado, calificacion) => acumulado + calificacion, 0);

        return calificaciones.length === 0 ? 0 : suma / calificaciones.length;
    };

    const obtenerLetra = (promedio: number): string => {
        if (promedio >= 90) return "A"
        if (promedio >= 80) return "B"
        if (promedio >= 70) return "C"
        if (promedio >= 60) return "D"
        return "F"
    };

    const estaAprobado = (promedio: number): boolean => {
        return promedio >= 70;
    };

    const alumnos = [
        { nombre: "Ana", califs: [95, 88, 92] },
        { nombre: "Luis", califs: [70, 65, 72] },
        { nombre: "Maria", califs: [85, 90, 88] },
    ];

    return (
        <div className="bg-white border-4 border-pink-900 rounded-xl shadow-lg p-6 m-4 max-w-sm">
            <h3 className="text-2xl font-bold text-blue-950 font-serif text-center p-2 mb-4">
                Sistema de Calificaciones
            </h3>

            {alumnos.map((alumno) => {
                const promedio = calcularPromedio(alumno.califs);
                const letra = obtenerLetra(promedio);
                const aprobado = estaAprobado(promedio);

                return (
                    <div key={alumno.nombre} className="py-3 border-b border-pink-200 last:border-b-0">
                        <p className="text-base text-fuchsia-950 font-semibold">
                            Nombre: {alumno.nombre}
                        </p>
                        <p className="text-base text-fuchsia-950 font-semibold">
                            Promedio: {promedio.toFixed(1)}
                        </p>
                        <p className="text-base text-fuchsia-950 font-semibold">
                            Calificación: {letra}
                        </p>
                        <p className="text-base text-fuchsia-950 font-semibold">
                            Estado: {aprobado ? "Aprobado" : "Reprobado"}
                        </p>
                    </div>
                );
            })}
        </div>
    )
}