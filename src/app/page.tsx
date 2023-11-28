import MaxWidthWrapper from './components/max-width-wrapper'

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className={`py-20 mx-auto text-center flex flex-col items-center max-w-3xl`}>
        <h1 className={`text-4xl font-bold tracking-tighter text-gray-900 sm:text-6xl `}>
          O mais completo site sobre <span className={`text-red-600`}>Demon Slayer</span>.
        </h1>
      </div>
    </MaxWidthWrapper>
  )
}
