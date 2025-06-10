import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-zinc-800 mb-4 font-urbanist">
            Planning to Move to Australia?
          </h1>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto font-urbanist">
            From visas to universities, job options to eligibility get instant,
            expert answers.
          </p>
        </div>
      </div>
    </div>
  );
}
