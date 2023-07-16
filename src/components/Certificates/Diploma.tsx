import { Award } from "@/hooks";

export const Diploma = ({ data }: { data: Award }) => {
  return (
    <>
      <p className="absolute text-secondary-200 text-center [font-size:clamp(14px,6vw,60px)] sm:mb-6 mb-4 font-edwardian-script">
        {data?.name}
      </p>
      <img
        className="w-full pointer-events-none h-full object-contain rounded"
        src="/images/certificates/diploma-cert.png"
        alt="Diploma Certificate"
      />
    </>
  );
};
