import map from '../../img/map.png';
import { OverviewCard } from './OverviewCard';
import {BsBarChart, BsPerson} from 'react-icons/bs';
import {PiSuitcaseLight,PiMagnifyingGlass} from 'react-icons/pi';
import style from './SprintOverview.module.css';

export function SprintOverview() {
    return (
        <div className={style.overview}>
            <OverviewCard>
                <BsBarChart size='2.5rem' />
            </OverviewCard>
            <OverviewCard>
                <BsPerson size='2.5rem' />
            </OverviewCard>
            <OverviewCard>
                <PiSuitcaseLight size='2.5rem' />
            </OverviewCard>
            <OverviewCard>
                <PiMagnifyingGlass size='2.5rem' />
            </OverviewCard>
            <OverviewCard top={true}>
                <img className={style.img} src={map} alt='Map'/>
            </OverviewCard>
        </div>
    );
}
