import style from './Epics.module.css';
import {BsThreeDots} from 'react-icons/bs';

export function EpicItem({data: {title, stage, color, background}}) {
    return (
        <div className={style.epicItem}>
            <div className={style.letter} style={{color: '#'+color, backgroundColor: '#'+background}}>{title[0]}</div>
            <div className={style.details}>
                <p className={style.title}>{title}</p>
                <p className={style.category}>{stage}</p>
            </div>
            <BsThreeDots className={style.actions} />
        </div>
    );
}
