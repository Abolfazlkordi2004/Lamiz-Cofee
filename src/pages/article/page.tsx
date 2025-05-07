import ArticleComp from "@/components/articleComponent";
import ArticleCompReverse from "@/components/articleComponentReverse";
import HeaderOther from "@/components/headerOther";
import axios from "axios";
import React from "react";

type IData = {
  id: number;
  img: string;
  title: string;
  summary: string;
};

async function Article() {
  const response = await axios.get<IData[]>("http://localhost:3001/article");
  const articles = response.data;

  return (
    <div>
      <HeaderOther header="مقالات" text="نوشته‌های قهوه لمیز" />
      <div>
        {articles.map((item, index) =>
          index % 2 === 0 ? (
            <ArticleComp
              key={item.id}
              img={item.img}
              title={item.title}
              text={item.summary}
            />
          ) : (
            <ArticleCompReverse
              key={item.id}
              img={item.img}
              title={item.title}
              text={item.summary}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Article;
