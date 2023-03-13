import "./more.css";
import back from "../../figmaFiles/back.png";
import back2 from "../../figmaFiles/backmore.png";
import baby from "../../figmaFiles/baby.png";
import line from "../../figmaFiles/line.png";
export default function More() {
  return (
    <div className="container">
      <section
        id="more-info"
        style={{
          backgroundImage: `url(${back})`,
        }}
      >
        <div className="more-info-block">
          <div className="top-more-side">
            <h2 className="more-header">Подробнее о коликах</h2>
            <h4>
              Колики возникают вскоре после рождения и обычно продолжаются до
              3-4 месяцев
            </h4>
          </div>
          <div className="bottom-more-side">
            <div className="left-side-in-bottom-side">
              <img src={back2} alt="" className="back-more" />
              <img src={baby} alt="" className="baby" />
            </div>
            <div className="right-side-in-bottom-side">
              <h1 className="more-h1">
                <img src={line} alt="" className="line-img" />
                <span className="one">1</span>/5
                <span className="two">новорожденных страдает от коликов</span>
              </h1>
              <p className="more-paragraph">
                Появление колик связано с незрелостью тонкого кишечника, который
                вырабатывает фермент лактазу, расщепляющую молочный сахар
                лактозу – основной источник энергии для грудничков.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
