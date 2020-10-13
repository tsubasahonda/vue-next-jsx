export type MountainType = {
  title: string;
  description: string;
  height: string;
  countries: string[];
  continent: string;
  image: string;
  slug: string;
  updatedAt: string;
};

export const getMoutians = async () => {
  const mountains = await fetch("https://api.nuxtjs.dev/mountains");
  const data: MountainType[] = await mountains.json();
  return data;
};

export const getCountries = (mountains: MountainType[]) => {
  const data = Array.from(
    new Set(mountains.flatMap(mountain => mountain.countries))
  );
  return data;
};
