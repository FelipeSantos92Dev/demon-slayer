import Link from 'next/link'

import MaxWidthWrapper from './components/max-width-wrapper'
import { buttonVariants } from '@/components/ui/button'

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className={`py-20 mx-auto text-center flex flex-col items-center max-w-3xl`}>
        <h1 className={`text-4xl font-bold tracking-tighter text-gray-900 sm:text-6xl `}>
          O mais completo site sobre <span className={`text-red-600`}>Demon Slayer</span>.
        </h1>

        <p className={`mt-6 text-lg max-w-prose text-muted-foreground`}>
          Aproveite o melhor conteúdo sobre o anime e mangá de Kimetsu no Yaiba.
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 mt-6`}>
          <Link href={`/personagens`} className={buttonVariants()}>
            Personagens
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
