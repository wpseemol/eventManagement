import Footer from '../components/footer/Footer';
import NavMenus from '../components/navMneus/NavMenus';

const Root = () => {
    return (
        <>
            <header className="font-barlow text-2xl font-bold">
                <nav>
                    <NavMenus />
                </nav>
                <h2 className='bg-green-300 mt-64'>this is hero section</h2>
            </header>
            <main className="font-barlow myContainer">this is Min section</main>
            <Footer />
        </>
    );
};

export default Root;
