import "./help.css";
export default function Help() {
  return (
    <div className="container">
      <section id="help">
        <div className="top-help">
          <h1 className="help-header">Как помочь малышу?</h1>
          <h2 className="help-h2">
            Используйте комплексное решение от Колиф и БиоАмикус в каплях
          </h2>
        </div>
        <div className="middle-help">
          <h1 className="causes">
            К основным причинам расстройства ЖКТ можно отнести:
          </h1>
          <ul className="causes-ul">
            <li className="caus">Нарушение микрофлоры кишечника</li>
            <li className="caus">Лактозную недостаточность</li>
          </ul>
        </div>
        <div className="bottom-help"></div>
      </section>
    </div>
  );
}
