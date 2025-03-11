'use client' // Error components must be Client Components

import Image from 'next/image'
import { useEffect } from 'react'

export default function Error({ error, reset }: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <Image
        alt='Error 500 Icon'
        src="/error-500-icon.svg"
        width={300}
        height={100}
      />
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600 mt-2">Error de servidor</p>
        <p className="md:text-lg xl:text-xl text-gray-500">Oooops! han ocurrido errores en el servidor.</p>
        <p className="text-sm text-gray-500">"{error.message}"</p>
      </div>
    </div>
  )
}