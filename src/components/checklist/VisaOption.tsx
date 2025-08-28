import Link from "next/link";

const VisaOption = ({
  id,
  title,
  description,
  // visaId,
  loading,
  isConsultationOnly,
  handleBookConsltation,
  handleBuyChecklist
}: {
  id: string;
  title: string;
  visaId: string | number;
  description: string;
  isConsultationOnly: boolean | null;
  loading: boolean | null;
  handleBookConsltation: () => void;
  handleBuyChecklist: (id: string | number) => void;
}) => (
  <div className="bg-background-1 rounded-lg p-4 md:p-6 flex flex-col gap-6">
    <div className="flex flex-col gap-2">
      <h3 className="text-navy-blue text-base font-semibold tracking-[0.24px] capitalize">
        {title}
      </h3>
      <p className="text-navy-blue-400 text-xs tracking-[0.2px] capitalize leading-normal">
        {description}
      </p>
    </div>
    <div className="flex gap-4 sm:gap-5">
      {!isConsultationOnly ? (
        <>
          <Link
            href={`checklists/${id}`}
            className="flex-1 text-center sm:flex-none px-6 py-2 border border-neutrals-300 rounded text-neutrals-700 text-sm font-medium tracking-[0.46px] hover:border-neutrals-400 transition-colors"
          >
            More info
          </Link>
          <button
            onClick={() => !loading && handleBuyChecklist(id)}
            className={`flex-1 sm:flex-none px-6 py-2 ${loading ? 'bg-neutral-600 cursor-not-allowed' : 'bg-navy-blue hover:bg-navy-blue-600'} text-white rounded text-sm font-medium tracking-[0.46px] transition-colors`}
            disabled={loading || false}
          >
            {loading ? 'Processing...' : 'Buy checklist'}
          </button>
        </>
      ) : (
        <button onClick={handleBookConsltation} className="flex-1 sm:flex-none px-6 py-2 bg-navy-blue text-white rounded text-sm font-medium tracking-[0.46px] hover:bg-navy-blue-600 transition-colors">
          Book Consultation
        </button>
      )}
    </div>
  </div>
);

export default VisaOption;
