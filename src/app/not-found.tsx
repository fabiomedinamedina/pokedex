import { StatusDisplay } from '@/components';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <StatusDisplay
        icon={
          <Image
            alt='Error 500 Icon'
            src="/error-404-icon.svg"
            width={300}
            height={100}
          />
        }
        title='Página no encontrada'
        description='Oooops! no se ha encontrado la página.'
        href={{
          title: 'Ir al inicio',
          path: '/dashboard/main'
        }}
      />
    </div>
  )
}