import { cn } from '@/lib/utils'

const MaxWidthWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn(`max-w-screen-xl mx-auto w-full px-2.5 md:px-20`, className)}>{children}</div>
}

export default MaxWidthWrapper
