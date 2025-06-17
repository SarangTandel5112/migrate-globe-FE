import CheckIcon from '@/components/icons/CheckIcon'
import Image from 'next/image'
import React from 'react'

const ComparisonTable = () => {
  const insuranceProviders = [
    { name: 'ZURICH', price: '$641.79', logo: '/images/zurich-logo.png' },
    { name: 'BUPA', price: '$641.79', logo: '/images/bupa-logo.png' },
    { name: 'NIB', price: '$641.79', logo: '/images/nib-logo.png' },
    { name: 'VIG', price: '$641.79', logo: '/images/vig-logo.png' },
    { name: 'WINNER', price: '$641.79', logo: '/images/winner-logo.png' },
  ]

  const features = [
    { name: 'Public Hospital', type: 'checkmark', values: [true, true, true, true, true] },
    { name: 'Private Hospital', type: 'checkmark', values: [true, true, true, true, true] },
    { name: 'Private Room', type: 'checkmark', values: [true, true, true, true, true] },
    { name: 'Ambulance Services', type: 'checkmark', values: [true, true, true, true, true] },
    { name: 'Prescription Medicines', type: 'checkmark', values: [true, true, true, true, true] },
    {
      name: 'Psychiatric Conditions',
      type: 'text',
      values: ['2 Months', '2 Months', '2 Months', '2 Months', '2 Months'],
    },
    {
      name: 'Pregnancy Coverage',
      type: 'text',
      values: ['12 Months', '12 Months', '12 Months', '12 Months', '12 Months'],
    },
    {
      name: 'Other Pre-Existing',
      type: 'text',
      values: ['2 Months', '2 Months', '2 Months', '2 Months', '2 Months'],
    },
    {
      name: 'Refund Policy',
      type: 'text',
      values: ['Online Only', 'Online Only', 'Online Only', 'Online Only', 'Online Only'],
    },
  ]

  return (
    <div className="overflow-x-auto bg-white border border-neutrals-200 rounded-2xl shadow-lg">
      <div
        className="grid rounded-2xl shadow-sm min-w-[700px]"
        // style={{ gridTemplateColumns: `200px repeat(${insuranceProviders.length}, 1fr)` }}
        style={{ gridTemplateColumns: `minmax(200px, auto) repeat(${insuranceProviders.length}, minmax(120px, 1fr))` }}

      >
        {/* Header Row */}
        <div className="sticky left-0 z-10 bg-white border-r border-b border-neutrals-200 p-6">
          <h3 className="text-navy-blue text-base font-semibold tracking-[0.2px] capitalize">Features</h3>
        </div>
        {insuranceProviders.map((provider, index) => (
          <div
            key={index}
            className="border-b border-r last:border-r-0 border-neutrals-200 p-3 md:p-5"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 md:w-16 md:h-12 bg-neutrals-100 rounded flex items-center justify-center">
                <Image src={provider.logo} alt={provider.name} width={50} height={40} />
              </div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full gap-1">
                <h4 className="text-navy-blue text-sm md:text-base font-semibold tracking-[0.2px] capitalize text-center md:text-left">
                  {provider.name}
                </h4>
                <span className="text-navy-blue-400 text-xs font-semibold tracking-[0.2px] text-center md:text-right">
                  ({provider.price})
                </span>
              </div>
              <button className="w-full bg-navy-blue text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-navy-blue-600 transition-colors tracking-[0.608px] capitalize">
                Purchase
              </button>
            </div>
          </div>
        ))}

        {/* Feature Rows */}
        {features.map((feature, featureIndex) => (
          <React.Fragment key={featureIndex}>
            {/* Feature name cell */}
            <div className="sticky left-0 z-10 bg-white border-t border-b border-r border-neutrals-200 p-6">
              <h4 className="text-navy-blue text-base font-bold tracking-[0.2px] capitalize">
                {feature.name}
              </h4>
            </div>

            {/* Feature values */}
            {feature.values.map((value, valueIndex) => (
              <div
                key={valueIndex}
                // className="border-t border-b border-r last:border-r-0 border-neutrals-200 p-6 flex justify-center items-center"
                className="border-t border-b border-r border-neutrals-200 p-6 flex justify-center items-center"

              >
                {feature.type === 'checkmark' ? (
                  value ? (
                    <CheckIcon />
                  ) : (
                    <div className="w-6 h-6" />
                  )
                ) : (
                  <span className="text-navy-blue text-base font-bold tracking-[0.2px] capitalize text-center">
                    {value}
                  </span>
                )}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default ComparisonTable
