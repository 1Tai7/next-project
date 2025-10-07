// src/components/Home.tsx
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-50">
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        🏠 Bienvenido al Home
      </h1>
      <p className="text-gray-700 text-lg">
        Has iniciado sesión correctamente.
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out">
        Haz Clic
      </button>
    </div>
  );
}
