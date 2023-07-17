import style from './BurndownChart.module.css';
import chart from '../../img/chart.png';

export function BurndownChart() {
    return (
        <div className={style.chart}>
            <img src={chart} alt='Chart' />
        </div>
    );
}
