import { Award } from "@/hooks";

export const Major = ({ data }: { data: Award }) => {
  return (
    <>
      <p className={`absolute ${data.award.includes("Field") ? "lg:mb-40 md:mb-36 sm:mb-32 mb-[80px]" : "lg:mb-36 md:mb-32 sm:mb-28 mb-[70px]"} uppercase text-center text-secondary-200 md:[font-size:clamp(14px,3vw,30px)] [font-size:clamp(12px,3vw,30px)] scale-75 `}>
        {data?.award}
      </p>
      <p className="absolute text-secondary-200 text-center md:[font-size:clamp(14px,4vw,40px)] [font-size:clamp(14px,4vw,40px)]">
        {data?.name}
      </p>
      <img
        className="w-full pointer-events-none h-full object-contain rounded"
        src="/images/certificates/major-cert.png"
        alt="Major Certificate"
      />
    </>
  );
};
