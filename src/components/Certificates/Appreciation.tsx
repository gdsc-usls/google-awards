import { Award } from "@/hooks";

export const Appreciation = ({ data }: { data: Award }) => {
  return (
    <>
      <p className="absolute text-primary-100 text-center [font-size:clamp(14px,4vw,40px)] md:mt-6 mt-4">
        {data?.name}
      </p>
      <img
        className="w-full pointer-events-none h-full object-contain rounded"
        src="/images/certificates/appreciation-cert.png"
        alt="Appreciation Certificate"
      />
    </>
  );
};
