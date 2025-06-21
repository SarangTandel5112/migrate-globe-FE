'use client';
import { Fragment } from 'react';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react';
import ArrowDownIcon from '@/components/icons/ArrowDown';

export interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  options: Option[];
  selected: Option;
  onChange: (value: Option) => void;
  className?: string;
}

export default function CustomSelect({
  options,
  selected,
  onChange,
  className = '',
}: CustomSelectProps) {
  return (
    <div className={`w-full relative ${className}`}>
      <Listbox value={selected} onChange={onChange}>
        <div className="relative">
          <ListboxButton className="w-full rounded border-2 border-navy-blue bg-background-1 py-3 pl-4 pr-10 text-left text-base font-semibold text-neutrals-700 tracking-[0.24px] focus:outline-none">
            {selected.label}
            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <ArrowDownIcon className="text-navy-blue" />
            </span>
          </ListboxButton>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg border border-gray-200 focus:outline-none text-base">
              {options.map((option) => (
                <ListboxOption
                  key={option.value}
                  value={option}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 rounded ${
                      active
                        ? 'bg-navy-blue text-white'
                        : 'text-gray-900 hover:bg-navy-blue hover:text-white'
                    }`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {option.label}
                      </span>
                      {/* {selected ? (
                        <span className="absolute left-2 inset-y-0 flex items-center">
                          <ArrowDownIcon className="h-5 w-5 text-white" />
                        </span>
                      ) : null} */}
                    </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
