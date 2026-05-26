import type { APIResponse, Technology } from "@/app/api/lib/models";

const useTechnologies = (
  data: APIResponse[] = [],
  addItems: Technology[] = [],
) => {
  const ids = data.map((item) => item.id);
  return Array.from(new Set([...addItems, ...ids]));
};

export default useTechnologies;
