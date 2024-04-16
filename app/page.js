import gnom from "../public/gnom.png";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center h-[90vh] bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">En Gnom</h1>
            <div className="w-100 h-100">
                <Image src={gnom} alt="gnom" width={300} height={300} objectFit="contain" />
            </div>
        </main>
    )
}
