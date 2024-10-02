import React from 'react';

import { getGamesInLibrary } from '@/helpers/vapor-helpers';
import LibraryGameCard from '@/components/LibraryGameCard';
import ArticleWrapper from "@/components/ArticleWrapper";

export const dynamic = 'force-dynamic';

async function VaporExercise() {
  const games = await getGamesInLibrary();
  return (
    <ArticleWrapper
      title="My games"
      headerChildren={
        <p>
          <span className="num-of-games">{games.length}</span> games in library
        </p>
      }
    >
      <div className="game-grid">
        {games.map((game) => (
          <LibraryGameCard key={game.slug} game={game} />
        ))}
      </div>
    </ArticleWrapper>
  );
}

export default VaporExercise;
