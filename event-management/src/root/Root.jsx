import NavMenus from '../components/navMneus/NavMenus';

const Root = () => {
    return (
        <>
            <header className="font-barlow text-2xl font-bold">
                <nav>
                    <NavMenus />
                </nav>
                <h2>this is header</h2>
            </header>
            <main className="font-barlow myContainer">this is Min section</main>
            <footer className="font-barlow myContainer">
                this is footer section
            </footer>
        </>
    );
};

export default Root;
