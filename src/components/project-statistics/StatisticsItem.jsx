import style from './ProjectStatistics.module.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export function StatisticsItem() {
    const percentage = 60;
    const barStyles = buildStyles({
        width: '4rem',
        textSize: '32px',
    });

    return (
        <div className={style.progress}>
            <div className={style.title}>Project progress</div>
            <div className={style.chart}>
                <CircularProgressbar
                    value={percentage} 
                    text={percentage}
                    styles={barStyles}
                />
            </div>
            <div className={style.end}>delivered</div>
        </div>
    );
}