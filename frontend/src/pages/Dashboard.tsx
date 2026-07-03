import Card from "../components/Card";

function Dashboard() {
  return (
    <main className="home">
      <h2>📊 Sala de Situação</h2>

      <p>Resumo dos principais indicadores da empresa.</p>

      <div className="cards">
        <Card
          titulo="💰 Receita"
          descricao="R$ 12.450.000"
        />

        <Card
          titulo="📈 Margem"
          descricao="18,4%"
        />

        <Card
          titulo="🏢 Empresas"
          descricao="12 unidades"
        />

        <Card
          titulo="👥 Clientes"
          descricao="3.248 ativos"
        />
      </div>
    </main>
  );
}

export default Dashboard;