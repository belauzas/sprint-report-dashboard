import { Block, Title } from '../block/Block';
import { Epics } from '../epics/Epics';
import { ProjectStatistics } from '../project-statistics/ProjectStatistics';
import style from './StatsAside.module.css';

export function StatsAside() {
    return (
        <aside className={style.aside}>
            <Block>
                <Title title='Epics' buttonLink='/' buttonText='See all' />
                <Epics />
            </Block>
            <Block>
                <Title title='Project statistics' />
                <ProjectStatistics />
            </Block>
        </aside>
    );
}