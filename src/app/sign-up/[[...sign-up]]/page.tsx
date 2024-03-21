"use client";

import { SignUp } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return (
    <div className="w-full flex h-screen items-center justify-center">
      <SignUp signInUrl="/sign-in" />
    </div>
  );
};

export default Page;
