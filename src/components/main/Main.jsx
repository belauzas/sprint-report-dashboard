import { Block, Title } from '../block/Block';
import { BurndownChart } from '../burndown-chart/BurndownChart';
import { SprintOverview } from '../sprint-overview/SprintOverview';
import { SprintStories } from '../sprint-stories/SprintStories';
import { Team } from '../team/Team';
import style from './Main.module.css';

export function Main() {
    return (
        <main className={style.main}>
            <Block gridArea='sprint'>
                <Title title='Sprint overview' />
                <SprintOverview />
            </Block>
            <Block gridArea='burndown'>
                <Title title='Burndown chart' />
                <BurndownChart />
            </Block>
            <Block gridArea='stories'>
                <Title title='Sprint stories' buttonLink='/' buttonText='See all' />
                <SprintStories />
            </Block>
            <Block gridArea='team'>
                <Title title='Team members' />
                <Team />
            </Block>
        </main>
    );
}