import ClientPage from "@/components/ClientPage";
import React from "react";
import getCurrentUser from "@/actions/getCurrentUser";

const page = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <div className="w-full h-screen flex justify-center items-center gap-2">
        Vous n&apos;êtes pas autorisé à accéder à cette page
      </div>
    );
  }

  return (
    <>
      <ClientPage />
    </>
  );
};

export default page;
