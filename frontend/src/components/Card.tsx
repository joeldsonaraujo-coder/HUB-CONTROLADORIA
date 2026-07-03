type CardProps = {
  titulo: string;
  descricao: string;
};

function Card({ titulo, descricao }: CardProps) {
  return (
    <div className="card">
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </div>
  );
}

export default Card;