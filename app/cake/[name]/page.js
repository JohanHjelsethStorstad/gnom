import Image from 'next/image';
import 'animate.css';

export default function page({ params }) {
    const cake = decodeURIComponent(params.name);
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4 animate__animated animate__bounceInDown">{cake}</h1>
            <div className="animate__animated animate__fadeIn">
                <Image width={400} height={400} src={`/${cake}.jpeg`} />
            </div>
        </main>
    )
}