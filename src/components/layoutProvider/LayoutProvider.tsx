'use client'
import React, { ReactNode, Suspense } from 'react'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Loading from '@/ui/loading'
import Navbar from '@components/layout/Navbar'
import Footer from '@components/layout/Footer'

function LayoutProvider({ children }: { children: ReactNode }) {
  // !Query Client
//   const queryClient = new QueryClient({
//     defaultOptions: {
//       queries: {
//         retry: false,
//         refetchOnWindowFocus: false
//       }
//     }
//   })
  return (
    <Suspense fallback={<Loading />}>
      {/* <QueryClientProvider client={queryClient}> */}
        {/* <ToastContainer className="!fixed !top-0 !right-0 !z-50 !left-auto !translate-x-0" position='top-center' pauseOnHover={false} autoClose={2000} closeOnClick={true} draggable={true} /> */}
        <Navbar />
        <div className="relative container-1440 container-padding py-12">
            {children}
        </div>
        <Footer />
      {/* </QueryClientProvider> */}
    </Suspense>
  )
}

export default LayoutProvider
