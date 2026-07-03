import Card from "../components/Card";

function Home() {
  return (
    <main className="home">
      <h2>Bem-vindo ao HUB de Controladoria</h2>

      <p>
        Sistema inteligente para apoio à Controladoria,
        indicadores gerenciais e tomada de decisão.
      </p>

      <div className="cards">
        <Card
          titulo="📊 Sala de Situação"
          descricao="Acompanhamento dos principais indicadores."
        />

        <Card
          titulo="📈 DRE Gerencial"
          descricao="Visualização da demonstração de resultados."
        />

        <Card
          titulo="🤖 IA Analítica"
          descricao="Assistente inteligente para análises."
        />
      </div>
    </main>
  );
}

export default Home;