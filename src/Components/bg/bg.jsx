import "./bg.css";
import bigback from "../../figmaFiles/big-back.png";
import videoimg from "../../figmaFiles/video.png";
import heart from "../../figmaFiles/heart.png";
import bool from "../../figmaFiles/bool.png";
import lineback from "../../figmaFiles/line-bg.png";
export default function Bg() {
  return (
    <div className="container">
      <section
        id="bg"
        style={{
          backgroundImage: `url(${bigback})`,
        }}
      >
        <img src={lineback} alt="" className="line-bg" />
        <div className="top-side-bg">
          <div className="left-side-bg-on-top">
            <div
              className="top-bg"
              style={{
                backgroundImage: `url(${heart})`,
              }}
            ></div>
            <div className="bottom-bg">
              <h1 className="explan">
                Как распознать проявление лактазной недостаточности?
              </h1>
              <ul className="explan-menu">
                <li className="explan-li">
                  Частый жидкий стул (8-10 раз в день) - стул пенистый, зелёного
                  цвета, с кислым запахом.
                </li>
                <li className="explan-li">
                  Вздутие живота, метеоризм, колики.
                </li>
                <li className="explan-li">
                  У ребенка хороший аппетит, но, когда он жадно хватает грудь и
                  начинает сосать, то уже через несколько минут захлебывается в
                  плаче, перестает кушать и поджимает ножки к животу, корчасьот
                  боли.
                </li>
              </ul>
            </div>
          </div>
          <div className="right-side-bg-on-top">
            <div
              className="top-bg"
              style={{
                backgroundImage: `url(${bool})`,
              }}
            ></div>
            <div className="bottom-bg">
              <h1 className="explan">Как распознать симптомы колик?</h1>
              <p className="explan-p">
                Непрерывный плач, согнутые коленки, выгнутая спинка и
                покараснение щечек – все это может служить симптомами. Особенно
                когда обычные методы успокоения ребенка не действуют.
              </p>
            </div>
          </div>
        </div>
        <div className="bottom-side-bg">
          <h2 className="take-place">
            Что происходит в организме ребёнка в этот момент?
          </h2>
          <h3 className="video-header">
            Узнайте из короткого видео как возникает и проявляется лактозная
            недостаточность
          </h3>
          <img src={videoimg} alt="" className="video-img" />
        </div>
      </section>
    </div>
  );
}
