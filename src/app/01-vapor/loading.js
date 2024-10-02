import React from "react";

import LibraryGameCardSkeleton from "@/components/LibraryGameCardSkeleton";
import ArticleWrapper from "@/components/ArticleWrapper";

import { range } from "@/utils";

function LibraryGameCardLoading() {
  return (
    <ArticleWrapper title="My games">
      <div className="game-grid">
        {range(12).map((index) => (
          <LibraryGameCardSkeleton key={index} />
        ))}
      </div>
    </ArticleWrapper>
  );
}

export default LibraryGameCardLoading;
