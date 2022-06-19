import './info.css';

export function Info({ numSelectedGent }: { numSelectedGent: string }) {
    return <p className="info">{numSelectedGent} gentlemen pointing at you</p>;
}
