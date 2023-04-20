<script setup></script>

<template>
  <main>
    <section class="hero">
      <div class="hero__fade"></div>
      <div class="container-lg">
        <div class="hero__content">
          <h1 class="prefix">Malex Bau GmbH</h1>
          <h2 class="tagline">
            Der perfekte Partner in Sachen <br /><span
              class="animation__wrapper"
            ></span>
          </h2>
          <p class="hero__text">Wir beraten Sie gerne</p>
          <RouterLink to="/offerte" class="btn"
            >Jetzt Ihre Offerte anfordern</RouterLink
          >
        </div>
      </div>
    </section>
    <section class="welcome">
      <div class="container-lg flex">
        <div>
          <h3>Willkommen bei Malex Bau</h3>
          <p>
            Entdecken Sie unsere umfassenden Baudienstleistungen, die Ihr
            Projekt von Anfang bis Ende begleiten – von Neubauten über Umbauten
            bis hin zu Renovierungen. Profitieren Sie von unserer transparenten
            und sorgfältigen Arbeitsweise, die Ihr Projekt zum Erfolg führt.
            Kontaktieren Sie uns noch heute und starten Sie Ihr Bauvorhaben mit
            uns als verlässlichem Partner!
          </p>
        </div>
      </div>
    </section>
    <section class="dienstleistungen">
      <div class="container-lg flex-between">
        <RouterLink to="/dienstleistungen" class="dienstleistungen__item">
          <div class="baubegleitung">
            <div class="dienstleistungen__caption">Baubegleitung</div>
          </div>
        </RouterLink>
        <RouterLink to="/dienstleistungen" class="dienstleistungen__item">
          <div class="bauten">
            <div class="dienstleistungen__caption">Neu - & Umbauten</div>
          </div>
        </RouterLink>
        <RouterLink to="/dienstleistungen" class="dienstleistungen__item">
          <div class="malerarbeiten">
            <div class="dienstleistungen__caption">Malerarbeiten</div>
          </div>
        </RouterLink>
        <RouterLink to="/dienstleistungen" class="dienstleistungen__item">
          <div class="gipserarbeiten">
            <div class="dienstleistungen__caption">Gipserarbeiten</div>
          </div>
        </RouterLink>
        <RouterLink to="/dienstleistungen" class="dienstleistungen__item">
          <div class="boden">
            <div class="dienstleistungen__caption">Bodenbeläge</div>
          </div>
        </RouterLink>
        <RouterLink
          to="/offerte"
          class="dienstleistungen__item dienstleistungen__item-cta"
        >
          <p>
            Zögern Sie nicht und fordern Sie noch heute Ihre unverbindliche
            Offerte an.
          </p>
        </RouterLink>
      </div>
    </section>
  </main>
</template>
