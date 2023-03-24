<template>
  <header>
    <div>
      <div class="infobar container-lg flex-between">
        <div>
          <strong>Malex Bau GmbH</strong>, Lange Gasse 28, 4052 Basel, Schweiz
        </div>
        <div class="infobar__contact">
          <div class="infobar__contact-item">
            <img
              src="../assets/icons/phone.svg"
              alt="phone icon"
              class="infobar__icon"
            /><span> +41 61 401 10 87 </span>
          </div>
          <div class="infobar__contact-item">
            <img
              src="../assets/icons/email.svg"
              alt="email icon"
              class="infobar__icon"
            /><span> info@malex-bau.ch </span>
          </div>
        </div>
      </div>
    </div>
    <div class="container-lg flex-between navbar">
      <div class="logo">
        <RouterLink to="/">
          <img
            src="../assets/img/malex-logo.png"
            alt="Malex Bau Logo"
            class="logo"
          />
        </RouterLink>
      </div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/dienstleistungen">Dienstleistungen</RouterLink>
        <RouterLink to="/galerie">Galerie</RouterLink>
        <RouterLink to="/kontakt">Kontakt</RouterLink>
        <RouterLink to="/offerte" class="btn btn-sm"
          >Offertenanfrage</RouterLink
        >
      </nav>
    </div>
  </header>
</template>
