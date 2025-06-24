import React from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

export default function SearchForm({ query }: { query?: string }) {
  return (
    <Form action={"/"} scroll={false} className="search-form">
      <input
        
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="搜索项目、用户、文章等"
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button type="submit" className="search-btn text-white ">
          <Search className="size-5"/>
        </button>
      </div>
    </Form>
  );
}
