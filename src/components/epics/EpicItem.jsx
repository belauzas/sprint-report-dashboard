import style from './Epics.module.css';
import {BsThreeDots} from 'react-icons/bs';

export function EpicItem() {
    return (
        <div className={style.epicItem}>
            <div className={style.letter}>A</div>
            <div className={style.details}>
                <p className={style.title}>Mobile Onboarding</p>
                <p className={style.category}>Design</p>
            </div>
            <BsThreeDots className={style.actions} />
        </div>
    );
}
