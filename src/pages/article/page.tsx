import ArticleComp from "@/components/articleComponent";
import ArticleCompReverse from "@/components/articleComponentReverse";
import HeaderOther from "@/components/headerOther";
import React from "react";

function Article() {
  return (
    <div>
      <HeaderOther header="مقالات" text="نوشته‌های قهوه لمیز" />
      <div>
        <ArticleComp
          img={"/img/inside-branches-Kish-2-1.webp"}
          title={"قهرمانی در مسابقات باریستایی"}
          text={
            "در مسابقات باریستایی، توانایی‌های باریستا از همه لحاظ بررسی می‌شود پس لازم است کاملا برای آن آماده‌باشید. با تمرین بیشتر، به مهارت‌های خود مسلط‌ تر شده و به درک بهتری از علاقه‌ی خود به قهوه می‌رسید. "
          }
        />
        <ArticleCompReverse
          img={"/img/inside-branches-Kish-2-1.webp"}
          title={"قهرمانی در مسابقات باریستایی"}
          text={
            "در مسابقات باریستایی، توانایی‌های باریستا از همه لحاظ بررسی می‌شود پس لازم است کاملا برای آن آماده‌باشید. با تمرین بیشتر، به مهارت‌های خود مسلط‌ تر شده و به درک بهتری از علاقه‌ی خود به قهوه می‌رسید. "
          }
        />
        <ArticleComp
          img={"/img/inside-branches-Kish-2-1.webp"}
          title={"قهرمانی در مسابقات باریستایی"}
          text={
            "در مسابقات باریستایی، توانایی‌های باریستا از همه لحاظ بررسی می‌شود پس لازم است کاملا برای آن آماده‌باشید. با تمرین بیشتر، به مهارت‌های خود مسلط‌ تر شده و به درک بهتری از علاقه‌ی خود به قهوه می‌رسید. "
          }
        />
        <ArticleCompReverse
          img={"/img/inside-branches-Kish-2-1.webp"}
          title={"قهرمانی در مسابقات باریستایی"}
          text={
            "در مسابقات باریستایی، توانایی‌های باریستا از همه لحاظ بررسی می‌شود پس لازم است کاملا برای آن آماده‌باشید. با تمرین بیشتر، به مهارت‌های خود مسلط‌ تر شده و به درک بهتری از علاقه‌ی خود به قهوه می‌رسید. "
          }
        />
      </div>
    </div>
  );
}

export default Article;
