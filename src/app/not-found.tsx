import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <Image
        alt='Error 500 Icon'
        src="/error-404-icon.svg"
        width={300}
        height={100}
      />
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600 mt-2">Página no encontrada</p>
        <p className="md:text-lg xl:text-xl text-gray-500">Oooops! no se ha encontrado la página.</p>
        <Link
          href={'/dashboard/main'}
          className="flex items-center justify-center px-5 py-2 mt-2 rounded-xl bg-red-normal text-white hover:bg-yellow-normal transition-all">
          Ir al inicio
        </Link>
      </div>
    </div>
  )
}