import Image from 'next/image';

export const Navbar = () => {
    return (
        <>
            <nav className="container flex justify-around py-6 mx-auto bg-gray-200">
            <div>
            <Image
                loader={myLoader}
                src="me.png"
                alt="Picture of the author"
                width={500}
                height={500}
            />
            </div>
            <div className="space-x-8">
                <a className="hover:text-gray-600 hover:underline decoration-blue-500" href="">O Nas</a>
                <a href="">Stacja Kontroli</a>
                <a href="">Serwis</a>
                <a href="">Geometria / Opony</a>
                <a href="">Obłsuga Flot</a>
                <a href="">Kontakt</a>
            </div>
            </nav>
        </>
    )
}