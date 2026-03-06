import * as React from 'react'

export default function GlassCard({children}:{children:React.ReactNode}){
  return(
    <div className="
     backdrop-blur-xl
     bg-white/10
     border border-white/20
     rounded-2xl
     p-8
     shadow-xl
    ">
     {children}
    </div>
  )
}