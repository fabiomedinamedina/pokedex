import { StatusDisplay } from '@/components'
import Image from 'next/image'

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
        title='No encontrado'
        description='Oooops! no se ha encontrado el Pokémon.'
        href={{
          title: 'Ver Pokémons',
          path: '/dashboard/pokemons'
        }}
      />
    </div>
  )
}