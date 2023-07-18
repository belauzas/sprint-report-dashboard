import style from './ProjectStatistics.module.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export function StatisticsItem({data: {title, value, units}}) {
    const barStyles = buildStyles({
        width: '4rem',
        textSize: '32px',
    });

    return (
        <div className={style.progress}>
            <div className={style.title}>{title}</div>
            <div className={style.chart}>
                <CircularProgressbar
                    value={value} 
                    text={value}
                    styles={barStyles}
                />
            </div>
            <div className={style.end}>{units}</div>
        </div>
    );
}