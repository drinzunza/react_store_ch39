import './home.css';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home page">
      <h1>Welcome to my super online store</h1>

      <Link className="btn btn-primary" to="/catalog">
        Check our amazing catalog
      </Link>
    </div>
  );
}

export default Home;
