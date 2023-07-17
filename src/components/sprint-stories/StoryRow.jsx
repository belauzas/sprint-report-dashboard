import {BsThreeDots} from 'react-icons/bs';
import style from './SprintStories.module.css';

export function StoryRow() {
    return (
        <div className={style.storyRow}>
            <div className={style.id}>P42</div>
            <div className={style.title}>Landing page</div>
            <div className={style.status}><div className={style.dot}></div>PO Approval</div>
            <div className={style.points}>12</div>
            <BsThreeDots className={style.actions} />
        </div>
    );
}
