export interface Indicador {
  titulo: string;
  valor: string;
  status: "positivo" | "alerta" | "negativo";
}