import "./drug.css";
import preparate from "../../figmaFiles/preparate.png";
import logotip from "../../figmaFiles/compane.png";
import logotip1 from "../../figmaFiles/Vector.png";
import bri from "../../figmaFiles/bri.png";

export default function Drug() {
  return (
    <div className="container">
      <section id="drug">
        <div className="blockchain">
          <h1 className="drug-h1">Избавьте от колик вашего малыша</h1>
          <p className="drug-p">
            Используйте Лактазу в каплях, для лучшего усвоения лактозы при
            грудном вскармливании
          </p>
          <button className="drug-btn">Подробнее</button>
          <div className="absolute-manage">
            <div className="card">
              <div className="left-side">
                <img src={logotip} alt="" className="left-side__img" />
              </div>
              <div className="right-side">
                <h4 className="logo-h">Применяется с 1998 года</h4>
              </div>
            </div>
            <div className="card">
              <div className="left-side">
                <img src={logotip1} alt="" className="left-side__img" />
              </div>
              <div className="right-side">
                <h4 className="logo-h">№1 в Великобритании</h4>
              </div>
            </div>
            <div className="card">
              <div className="left-side">
                <img src={bri} alt="" className="left-side__img velik" />
              </div>
              <div className="right-side">
                <h4 className="logo-h">Произведенов Великобритании</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="block-img">
          <img src={preparate} alt="" className="preparate" />
        </div>
      </section>
    </div>
  );
}
