import { AnalizadorTexto } from './components/AnalizadorTexto'
import { AplicadorDescuentos } from './components/AplicadorDescuentos'
import { Calculadora } from './components/Calculadora'
import { CalculadoraIMC } from './components/CalculadoraIMC'
import { CarritoCompras } from './components/CarritoCompras'
import { ConversorTemperatura } from './components/ConversorTemperatura'
import { EstadisticasArreglo } from './components/EstadisticasArreglo'
import { GeneradorPassword } from './components/GeneradorPassword'
import { SistemaCalificaciones } from './components/SistemaCalificaciones'
import { ValidadorEdad } from './components/ValidadorEdad'

function App() {
  return (
    <main className="min-h-screen w-full bg-pink-50 p-6">
      <h1 className="mb-8 rounded-xl bg-amber-950 p-6 text-center text-3xl font-black text-white shadow-lg md:text-4xl">
        Práctica de Funciones en TypeScript
      </h1>

      <div className="grid w-full grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
        <Calculadora />
        <ConversorTemperatura />
        <CalculadoraIMC />
        <ValidadorEdad />
        <AnalizadorTexto />
        <EstadisticasArreglo />
        <GeneradorPassword />
        <AplicadorDescuentos />
        <SistemaCalificaciones />
        <CarritoCompras />
      </div>
    </main>
  )
}

export default App