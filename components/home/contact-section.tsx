"use client";

import { contactSchema } from "@/lib/schemas/contacting.schema";
import { useState } from "react";
import { z } from "zod";
import { BackgroundBeams } from "../ui/background-beams";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import { ContactDialog } from "./contact-dialog";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (values: string[]) => {
    setEmail(values[0]);
  };

  const handleInputSubmit = () => {
    try {
      contactSchema.email.parse(email);
      setError("");
      setIsOpen(true);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError(error.errors[0].message);
      }
    }
  };

  const handleDialogSubmit = (data: {
    email: string;
    message: string;
    reason: string;
  }) => {
    console.log(data);
    setIsOpen(false);
    setEmail("");
  };

  return (
    <>
      <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased pt-100">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
            Contact me
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Provide your Email and a short description of your request. I will
            answer you as soon as possible.
          </p>
          <PlaceholdersAndVanishInput
            placeholders={[
              "your@email.com",
              "Provide your email to be able to add a message ",
            ]}
            onChange={handleInputChange}
            onSubmit={handleInputSubmit}
            error={error}
          />
        </div>
        <BackgroundBeams />
      </div>

      <ContactDialog
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        email={email}
        onSubmit={handleDialogSubmit}
      />
    </>
  );
};
