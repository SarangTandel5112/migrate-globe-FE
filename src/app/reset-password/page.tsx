'use client'

import ResetPassword from "@/components/reset-password";
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function ResetPasswordContent() {
    const searchParams = useSearchParams()
    const idToken = searchParams.get('code')
    
    return (
        <div className="container-1200">
            <ResetPassword idToken={idToken} />
        </div>
    );
}

export default function Page() {
    return (
        <Suspense fallback={<div className="container-1200">Loading...</div>}>
            <ResetPasswordContent />
        </Suspense>
    );
}
