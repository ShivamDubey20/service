"use client";

import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const shouldDelete = isDeleting;
    const shouldMoveToNext = !shouldDelete && currentText === currentWord.text;
    const shouldStartDeleting = !shouldDelete && currentText === currentWord.text;

    const timeout = setTimeout(() => {
      if (shouldDelete) {
        setCurrentText(currentWord.text.substring(0, currentText.length - 1));
      } else if (shouldMoveToNext) {
        setIsDeleting(true);
      } else if (shouldStartDeleting) {
        setIsDeleting(true);
      } else {
        setCurrentText(currentWord.text.substring(0, currentText.length + 1));
      }
    }, shouldDelete ? 50 : 100);

    if (shouldDelete && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, words]);

  return (
    <div className={cn("text-base sm:text-xl md:text-3xl font-bold", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWordIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="inline-block"
        >
          {words[currentWordIndex].text.substring(0, currentText.length)}
          <span
            className={cn(
              "inline-block w-[1px] h-4 sm:h-6 md:h-8 bg-slate-900 dark:bg-slate-100 ml-1 animate-pulse",
              cursorClassName
            )}
          />
        </motion.span>
      </AnimatePresence>
    </div>
  );
}; 