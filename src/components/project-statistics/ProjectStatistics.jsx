import style from './ProjectStatistics.module.css';
import { StatisticsItem } from './StatisticsItem';

export function ProjectStatistics() {
    const data = [
        {
            title: 'Project progress',
            value: 75,
            units: 'percent'
        },
        {
            title: 'Business goals',
            value: 42,
            units: 'delivered'
        },
        {
            title: 'Budget used',
            value: 42,
            units: 'percent'
        },
    ];

    return (
        <div className={style.statsList}>
            {data.map(item => <StatisticsItem data={item} />)}
        </div>
    );
}