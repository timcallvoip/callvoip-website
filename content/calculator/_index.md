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
    description: Ieder abonnement komt standaard met onze luxe online telefooncentrale
    min: 1
    max: 1
    price_monthly: 7.5
    price_onetime: 15
    required: true
  - name: Telefoonnummer
    description: Ieder abonnement komt standaard met 1 nummer, voeg zoveel extra numers toe als je wilt.
    min: 1
    max: 999
    price_monthly: 2
    price_onetime: 15
    required: true
  - name: Toestellen
    description: Je bent vrij om te kiezen hoeveel toestellen je wilt. Liever enkel via mobiel bellen? Geen probleem.
    min: 0
    max: 999
    price_monthly: 4
    price_onetime: 5
    required: false
  - name: Bellen via mobiel
    description: Met hoeveel apparaten wil je mobiel bellen? Combineren met vaste toestellen is ook mogelijk.
    min: 0
    max: 999
    price_monthly: 4
    price_onetime: 5
    required: false
callminutes:
  title: Belminuten
  description: Bespaar met afkopen van belminuten
  items:
    - name: Geen belminuten
      value: 0
      price_monthly: 0
      price_onetime: 0
      required: false
    - name: Belminuten 500
      value: 1
      price_monthly: 10
      price_onetime: 0
      required: false
    - name: Belminuten 1500
      value: 1
      price_monthly: 12.50
      price_onetime: 0
      required: false
    - name: Belminuten 5000
      value: 1
      price_monthly: 25.00
      price_onetime: 0
      required: false
options:
  - name: Wachtrij
    description: Lorem ipsum
    min: 0
    max: 999
    price_monthly: 5
    price_onetime: 5
    required: false
  - name: Keuzemenu
    description: Lorem ipsum
    min: 0
    max: 999
    price_monthly: 5
    price_onetime: 5
    required: false
  - name: Faxbox
    description: Lorem ipsum
    min: 0
    max: 999
    price_monthly: 5
    price_onetime: 5
    required: false
callrecording:
  - name: Bewaartijd 30 dagen
    price_monthly: 5
    price_onetime: 5
    required: false
  - name: Bewaartijd 180 dagen
    price_monthly: 10
    price_onetime: 5
    required: false
  - name: Bewaartijd 365 dagen
    price_monthly: 12.50
    price_onetime: 5
    required: false
security:
  title: Beveiligd bellen (SRTP)
  description: Lorem ipsum
  items:
    - name: Normaal bellen
      value: 0
      price_monthly: 0
      price_onetime: 0
      required: false
    - name: Beveiligd bellen (SRTP)
      value: 1
      price_monthly: 2
      price_onetime: 0
      required: false
crm:
  - name: Koppeling CRM-pakket
    price_monthly: 5
    price_onetime: 150
    required: false
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam tincidunt velit.
