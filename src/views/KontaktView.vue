<template>
  <div class="container-lg">
    <section>
      <h2>Kontakt</h2>
      <p>
        Haben Sie Fragen oder Anregungen? Dann zögern Sie nicht und senden Sie
        uns eine Nachricht.
      </p>
      <div class="contact">
        <div class="form__wrapper">
          <form ref="kontakt" @submit.prevent="sendEmail">
            <div class="input__wrapper">
              <div class="input__item">
                <label for="name">Name:</label>
                <input type="text" />
              </div>
              <div class="input__item">
                <label for="vorname">Vorname:</label>
                <input type="text" />
              </div>
            </div>
            <label for="adresse">Adresse:</label>
            <input type="text" />
            <div class="input__wrapper">
              <div class="input__item">
                <label for="plz">PLZ:</label>
                <input type="text" />
              </div>
              <div class="input__item">
                <label for="ort">Ort:</label>
                <input type="text" />
              </div>
            </div>
            <div class="input__wrapper">
              <div class="input__item">
                <label for="tel">Telefon:</label>
                <input type="text" />
              </div>
              <div class="input__item">
                <label for="mail">Email:</label>
                <input type="email" />
              </div>
            </div>
            <label for="nachricht">Ihre Nachricht:</label>
            <textarea></textarea>
            <button class="btn btn-sm submit">Senden</button>
          </form>
        </div>
        <aside class="form__aside">
          <h3>Kontakt Info</h3>
          <div class="aside__wrapper">
            <h4>Adresse</h4>
            MALEX BAU GmbH<br />
            Lange Gasse 28<br />
            4052 Basel, CH
          </div>
          <div class="aside__wrapper">
            <h4>Unsere Arbeitszeiten</h4>
            Mo - Fr: 07.00 - 18.00 Uhr<br />
            Sa: 08.00 - 16.00 Uhr
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_abvx4u5",
          "template_rnxzkko",
          this.$refs.kontakt,
          "gxdKtuqEpoXmluF0m"
        )
        .then(
          (result) => {
            console.log("SUCCESS");
          },
          (error) => {
            console.log("FAILED");
          }
        );
    },
  },
};
</script>
