import img from "../assets/Building-a-Business-Plan.jpg";
export default function HomePage() {
  return (
    <div className="container-home-page">
      <div className="leftHome">
        <img src={img} />
      </div>
      <div className="rigthHome">
        <h1>BUDGET TRACKING</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab ad
          dignissimos natus illo reiciendis error dolorum sit amet numquam
          excepturi ullam totam minus perspiciatis laboriosam eos velit, cum
          architecto officia.
        </p>
        <button className="btnHomePage">Start budget</button>
      </div>
    </div>
  );
}
