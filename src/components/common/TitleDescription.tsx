import { motion, easeOut } from "framer-motion";

function TitleDescription({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <motion.div
            className="flex flex-col gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
        >
            <h1 className="text-heading1 text-navy-blue font-semibold tracking-[0.608px]">
                {title}
            </h1>
            <p className="text-navy-blue-400 text-description1 leading-6 tracking-[0.2px] capitalize">
                {description}
            </p>
        </motion.div>
    );
}

export default TitleDescription;
