import './Breadcrumb.css';

// IMPORTANTE: Tem que ter o "default" aqui!
export default function Breadcrumb() {
  return (
    <nav className="breadcrumb-container">
      <ul className="breadcrumb-list">
        <li>Marvel</li>
        <li>UCM</li>
        <li className="active">Ranking de Filmes</li>
      </ul>
    </nav>
  );
}