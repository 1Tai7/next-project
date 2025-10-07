// src/api/auth.ts
import { SignJWT } from "jose";

export interface LoginResponse {
  token: string;
}

// Simula una "clave secreta" (solo para entorno mock)
const SECRET_KEY = new TextEncoder().encode("mocked_secret_key_123");

export async function loginUser(
  email: string,
  password: string
): Promise<LoginResponse> {
  console.log("🔹 Simulando /api/login con JWT dinámico (browser-safe)...");

  // Simula retardo de red
  await new Promise((res) => setTimeout(res, 1000));

  // Validación mock
  if (email && password) {
    // Generar un JWT válido con expiración de 1h
    const token = await new SignJWT({
      email,
      role: "user",
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(SECRET_KEY);

    return { token };
  }

  throw new Error("Credenciales inválidas");
}
