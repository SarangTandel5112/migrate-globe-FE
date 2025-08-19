import ResetPassword from "@/components/reset-password";

interface ResetPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Page({ searchParams } : ResetPageProps) {
    const resolvedSearchParams = await searchParams;
    // const idToken = resolvedSearchParams.id_token
    const idToken = Array.isArray(resolvedSearchParams.id_token)
    ? resolvedSearchParams.id_token[0] || null
    : resolvedSearchParams.id_token ?? null;
    return (
        <div className="container-1200">
            <ResetPassword idToken={idToken} />
        </div>
    );
}
