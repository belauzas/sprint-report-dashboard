import style from './SprintOverview.module.css';

export function OverviewCard({data: {title, value, details, childrenContent}}) {
    const {heading, subHeading} = details || {};
    
    return (
        <div className={style.overviewCard}>
            {details && <div className={style.top}>
                {heading && <div className={style.service}>{heading}</div>}
                {subHeading && <div className={style.location}>{subHeading}</div>}
            </div>}
            <div className={style.bottom}>
                {childrenContent}
                <div className={style.title}>{title}</div>
                <div className={style.value}>{value}</div>
            </div>
        </div>
    );
}
