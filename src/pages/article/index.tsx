"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import HeaderOther from "@/components/headerOther";
import ArticleComp from "@/components/articleComponent";
import ArticleCompReverse from "@/components/articleComponentReverse";

type IData = {
  id: number;
  href:string
  img: string;
  title: string;
  summary: string;
};

function Article() {
  const [articles, setArticles] = useState<IData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get<IData[]>("http://localhost:3001/article");
        setArticles(response.data);
      } catch (err) {
        setError("خطا در دریافت داده‌ها");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <HeaderOther header="مقالات" text="نوشته‌های قهوه لمیز" />
      
      {loading && <p className="text-center mt-4">در حال بارگذاری...</p>}
      {error && <p className="text-center text-red-600 mt-4">{error}</p>}

      <div>
        {articles.map((item, index) =>
          index % 2 === 0 ? (
            <ArticleComp
              key={item.id}
              href={item.href}
              img={item.img}
              title={item.title}
              text={item.summary}
            />
          ) : (
            <ArticleCompReverse
              key={item.id}
              href={item.href}
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
