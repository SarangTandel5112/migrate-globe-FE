import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="text-6xl font-bold text-navy-blue">404</h1>
      <p className="text-xl text-gray-600 mt-4">
        Oops! The page you&apos;re looking for does not exist.
      </p>
      {/* <Link href={'/'}>Home Page</Link> */}
      {/* <p className="text-sm text-gray-500 mt-2">
        You will be redirected to the homepage shortly...
      </p> */}
      <div className="mt-5">
        <Link
            href={'/'}
            // onClick={() => window.location.href = '/'}
            className="mt-10 bg-navy-blue text-white py-2 px-4 rounded-lg hover:bg-navy-blue-700"
        >
            Go to Homepage
        </Link>
      </div>
    </div>
  );
}
