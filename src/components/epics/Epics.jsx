import { EpicItem } from './EpicItem';
import style from './Epics.module.css';

export function Epics() {
    const data = [
        {
            title: 'Mobile Onboarding',
            stage: 'Design',
            color: '00928E',
            background: 'D1F5E9',
        },
        {
            title: 'Adding item',
            stage: 'Development',
            color: '704D4D',
            background: 'F5D1D1',
        },
        {
            title: 'Admin panel',
            stage: 'Development',
            color: '70564D',
            background: 'FFEDCB',
        },
        {
            title: 'Mobile MVP',
            stage: 'Design &amp; Development',
            color: '4D547A',
            background: 'D1D7F9',
        },
        {
            title: 'QR Scann',
            stage: 'Research',
            color: '4D547A',
            background: 'D1EFF9',
        },
    ];

    return (
        <div className={style.epicList}>
            {data.map(item => <EpicItem data={item} />)}
        </div>
    );
}