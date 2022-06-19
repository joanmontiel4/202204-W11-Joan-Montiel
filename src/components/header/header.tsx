import './header.css';
export function Header({ appTitle }: { appTitle: string }) {
    return (
        <header className="main-header">
            <h1 className="main-title">{appTitle}</h1>
        </header>
    );
}
