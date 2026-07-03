import type { Indicador } from "../types";

export async function getIndicadores(): Promise<Indicador[]> {
  return [
    {
      titulo: "💰 Receita",
      valor: "R$ 12.450.000",
      status: "positivo",
    },
    {
      titulo: "📈 Margem",
      valor: "18,4%",
      status: "positivo",
    },
    {
      titulo: "🏢 Empresas",
      valor: "12",
      status: "alerta",
    },
    {
      titulo: "👥 Clientes",
      valor: "3.248",
      status: "negativo",
    },
  ];
}