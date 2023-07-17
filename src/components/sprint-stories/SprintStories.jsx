import style from './SprintStories.module.css';
import { StoryRow } from './StoryRow';

export function SprintStories() {
    return (
        <div className={style.storiesList}>
            <StoryRow />
            <StoryRow />
            <StoryRow />
            <StoryRow />
            <StoryRow />
        </div>
    );
}
