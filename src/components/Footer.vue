<template>
  <footer>
    <div class="container-lg">
      <div class="flex-between">
        <div class="footer__contact flex">
          <div class="footer__logo">
            <RouterLink to="/">
              <img
                src="../assets/img/malex-logo.png"
                alt="Malex Bau Logo"
                class="logo footer__logo"
              />
            </RouterLink>
          </div>
          <div class="footer__address">
            <strong>Malex Bau GmbH</strong> <br />Lange Gasse 28 <br />CH - 4052
          </div>
          <div class="footer__web">
            <p>info@malex-bau.ch</p>
            <p>+41 61 401 10 87</p>
          </div>
        </div>

        <div>
          <div class="footer__socials">
            <img src="../assets/icons/fb.svg" alt="facebook icon" />
            <img src="../assets/icons/youtube.svg" alt="facebook icon" />
            <img src="../assets/icons/insta.svg" alt="facebook icon" />
          </div>
          <div class="footer__link">
            <RouterLink to="/impressum">Impressum</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
