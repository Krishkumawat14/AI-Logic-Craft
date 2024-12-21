interface GradientHeadingProps {
    children: React.ReactNode
    className?: string
  }
  
  export function GradientHeading({ children, className = "" }: GradientHeadingProps) {
    return (
      <h1 className={text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 pb-4 leading-relaxed ${className}}>
        {children}
      </h1>
    )
  }