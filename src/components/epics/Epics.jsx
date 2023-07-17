import { EpicItem } from './EpicItem';
import style from './Epics.module.css';

export function Epics() {
    return (
        <div className={style.epicList}>
            <EpicItem />
            <EpicItem />
            <EpicItem />
            <EpicItem />
            <EpicItem />
        </div>
    );
}