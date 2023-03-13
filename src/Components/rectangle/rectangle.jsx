import "./rectangle.css";
import babysleep from "../../figmaFiles/baby-sleep.png";
export default function Rectangle() {
  return (
    <div className="container">
      <section id="rectangle">
        <div className="top-rectangle">
          <h1 className="rectangle-header">
            На первом году жизни, 50% малышей сталкиваются с проблемами ЖКТ
          </h1>
          <h6 className="rectangle-h6">
            Как правило они  самостоятельно проходят по мере роста ребенка
          </h6>
        </div>
        <div className="bottom-rectangle">
          <div className="left-side-bottom-rectangle">
            <div className="pluses">
              <h2 className="starting-ul">Однако</h2>
              <ul className="plus-preparate">
                <li className="plus">Нарушают сон крохи и мамы</li>
                <li className="plus">
                  Вызывают тревогу и депрессию у родителей
                </li>
                <li className="plus">
                  Могут ассоциироваться с отдаленными последствиями
                </li>
              </ul>
            </div>
          </div>
          <div className="right-side-bottom-rectangle">
            <img src={babysleep} alt="" className="baby-sleep" />
          </div>
        </div>
      </section>
    </div>
  );
}
