export const ConversorTemperatura = () => {

    const celsiusAFahrenheit = (c: number): number => {
        return (c * 9 / 5) + 32;
    };

    const fahrenheitACelsius = (f: number): number => {
        return (f - 32) * 5 / 9;
    };

    const temperatura = 25;

    return (
        <div className="bg-white border-4 border-pink-900 rounded-xl shadow-lg p-6 m-4 max-w-sm">
            <h3 className="text-2xl font-bold text-blue-950 font-serif text-center rounded-lg p-2 mb-4">
                Conversor de Temperatura
            </h3>

            <p className="text-base text-fuchsia-950 font-semibold py-2 border-b border-pink-200">
                {temperatura}°C = {celsiusAFahrenheit(temperatura)}°F
            </p>

            <p className="text-base text-fuchsia-950 font-semibold py-2">
                100°F = {fahrenheitACelsius(100).toFixed(2)}°C
            </p>
        </div>
    );
};