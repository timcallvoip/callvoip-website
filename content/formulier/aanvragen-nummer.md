---
title: Nieuw telefoonnummer aanvragen
url: "/aanvragen/nummer"

---

Vraag hieronder eenvoudig een nieuw telefoonnummer aan. Uw nieuwe telefoonnummer is binnen 24 uur beschikbaar en actief. Wilt u een extra mooi telefoonnummer? Kies dan voor een Premium nummer. U ontvangt een lijst met telefoonnummers waar u uit kunt kiezen.

{{< form "Vacature formulier" "/aanvragen/nummer/verzonden" >}}

{{< form/fieldset "Bedrijfsgegevens" >}}
{{< form/input "Bedrijfsnaam"   >}}
{{< form/input "Klantnummer" required   >}}
{{< form/select "Aanhef" >}}
  {{< form/option "Heer" >}}
  {{< form/option "Mevrouw" >}}
{{</ form/select >}}
{{< form/input "Contactpersoon"   >}}
{{< form/input "Telefoonnummer"   >}}
{{< form/email "E-mailadres" required   >}}
{{</ form/fieldset >}}

{{< form/fieldset "Aanvraag nieuwe telefoonnummers" >}}
{{< form/radiogroup "Soort telefoonnummer" "inline" >}}
{{< form/radio "Regionaal" "Soort telefoonnummer" >}}
{{< form/radio "Landelijk" "Soort telefoonnummer" >}}
{{</ form/radiogroup >}}
{{< form/input "Netnummer"   >}}
{{< form/select "Aantal telefoonnummers" >}}
  {{< form/option "1" >}}
  {{< form/option "2" >}}
  {{< form/option "3" >}}
  {{< form/option "4" >}}
  {{< form/option "5" >}}
  {{< form/option "6" >}}
  {{< form/option "7" >}}
  {{< form/option "8" >}}
  {{< form/option "9" >}}
  {{< form/option "10-blok" >}}
{{</ form/select >}}

Wilt u een 'mooi' telefoonnummer? Dan kunt u voor premium kiezen.
De toeslag voor een premium nummer is € 50,00 excl. btw

{{< form/radiogroup "Premium nummer?" "inline" >}}
{{< form/radio "Nee" "Premium nummer?" >}}
{{< form/radio "Ja" "Premium nummer?" >}}
{{</ form/radiogroup >}}
{{< form/textarea "Opmerkingen"  >}}


{{</ form/fieldset >}}


{{< form/button "Verstuur formulier"  >}}
{{</ form >}}