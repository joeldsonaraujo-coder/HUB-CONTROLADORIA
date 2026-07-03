const API_URL = "http://localhost:8000";

export async function apiGet(endpoint: string) {
  const response = await fetch(`${API_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error("Erro ao acessar a API.");
  }

  return response.json();
}