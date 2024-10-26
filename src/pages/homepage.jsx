import { Link } from "react-router-dom";
import PageNav from "../components/pageNav";

function HomePage() {
  return (
    <div>
      <PageNav />
      <h1>worldwise</h1>
      <Link to="app">Go to the app</Link>
    </div>
  );
}
export default HomePage;
