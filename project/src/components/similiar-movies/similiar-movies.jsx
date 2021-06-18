import React from 'react';

function SimiliarMovie() {

  return (
    <section class="catalog catalog--like-this">
      <h2 class="catalog__title">More like this</h2>

      <div class="catalog__films-list">
        <article class="small-film-card catalog__films-card">
          <div class="small-film-card__image">
            <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
          </div>
          <h3 class="small-film-card__title">
            <a class="small-film-card__link" href="film-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
          </h3>
        </article>

        <article class="small-film-card catalog__films-card">
          <div class="small-film-card__image">
            <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175" />
          </div>
          <h3 class="small-film-card__title">
            <a class="small-film-card__link" href="film-page.html">Bohemian Rhapsody</a>
          </h3>
        </article>

        <article class="small-film-card catalog__films-card">
          <div class="small-film-card__image">
            <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175" />
          </div>
          <h3 class="small-film-card__title">
            <a class="small-film-card__link" href="film-page.html">Macbeth</a>
          </h3>
        </article>

        <article class="small-film-card catalog__films-card">
          <div class="small-film-card__image">
            <img src="img/aviator.jpg" alt="Aviator" width="280" height="175" />
          </div>
          <h3 class="small-film-card__title">
            <a class="small-film-card__link" href="film-page.html">Aviator</a>
          </h3>
        </article>
      </div>
  </section>);
}
