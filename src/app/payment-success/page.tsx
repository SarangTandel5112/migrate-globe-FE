
interface SuccessPageProps {
//   params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default function SuccessPage({ searchParams }: SuccessPageProps) {
  const searchP = searchParams;
  console.log({ searchP });

  return (
    <div className="container-1200 flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      {/* Success Icon */}
      <div className="bg-green-100 p-5 rounded-full mb-6">
        <svg
          className="w-12 h-12 text-green-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      {/* Main Message */}
      <h1 className="text-2xl md:text-3xl font-bold text-green-700 mb-2">
        Payment Successful
      </h1>
      <p className="text-base md:text-lg text-gray-600 max-w-md">
        Your consultation has been booked successfully. We’ve sent a confirmation email with the details.
      </p>

      {/* Optional: Button to go back */}
      {/* <button
        className="mt-6 bg-navy-blue text-white px-6 py-2 rounded-lg font-medium hover:bg-navy-blue/90 transition"
        onClick={() => (window.location.href = "/")}
      >
        Go to Home
      </button> */}
    </div>
  );
}
