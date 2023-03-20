<script setup></script>

<template>
  <main>
    <section class="hero">
      <div class="container-lg">
        <div class="hero__content">
          <h1 class="prefix">Malex Bau GmbH</h1>
          <h2 class="tagline">
            Der perfekte Partner in Sachen <br /><span class="animation__wrapper"></span>
          </h2>
          <p class="hero__text">Wir beraten Sie gerne</p>
          <RouterLink to="/offerte" class="btn">Jetzt Ihre Offerte anfordern</RouterLink>
        </div>
      </div>
    </section>
    <section class="welcome">
      <div class="container-lg flex">
        <img src="../assets/img/malex-logo_bw.png" alt="" />
        <div>
          <h3>Willkommen bei Malex Bau</h3>
          <p>
            Unser Unternehmen bietet innen alle Dienstleistungen im Bereich Bau an. Ob Neubau, Umbau
            oder Renovationen – wir begleiten und unterstützen Ihr Projekt in jeder Phase, von der
            Planung über die Ausführung bis zur Abnahme. Wir führen alle unsere Arbeiten transparent
            und mit äußerster Sorgfalt durch.
          </p>
        </div>
      </div>
    </section>
    <section class="dienstleistungen">
      <div class="container-lg flex-between">
        <div class="dienstleistungen__item">
          <div class="baubegleitung">
            <div class="dienstleistungen__caption">Baubegleitung</div>
          </div>
        </div>
        <div class="dienstleistungen__item">
          <div class="bauten"><div class="dienstleistungen__caption">Neu - & Umbauten</div></div>
        </div>
        <div class="dienstleistungen__item">
          <div class="malerarbeiten">
            <div class="dienstleistungen__caption">Malerarbeiten</div>
          </div>
        </div>
        <div class="dienstleistungen__item">
          <div class="gipserarbeiten">
            <div class="dienstleistungen__caption">Gipserarbeiten</div>
          </div>
        </div>
        <RouterLink to="/dienstleistungen" class="dienstleistungen__item">
          <div class="reinigungen">
            <div class="dienstleistungen__caption">Reinigung</div>
          </div>
        </RouterLink>
        <RouterLink to="/offerte" class="dienstleistungen__item dienstleistungen__item-cta">
          <p>Zögern Sie nicht und fordern Sie noch heute Ihre unverbindliche Offerte an.</p>
        </RouterLink>
      </div>
    </section>
  </main>
</template>
