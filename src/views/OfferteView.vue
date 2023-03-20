<template><div class="container-lg">
     
    <section>
        <h2>Offertenanfrage</h2>
        <p>Fordern Sie noch heute unverbindlich Ihre gratis Offerte an.</p>
        <div class="contact">
        <div class="form__wrapper">
            <form action="">
           <div class="input__wrapper">
                <div class="input__item">
                    <label for="name">Name:</label>
                    <input type="text">
                </div>
                <div class="input__item">
                    <label for="vorname">Vorname:</label>
                    <input type="text">
                </div>
            </div>
            <label for="adresse">Adresse:</label>
            <input type="text">
            <div class="input__wrapper">
                <div class="input__item">
                    <label for="plz">PLZ:</label>
                    <input type="text"></div>
                <div class="input__item">
                    <label for="ort">Ort:</label>
                    <input type="text">
                </div>
            </div>
            <div class="input__wrapper">
                <div class="input__item">
                    <label for="tel">Telefon:</label>
                    <input type="text">
                </div>
                <div class="input__item">
                    <label for="mail">Email:</label>
                    <input type="email">
                </div>
            </div>
            <div class="input__wrapper">
                <div class="input__item">
                    <label for="typ">Projektart:</label>
                    <select name="typ">
                        <option value="baufragen">Beratung, Bauleitung & -begleitung</option>
                        <option value="neubauten">Neu- & Umbauten</option>
                        <option value="maler">Malerarbeiten</option>
                        <option value="gipser">Gipserarbeiten</option>
                    </select>
                </div>
                <div class="input__item">
                    <label for="zimmer">Anzahl Zimmer</label>
                    <select name="zimmer">
                        <option value="1">1-Zimmer</option>
                        <option value="1.5">1.5-Zimmer</option>
                        <option value="2">2-Zimmer</option>
                        <option value="2.5">2.5-Zimmer</option>
                        <option value="3">3-Zimmer</option>
                        <option value="3.5">3.5-Zimmer</option>
                    </select>
                </div>
            </div>
            <label for="nachricht">Projektbeschreibung:</label>
            <textarea></textarea>
            <button class="btn btn-sm submit">Senden</button>
        </form>        
    </div>
    <aside class="form__aside">
        <h3>Kontakt Info</h3>
        <div class="aside__wrapper">
            <h4>Adresse</h4>
            MALEX BAU GmbH<br>
            Lange Gasse 28<br>
            4052 Basel, CH
        </div>
        <div class="aside__wrapper">
            <h4>Unsere Arbeitszeiten</h4>
            Mo - Fr: 07.00 - 18.00 Uhr<br>
            Sa: 08.00 - 16.00 Uhr
        </div>
    </aside></div>
    </section>
</div></template>
