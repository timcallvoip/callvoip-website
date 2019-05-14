---
title: Ontdek hoeveel je bespaart
type: page
layout: calculator
hero:
  image: "/v1552991205/Team/logo-bord-breed.jpg"
outputs:
- HTML
- JSON
basic:
- name: Telefooncentrale
  description: Ieder abonnement komt standaard met onze luxe online telefooncentrale.
    In dit basis abonnement krijgt u al 80% van alle functionaliteiten.
  min: 1
  max: 1
  price_monthly: 7.5
  price_onetime: 15
  required: true
- name: Telefoonnummer
  description: Ieder abonnement komt standaard met 1 nummer, voeg zoveel extra nummers
    (regionaal of landelijk) toe als je wilt.
  min: 1
  max: 999
  price_monthly: 2
  price_onetime: 15
  required: true
- name: Toestellen
  description: Uitbellen met uw zakelijk nummer? Inkomend bereikbaar zijn op uw mobiel?
    Het kan via onze mobiele app Qaller!
  min: 0
  max: 999
  price_monthly: 4
  price_onetime: 5
  required: false
- name: Bellen via mobiel (Qaller)
  description: Met hoeveel apparaten wil je mobiel bellen? Combineren met vaste toestellen
    is ook mogelijk.
  min: 0
  max: 999
  price_monthly: 4
  price_onetime: 5
  required: false
callminutes:
  title: Belminuten
  description: Belt u veel uit? Bespaar dan met afkopen van belminuten. Als u niet
    voor een belbundel kiest, dan profiteert u van onze lage gesprekskosten.
  items:
  - name: Geen belminuten
    value: 
    price_monthly: 
    price_onetime: 
    required: false
  - name: Belminuten 500
    value: 1
    price_monthly: 10
    price_onetime: 
    required: false
  - name: Belminuten 1500
    value: 1
    price_monthly: 12.5
    price_onetime: 
    required: false
  - name: Belminuten 5000
    value: 1
    price_monthly: 25
    price_onetime: 
    required: false
options:
  title: Breid uit met extra's
  description: 'Misschien is onze standaard telefooncentrale niet genoeg voor u. Breid
    deze dan eenvoudig uit met de volgende functionaliteiten:'
  items:
  - name: Wachtrij
    description: Heeft u veel inkomend telefonieverkeer en wilt u elke beller beantwoorden?
      Vang de bellers dan op in een wachtrij.
    min: 0
    max: 999
    price_monthly: 4
    price_onetime: 5
    required: false
  - name: Keuzemenu
    description: Wenst u de beller meteen te begeleiden naar de juiste persoon en/of
      afdeling? Kies dan voor een keuzmenu!
    min: 0
    max: 999
    price_monthly: 4
    price_onetime: 5
    required: false
  - name: Faxbox
    description: Wilt u met één van uw nummers faxen ontvangen en versturen? Kies
      dan voor een faxbox!
    min: 0
    max: 999
    price_monthly: 5
    price_onetime: 5
    required: false
callrecording:
  title: Gesprekken opnemen
  description: 'Met gespreksopname neemt u al uw inkomende & uitgaande gesprekken
    op. '
  items:
  - name: Bewaartijd 30 dagen
    min: 0
    max: 999
    price_monthly: 5
    price_onetime: 5
    required: false
security:
  title: Beveiligd bellen (SRTP)
  description: De gesprekken zijn versleuteld tussen uw telefoons en de telefooncentrale.
  items:
  - name: Normaal bellen
    value: 
    price_monthly: 
    price_onetime: 
    required: false
  - name: Beveiligd bellen (SRTP)
    value: 1
    price_monthly: 2
    price_onetime: 
    required: false
crm:
- name: Koppeling CRM-pakket (per gebruiker)
  min: 0
  max: 999
  price_monthly: 5
  price_onetime: 150
  required: false
offerte:
  title: Vrijblijvende offerte ontvangen?
  description: Vul hier onder je gegevens in en ontvang van onze medewerkers een vrijblijvende
    offerte op basis van bovenstaande wensen.

---
Bereken hieronder eenvoudig de abonnementskosten passend bij uw situatie. Wilt u een offerte op maat? klik dan onderaan op de knop en ontvang binnen 1 dag een vrijblijvende offerte.