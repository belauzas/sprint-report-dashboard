import style from './Aside.module.css';
import logo from '../../img/logo.png';
import user from '../../img/user.png';
import { BsPlusLg, BsGrid } from "react-icons/bs";
import { TfiLayoutColumn3, TfiViewList } from "react-icons/tfi";
import { AiOutlineLineChart } from "react-icons/ai";

export function Aside() {
    return (
        <aside className={style.aside}>
            <img className={style.logo} src={logo} alt='Logo' />
            <nav className={style.nav}>
                <a href="/" className={`${style.link} ${style.active}`}><BsPlusLg className={style.icon} size='1.2rem' /></a>
                <a href="/" className={style.link}><BsGrid className={style.icon} size='1.2rem' /></a>
                <a href="/" className={style.link}><TfiViewList className={style.icon} size='1.2rem' /></a>
                <a href="/" className={style.link}><TfiLayoutColumn3 className={style.icon} size='1.2rem' /></a>
                <a href="/" className={style.link}><AiOutlineLineChart className={style.icon} size='1.2rem' /></a>
            </nav>
            <div className={style.account}>
                <img className={style.user} src={user} alt='User' />
            </div>
        </aside>
    );
}