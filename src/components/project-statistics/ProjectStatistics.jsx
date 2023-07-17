import style from './ProjectStatistics.module.css';
import { StatisticsItem } from './StatisticsItem';

export function ProjectStatistics() {
    return (
        <div className={style.statsList}>
            <StatisticsItem />
            <StatisticsItem />
            <StatisticsItem />
        </div>
    );
}