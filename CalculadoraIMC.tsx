export const CalculadoraIMC = () => {

  const calcularIMC = (peso: number, altura: number): number => {
    return peso / (altura * altura)
  };

  const clasificarIMC = (imc: number): string => {
    if (imc < 18.5) return "Bajo peso"
    if (imc < 25) return "Normal"
    if (imc < 30) return "Sobrepeso"
    return "Obesidad"
  }

  const peso = 70;
  const altura = 1.75;

  const imc = calcularIMC(peso, altura);

  return (
    <div className="bg-white border-4 border-pink-900 rounded-xl shadow-lg p-6 m-4 max-w-sm">
      <h3 className="text-2xl font-bold text-blue-950 font-serif text-center rounded-lg p-2 mb-4">
        Calculadora de IMC
      </h3>

      <p className="text-base text-fuchsia-950 font-semibold py-2 border-b border-pink-200">
        Peso: {peso} kg
      </p>
      <p className="text-base text-fuchsia-950 font-semibold py-2 border-b border-pink-200">
        Altura: {altura} m
      </p>
      <p className="text-base text-fuchsia-950 font-semibold py-2 border-b border-pink-200">
        IMC: {imc.toFixed(2)}
      </p>
      <p className="text-base text-fuchsia-950 font-semibold py-2">
        Clasificacion: {clasificarIMC(imc)}
      </p>
    </div>
  )
}