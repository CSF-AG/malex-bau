<template>
  <div class="container-lg">
    <section>
      <h2>Offertenanfrage</h2>
      <p>Fordern Sie noch heute unverbindlich Ihre gratis Offerte an.</p>
      <div class="contact">
        <div class="form__wrapper">
          <form ref="offerte" @submit.prevent="sendEmail">
            <div class="input__wrapper">
              <div class="input__item">
                <label for="name">Name:</label>
                <input type="text" name="nachname" />
              </div>
              <div class="input__item">
                <label for="vorname">Vorname:</label>
                <input type="text" name="vorname" />
              </div>
            </div>
            <label for="adresse">Adresse:</label>
            <input type="text" name="adresse" />
            <div class="input__wrapper">
              <div class="input__item">
                <label for="plz">PLZ:</label>
                <input type="text" name="plz" />
              </div>
              <div class="input__item">
                <label for="ort">Ort:</label>
                <input type="text" name="ort" />
              </div>
            </div>
            <div class="input__wrapper">
              <div class="input__item">
                <label for="tel">Telefon:</label>
                <input type="text" name="telefon" />
              </div>
              <div class="input__item">
                <label for="mail">Email:</label>
                <input type="email" name="email" />
              </div>
            </div>
            <div class="input__wrapper">
              <div class="input__item">
                <label for="typ">Projektart:</label>
                <select name="typ">
                  <option value="baufragen">
                    Beratung, Bauleitung & -begleitung
                  </option>
                  <option value="Neubau / Umbau">Neu- & Umbauten</option>
                  <option value="Malerarbeiten">Malerarbeiten</option>
                  <option value="Gipserarbeiten">Gipserarbeiten</option>
                </select>
              </div>
              <div class="input__item">
                <label for="zimmer">Anzahl Zimmer</label>
                <select name="zimmer">
                  <option value="1-Zimmer">1-Zimmer</option>
                  <option value="1.5-Zimmer">1.5-Zimmer</option>
                  <option value="2-Zimmer">2-Zimmer</option>
                  <option value="2.5-Zimmer">2.5-Zimmer</option>
                  <option value="3-Zimmer">3-Zimmer</option>
                  <option value="3.5-Zimmer">3.5-Zimmer</option>
                </select>
              </div>
            </div>
            <label for="nachricht">Projektbeschreibung:</label>
            <textarea name="beschreibung"></textarea>
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
          "template_6muzqe5",
          this.$refs.offerte,
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
