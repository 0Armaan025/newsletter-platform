"use client";

import { SignIn } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return (
    <div className="w-full flex h-screen items-center justify-center">
      <SignIn signUpUrl="/sign-up" />
    </div>
  );
};

export default Page;
