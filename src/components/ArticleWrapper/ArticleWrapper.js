import React from 'react';

function ArticleWrapper({title, headerChildren, children}) {
  return (
    <section className="max-width-wrapper">
      <header className="library-header">
        <h1>{title}</h1>
        {headerChildren}
      </header>
      {children}
    </section>
  );
}

export default ArticleWrapper;
