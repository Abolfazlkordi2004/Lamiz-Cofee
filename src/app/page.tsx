// import Home_page from "@/pages/Home_page";
// import Page from "@/pages/shop/[id]/shopPage";

// import BranchPage from "@/pages/branches/branchPage";
import Page from "@/pages/product-category/coffee/[slug]";


export default function Home() {
  return (
    <>
       <Page product={{
        id: 0,
        img: "",
        title: "",
        price: ""
      }}/>
    </>
  );
}
