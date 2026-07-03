export interface Indicador {
  titulo: string;
  valor: string;
  variacao: string;
  status: "positivo" | "alerta" | "negativo";
}