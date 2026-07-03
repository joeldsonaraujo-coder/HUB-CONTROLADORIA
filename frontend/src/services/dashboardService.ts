import type { Indicador } from "../types";

export async function getIndicadores(): Promise<Indicador[]> {
  return [
    {
      titulo: "💰 Receita",
      valor: "R$ 12.450.000",
      variacao: "+8,2%",
      status: "positivo",
    },
    {
      titulo: "📈 Margem",
      valor: "18,4%",
      variacao: "+1,3%",
      status: "positivo",
    },
    {
      titulo: "🏢 Empresas",
      valor: "12",
      variacao: "0%",
      status: "alerta",
    },
    {
      titulo: "👥 Clientes",
      valor: "3.248",
      variacao: "-2,1%",
      status: "negativo",
    },
  ];
}