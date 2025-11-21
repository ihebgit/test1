//src/pages/NoPage.jsx
import { Link } from "react-router-dom";
 
export default function NoPage() {
  return (
    <div>
      <h2>Erreur 404</h2>
      <p>La page demandée n'existe pas.</p>
 
      <img
        src="https://picsum.photos/700/250?random=55550"
        alt="404"
        style={{ borderRadius: "6px", marginTop: "20px" }}
      />
 
      <p style={{ marginTop: "15px" }}>
        <Link to="/">Retour à l'accueil</Link>
      </p>
    </div>
  );
}
