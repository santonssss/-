import "./header.css";
import logo from "../../figmaFiles/logo.png";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <img className="img-logo" src={logo} alt="" />
          </div>
          <ul className="menus">
            <li>
              <NavLink>Купить</NavLink>
            </li>
            <li>
              <NavLink>Преимущества</NavLink>
            </li>
            <li>
              <NavLink>Отзывы</NavLink>
            </li>
            <li>
              <NavLink>Контакты</NavLink>
            </li>
            <button className="order">Заказать набор</button>
          </ul>
        </div>
      </div>
    </header>
  );
}
