import style from './SprintOverview.module.css';

export function OverviewCard({top, children}) {
    return (
        <div className={style.overviewCard}>
            {top === true && <div className={style.top}>
                <div className={style.service}>Scrum training</div>
                <div className={style.location}>Poland</div>
            </div>}
            <div className={style.bottom}>
                {children}
                <div className={style.title}>Team velocity</div>
                <div className={style.value}>52</div>
            </div>
        </div>
    );
}
