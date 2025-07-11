"use client";
import { motion } from "framer-motion";
import VisaDetail from "@/components/visa/VisaDetails";
import ArrowDownIcon from "@/components/icons/ArrowDown";
import { useEffect, useRef, useState } from "react";
import CustomSelect, { Option } from "@/ui/CustomSelect";
import { visaContainerVariants } from "@/utils/animation-variant";
import { visa, VisaType } from "@/utils/interface";

export default function VisaDetails({
  visaDetails,
  visaTypesDetails,
}: {
  visaDetails: VisaType;
  visaTypesDetails: VisaType[];
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const visaDropdownList = visaTypesDetails?.map((visaType) => visaType.name);

  const visaOptions: Option[] = ((visaDetails?.visas as visa[]) ?? []).map(
    (currentVisa) => {
      return {
        label: currentVisa.title,
        value: currentVisa.documentId,
      };
    }
  );

  const [currentVisa, setCurrentVisa] = useState<visa | undefined>(
    Array.isArray(visaDetails.visas)
      ? (visaDetails.visas[0] as visa)
      : undefined
  );

  const [selected, setSelected] = useState<Option>({
    label: currentVisa?.title || "",
    value: currentVisa?.documentId || "",
  });

  const onVisaChange = (selectedVisa: Option) => {
    const newVisa = (visaDetails.visas as visa[])?.find(
      (v) => v.documentId === selectedVisa.value
    );
    setSelected(selectedVisa);
    setCurrentVisa(newVisa);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex justify-between items-start">
          <div className="relative" ref={dropdownRef}>
            {/* Student Visa Header with Dropdown */}
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setOpen((prev) => !prev)}
            >
              <h1 className="text-heading1 text-navy-blue ">{visaDetails.name}</h1>
              <span className="text-xs ml-2">
                {open ? (
                  <ArrowDownIcon className="rotate-180" color="#263773" />
                ) : (
                  <ArrowDownIcon color="#263773" />
                )}
              </span>
            </div>

            {/* Dropdown Popover */}
            {open && (
              <div className="absolute top-full mt-2 w-56 max-h-[350px] overflow-y-auto bg-white border border-gray-200 shadow-xl rounded-md z-50">
                <ul className="space-y-4 p-3">
                  {visaDropdownList?.map((o, i) => {
                    return (
                      <li
                        key={i}
                        className="text-sm text-neutrals hover:text-navy-blue cursor-pointer"
                      >
                        {o}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>

          <button className="bg-navy-blue text-white px-6 py-2 rounded-md text-sm font-medium">
            Book a Consultation
          </button>
        </div>

        <div className="border-b border-[#DEE2E5]"></div>

        {/* Animated Visa Type Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={visaContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="relative">
            <CustomSelect
              options={visaOptions}
              selected={selected}
              onChange={onVisaChange}
            />
          </div>
        </motion.div>

        {/* Animated Heading */}
        <motion.h3
          className="text-heading1 text-navy-blue"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {currentVisa?.title}
        </motion.h3>

        {/* Animated Visa Detail */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <VisaDetail
            title={currentVisa?.title}
            description={currentVisa?.description}
            image={
              currentVisa?.visaImage?.url
                ? `https://admin.migrateglobe.com${currentVisa.visaImage.url}`
                : undefined
            }
          />
        </motion.div>
      </div>
    </div>
  );
}
