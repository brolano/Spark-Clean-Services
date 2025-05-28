import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Welcome to Spark Clean Services</h1>
    <Link to="/quote">Request a Quote</Link>
    <br />
    <Link to="/appointment">Set an Appointment</Link>
  </div>
);

export default Home;