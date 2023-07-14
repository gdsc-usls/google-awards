import awards from "@/data/awards.json";

type Award = {
  id: string;
  name: string;
  award: string;
  type: string;
};

export const useAward = (id: string) => {
  const _data: Award[] = JSON.parse(JSON.stringify(awards));
  const data = _data.find((item) => item.id === id);

  return { data };
};
