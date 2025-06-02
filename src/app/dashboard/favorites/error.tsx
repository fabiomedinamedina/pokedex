'use client' // Error components must be Client Components

import { StatusDisplay } from '@/components'
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
      <StatusDisplay
        icon={
          <Image
            alt='Error 500 Icon'
            src="/error-500-icon.svg"
            width={300}
            height={100}
          />
        }
        title='Error de servidor'
        description='Oooops! han ocurrido errores en el servidor.'
        error={error.message}
      />
    </div>
  )
}