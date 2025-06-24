import React from "react";
import SearchForm from "@/components/SearchForm";
import StartupCardType from "@/components/startupCard";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts=[{
    _createAt:new Date(),
    views:55,
    author:{_id:1,name:"涛"},
    _id:1,
    description:"这是一个关于Next.js的文章",
    image:"https://imgse.com/i/pVeMHjP",
    category:"我们",
    title:"我,Next.js和你", 
  },
]
  return (
    <div>
      <section className="pink_container pattern">
        <h1 className="heading">学习Next.js</h1>
        <p className="sub-heading !max-w-3xl ">
          Next.js是一个强大的React框架,提供了服务器端渲染、静态生成和API路由等功能。它使得构建现代Web应用变得更加高效和灵活。通过Next.js，你可以轻松创建高性能的应用，同时享受React生态系统的所有优势。
        </p>

        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `搜索结果:"${query}"` : "欢迎使用Next.js搜索功能!"}
        </p>
        <ul className="mt-7 card_grid">
        {posts?.length > 0 ? (
          posts.map((post:StartupCardType)=>(
            <StartupCardType key={post?._id}  post={post}/>
          ))
        ):(
          <p className="no-results">没有找到相关内容</p>
        )}
        
        </ul>
      </section>
    </div>
  );
}
