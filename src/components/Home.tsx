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
    </div>
  );
}
