import Link from 'next/link';
import logo from '../public/vevcom.png';
import Image from 'next/image';

export default function Nav() {
    return (
        <div className="flex justify-around items-center bg-blue-500 p-4">
            <Link href="/">
                <div className="w-12 h-12">
                    <Image src={logo} alt="vevcom" width={50} height={50} objectFit="contain" />
                </div>
            </Link>
            <Link href="/application">
                <div className="cursor-pointer text-white hover:text-blue-200">Søknadstekst</div>
            </Link>
            <Link href="/accept">
                <div className="cursor-pointer text-white hover:text-blue-200">Godta søknad</div>
            </Link>
            <Link href="/cake/oreokake">
                <div className="cursor-pointer text-white hover:text-blue-200">Oreokake</div>
            </Link>
            <Link href="/cake/sjokoladekake">
                <div className="cursor-pointer text-white hover:text-blue-200">Sjokoladekake</div>
            </Link>
            <Link href="/cake/vaniljekake">
                <div className="cursor-pointer text-white hover:text-blue-200">Vaniljekake</div>
            </Link>
            <Link href="/cake/lukketvanøtt">
                <div className="cursor-pointer text-white hover:text-blue-200">Lukket valnøtt</div>
            </Link>
        </div>
    )
}
