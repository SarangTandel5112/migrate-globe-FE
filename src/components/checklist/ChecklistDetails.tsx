import React from "react";
import { motion } from "framer-motion";
import { RichTextBlock } from "@/utils/interface";

// Function to render rich text from Strapi
const renderRichText = (description: RichTextBlock[]) => {
  return description.map((block, index) => {
    if (block.type === "paragraph") {
      return (
        <p key={index} className="text-base text-neutrals leading-6 tracking-[0.2px] capitalize">
          {block.children.map((child, childIndex) => (
            <span key={childIndex}>{child.text}</span>
          ))}
        </p>
      );
    }
    // Add more block types here if needed (e.g., headings, lists)
    return null;
  });
};


function ChecklistDetails({
    title,
    description,
  }: {
    title: string;
    description: RichTextBlock[];
  }) {
    return (
        <>
            {/* Image Section */}
            <motion.div
                className="w-full h-40 bg-gradient-to-r from-navy-blue to-[#515F8F] rounded-lg flex items-center justify-center relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {/* Visa document graphic representation */}
                <div className="absolute inset-0 opacity-20"></div>
            </motion.div>

            {/* Visa Information */}
            <motion.div
                className="space-y-4 mt-6"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            staggerChildren: 0.2,
                            ease: "easeOut",
                        },
                    },
                    hidden: { opacity: 0, y: 20 },
                }}
            >
                <motion.h2
                    className="font-bold text-base text-neutrals-700 tracking-[0.608px]"
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 20 },
                    }}
                    transition={{ duration: 0.6 }}
                >
                    {title}
                </motion.h2>
                <motion.div
                    className="text-base text-neutrals leading-6 tracking-[0.2px] capitalize"
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 20 },
                    }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                   {description && renderRichText(description)}
                </motion.div>
            </motion.div>
        </>
    );
}

export default ChecklistDetails;
