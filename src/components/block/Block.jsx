import style from './Block.module.css';

export function Block({gridArea, children}) {
    return (
        <div style={{gridArea: gridArea ?? null}} className={style.block}>{children}</div>
    );
}

export function Title({title, buttonLink, buttonText}) {
    return (
        <div className={style.blockTitle}>
            <h2>{title}</h2>
            {buttonLink && buttonText && <a href={buttonLink}>{buttonText}</a>}
        </div>
    );
}
