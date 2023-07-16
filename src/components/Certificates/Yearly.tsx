import { Award } from "@/hooks";

export const Yearly = ({ data }: { data: Award }) => {
  return (
    <>
      <p className="absolute lg:mb-32 md:mb-28 sm:mb-24 mb-16 uppercase text-[#C6C6C6] text-center [font-size:clamp(14px,3vw,30px)] scale-75">
        {data?.award}
      </p>
      <p className="absolute lg:mt-16 md:mt-14 text-center sm:mt-12 mt-8 text-primary-100 [font-size:clamp(14px,4vw,40px)]">
        {data?.name}
      </p>
      <img
        className="w-full pointer-events-none h-full object-contain rounded"
        src="/images/certificates/yearly-cert.png"
        alt="Yearly Certificate"
      />
    </>
  );
};
