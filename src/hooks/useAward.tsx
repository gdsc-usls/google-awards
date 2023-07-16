import awards from "@/data/awards.json";

export type Award = {
  id: string;
  name: string;
  award: string;
  type: "yearly" | "major" | "diploma" | "appreciation";
};

export const useAward = (id: string) => {
  const _data: Award[] = JSON.parse(JSON.stringify(awards));
  const data = _data.filter((item) => item.id === id);

  return { data };
};
