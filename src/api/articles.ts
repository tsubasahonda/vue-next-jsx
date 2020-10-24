export type ArticleType = {
  title: string;
  date: string;
  tags: string[];
};

const articles: ArticleType[] = [
  {
    title: "今日の日記",
    date: "2020-12-12",
    tags: ["diary"],
  },
  {
    title: "明日は晴れるかもしれないし晴れないかもしれない",
    date: "2019-10-10",
    tags: ["diary", "poem"],
  },
  {
    title: "秒速1億稼げたのでその手法を公開する",
    date: "2018-04-24",
    tags: ["poem", "investment", "money"],
  },
  {
    title: "11時代は長針と短針が重ならないらしいねTV",
    date: "2017-09-27",
    tags: ["poem", "money", "salon"],
  },
];

export const getAritlces = (tag?: string): ArticleType[] => {
  if (!tag) {
    return articles.filter((article) => article.tags.filter((v) => v === tag));
  }
  return articles;
};
