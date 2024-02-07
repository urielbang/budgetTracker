import img from "../assets/Building-a-Business-Plan.jpg";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div className="container-home-page">
      <div className="leftHome">
        <img src={img} />
      </div>
      <div className="rigthHome">
        <h1>BUDGET TRACKING</h1>
        <p>
          A budget tracking app is a software application designed to help
          individuals or businesses manage their finances by tracking income,
          expenses, savings, and investments
        </p>

        <Link to={"/budget"}>
          <button className="btnHomePage">Start budget</button>
        </Link>
      </div>
    </div>
  );
}
