"use client"

import { motion } from "framer-motion"

interface LanguageIconProps {
  selected?: boolean
}

export function EnglishIcon({ selected = false }: Readonly<LanguageIconProps>) {
  return (
    <motion.div
      className="relative w-10 h-10 flex items-center justify-center"
      initial={{ scale: 1 }}
      animate={{ scale: selected ? 1.05 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(4, 8)">
          <motion.rect
            width="32"
            height="24"
            rx="4"
            fill="#2E42A5"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <path d="M0 0V2.67L28.44 24H32V21.33L3.56 0H0Z" fill="#F0F0F0" />
          <path d="M32 0V2.67L3.56 24H0V21.33L28.44 0H32Z" fill="#F0F0F0" />
          <path d="M12.8 0V24H19.2V0H12.8Z" fill="#F0F0F0" />
          <path d="M0 8V16H32V8H0Z" fill="#F0F0F0" />
          <path d="M14.4 0V24H17.6V0H14.4Z" fill="#D80027" />
          <path d="M0 9.6V14.4H32V9.6H0Z" fill="#D80027" />
          <path d="M0 0V1.6L30.4 24H32V22.4L1.6 0H0Z" fill="#D80027" />
          <path d="M32 0V1.6L1.6 24H0V22.4L30.4 0H32Z" fill="#D80027" />
        </g>
      </svg>
      {selected && (
        <motion.div
          className="absolute inset-0 rounded-md bg-primary/10"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.4 }}
        />
      )}
    </motion.div>
  )
}

export function FrenchIcon({ selected = false }: Readonly<LanguageIconProps>) {
  return (
    <motion.div
      className="relative w-10 h-10 flex items-center justify-center"
      initial={{ scale: 1 }}
      animate={{ scale: selected ? 1.05 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(4, 8)">
          <rect width="32" height="24" rx="4" fill="#F0F0F0" />
          <path d="M0 0H10.67V24H0V0Z" fill="#0052B4" />
          <path d="M21.33 0H32V24H21.33V0Z" fill="#D80027" />
        </g>
      </svg>
      {selected && (
        <motion.div
          className="absolute inset-0 rounded-md bg-primary/10"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.4 }}
        />
      )}
    </motion.div>
  )
}

export function SpanishIcon({ selected = false }: Readonly<LanguageIconProps>) {
  return (
    <motion.div
      className="relative w-10 h-10 flex items-center justify-center"
      initial={{ scale: 1 }}
      animate={{ scale: selected ? 1.05 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(4, 8)">
          <rect width="32" height="24" rx="4" fill="#FFDA44" />
          <path d="M0 6H32V18H0V6Z" fill="#D80027" />
          <path
            d="M8 12C8 13.1 7.1 14 6 14C4.9 14 4 13.1 4 12C4 10.9 4.9 10 6 10C7.1 10 8 10.9 8 12Z"
            fill="#ACABB1"
          />
        </g>
      </svg>
      {selected && (
        <motion.div
          className="absolute inset-0 rounded-md bg-primary/10"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.4 }}
        />
      )}
    </motion.div>
  )
}
