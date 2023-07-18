import map from '../../img/map.png';
import { OverviewCard } from './OverviewCard';
import {BsBarChart, BsPerson} from 'react-icons/bs';
import {PiSuitcaseLight,PiMagnifyingGlass} from 'react-icons/pi';
import style from './SprintOverview.module.css';

export function SprintOverview() {
    const data = [
        {
            title: 'Team velocity',
            value: 52,
            childrenContent: <BsBarChart size='2.5rem' />,
        },
        {
            title: 'Team members',
            value: 12,
            childrenContent: <BsPerson size='2.5rem' />,
        },
        {
            title: 'Tasks delivered',
            value: 23,
            childrenContent: <PiSuitcaseLight size='2.5rem' />,
        },
        {
            title: 'Spikes delivered',
            value: 16,
            childrenContent: <PiMagnifyingGlass size='2.5rem' />,
        },
        {
            title: 'New events',
            value: 15,
            childrenContent: <img className={style.img} src={map} alt='Map'/>,
            details: {
                heading: 'Scrum training',
                subHeading: 'Poland',
            }
        },
    ];

    return (
        <div className={style.overview}>
            {data.map(item => <OverviewCard data={item} />)}
        </div>
    );
}
