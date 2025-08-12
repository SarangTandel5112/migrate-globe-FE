"use client";

import React, { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import BackIcon from "@/components/icons/BackIcon";
import UserIcon from "@/components/icons/UserIcon";
import BreifCaseIcon from "@/components/icons/BreifCaseIcon";
import ApplicationTypeButton from "@/components/checklist/ApplicationTypeButton";
import VisaOption from "@/components/checklist/VisaOption";
import ArrowDownIcon from "@/components/icons/ArrowDown";
import TitleDescription from "@/components/common/TitleDescription";
import { fadeUpVariants } from "@/utils/animation-variant";
import { ApplicationType, CheckListDetails } from "@/utils/interface";

interface Options {
  label: string;
  value: string;
}

export default function CheckList({
  checklists,
  applicationTypes,
}: {
  checklists: CheckListDetails[];
  applicationTypes: ApplicationType[];
}) {
  const router = useRouter();
  const [selectedEnquiryType, setSelectedEnquiryType] = useState<string | null>(
    null
  );
  const [selectedVisaCategory, setSelectedVisaCategory] = useState<string>("");

  // Reset selectedVisaCategory when enquiry type changes
  useEffect(() => {
    setSelectedVisaCategory("");
  }, [selectedEnquiryType]);

  const inquiryOptionsMap = useMemo(() => {
    return applicationTypes.reduce((acc, applicationType) => {
      acc[applicationType.title] = applicationType;
      return acc;
    }, {} as Record<string, ApplicationType>);
  }, [applicationTypes]);

  const { visaCategoryOptions, serviceTypeOptions } = useMemo(() => {
    const visaCategoryOptions: Options[] = [];
    const serviceTypeOptions: Options[] = [];
    const addedVisaTypeIds = new Set<string>();

    checklists.forEach((checklist) => {
      if (checklist?.application_type?.documentId !== selectedEnquiryType)
        return;

      if (checklist?.checkListType === "Service") {
        serviceTypeOptions.push({
          label: checklist?.title,
          value: checklist?.documentId,
        });
      } else {
        const visaType = checklist?.visa_type;
        if (visaType && !addedVisaTypeIds.has(visaType.documentId)) {
          visaCategoryOptions.push({
            label: visaType.name,
            value: visaType.documentId,
          });
          addedVisaTypeIds.add(visaType.documentId);
        }
      }
    });

    return { visaCategoryOptions, serviceTypeOptions };
  }, [checklists, selectedEnquiryType]);

  const allFilteredCheckList = useMemo(() => {
    const isVisaCategory = visaCategoryOptions.some(
      (visa) => visa?.value === selectedVisaCategory
    );
    if (isVisaCategory) {
      return checklists.filter(
        (checklist) => checklist?.visa_type?.documentId === selectedVisaCategory
      );
    } else {
      return checklists.filter(
        (checklist) => checklist?.documentId === selectedVisaCategory
      );
    }
  }, [selectedVisaCategory, visaCategoryOptions, checklists]);

  // Get the title of the selected option
  const selectedTitle = useMemo(() => {
    if (!selectedVisaCategory) return "";

    // Check in visa category options first
    const visaOption = visaCategoryOptions.find(
      (option) => option.value === selectedVisaCategory
    );
    if (visaOption) return visaOption.label;

    // Check in service type options
    const serviceOption = serviceTypeOptions.find(
      (option) => option.value === selectedVisaCategory
    );
    if (serviceOption) return serviceOption.label;

    return "";
  }, [selectedVisaCategory, visaCategoryOptions, serviceTypeOptions]);

  const ENQUIRY_OPTIONS = useMemo(
    () => [
      {
        type: "Individual",
        Icon: UserIcon,
        title: inquiryOptionsMap["Individual"]?.title,
        description: inquiryOptionsMap["Individual"]?.description,
        id: inquiryOptionsMap["Individual"]?.documentId,
      },
      {
        type: "Business",
        Icon: BreifCaseIcon,
        title: inquiryOptionsMap["Business"]?.title,
        description: inquiryOptionsMap["Business"]?.description,
        id: inquiryOptionsMap["Business"]?.documentId,
      },
    ],
    [inquiryOptionsMap]
  );

  const handleBookConsltation = () => {
    router.push(`/services/zoom-consultation?enquiry=${selectedEnquiryType}&visa=${selectedVisaCategory}`)    
  }

  return (
    <div className="flex flex-col gap-8">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-navy-blue hover:opacity-75 transition-opacity"
      >
        <BackIcon />
        <span className="font-urbanist font-semibold text-base text-navy-blue capitalize tracking-[0.2px]">
          Back
        </span>
      </button>

      <TitleDescription
        title="Buy Documents Checklists"
        description="Lorem ipsum dolor sit amet consectetur. Urna ullamcorper orci tortor sed morbi enim."
      />

      {/* ✅ Animate This Card */}
      <motion.div
        className="bg-white rounded-2xl p-4 md:p-6 flex flex-col gap-6 md:gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariants}
        custom={0}
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-navy-blue text-base font-semibold tracking-[0.24px] capitalize">
            Select Enquiry Type
          </h2>
          <div className="grid grid-cols-12 gap-4">
            {ENQUIRY_OPTIONS.map((option) => (
              <ApplicationTypeButton
                key={option.type}
                selected={selectedEnquiryType === option.id}
                onClick={() => setSelectedEnquiryType(option.id)}
                Icon={option.Icon}
                title={option.title}
                description={option.description}
              />
            ))}
          </div>
        </div>

        {selectedEnquiryType && (
          <div className="flex flex-col gap-2">
            <label className="text-navy-blue text-base font-semibold tracking-[0.24px] capitalize">
              Select Visa Category Or Service Type
            </label>
            <div className="relative">
              <select
                value={selectedVisaCategory}
                onChange={(e) => setSelectedVisaCategory(e.target.value)}
                className="w-full px-3 py-2.5 bg-background-1 border border-neutrals-200 rounded text-base text-navy-blue tracking-[0.24px] appearance-none cursor-pointer focus:outline-none focus:border-navy-blue-300"
              >
                <option value="" disabled>
                  Please select
                </option>
                {serviceTypeOptions.length > 0 && (
                  <optgroup label="Service Type">
                    {serviceTypeOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </optgroup>
                )}
                {visaCategoryOptions.length > 0 && (
                  <optgroup label="Visa Category">
                    {visaCategoryOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </optgroup>
                )}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <ArrowDownIcon />
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {selectedVisaCategory && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delayChildren: 0.4, // Increase initial delay
                staggerChildren: 0.25, // More delay between children for slower stagger
                duration: 0.8, // Add duration for the parent
                ease: [0.25, 0.1, 0.25, 1], // Smooth easing (equivalent to ease-out)
              },
            },
          }}
          className="bg-white rounded-2xl p-4 md:p-6 flex flex-col gap-6"
        >
          <h2 className="text-navy-blue text-heading1 font-semibold tracking-[0.608px]">
            {selectedTitle}
          </h2>

          <div className="flex flex-col gap-6">
            {allFilteredCheckList?.map((visa, index) => (
              <motion.div
                key={index}
                // variants={{
                //   hidden: { opacity: 0, y: 30 },
                //   visible: {
                //     opacity: 1,
                //     y: 0,
                //     transition: {
                //       duration: 0.7,
                //       ease: "easeOut",
                //       delay: index * 0.15,
                //     },
                //   },
                // }}
              >
                <VisaOption
                  id={visa.documentId}
                  title={visa.title}
                  description={visa.subtitle}
                  isConsultationOnly={visa.isConsultationOnly}
                  handleBookConsltation={handleBookConsltation}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
