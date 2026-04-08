import styles from './FilmesLista.module.css';

export default function FilmesLista() {
  const categorias = [
    { titulo: "ÉPICOS", filmes: "Guerra Infinita, Ultimato, Soldado Invernal", classe: "epico" },
    { titulo: "BONS", filmes: "Homem de Ferro, Pantera Negra, Ragnarok", classe: "bom" },
    { titulo: "MEDÍOCRES", filmes: "Viúva Negra, Homem de Ferro 2, Thor", classe: "mediocre" },
    { titulo: "RUINS", filmes: "Eternos, O Mundo Sombrio, Quantumania", classe: "ruim" }
  ];

  return (
    <section className={styles.container}>
      <h2>Minha Classificação UCM</h2>
      {categorias.map((cat) => (
        <div key={cat.titulo} className={styles.card}>
          <h3 className={styles[cat.classe]}>{cat.titulo}</h3>
          <p>{cat.filmes}</p>
        </div>
      ))}
    </section>
  );
}