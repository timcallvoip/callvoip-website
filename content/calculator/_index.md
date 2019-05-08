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
    min: 1
    max: 1
    price_monthly: 7.5
    price_onetime: 15
    required: true
  - name: Telefoonnummer
    min: 1
    max: 999
    price_monthly: 2
    price_onetime: 15
    required: true
  - name: Toestellen
    min: 0
    max: 999
    price_monthly: 4
    price_onetime: 5
    required: false
  - name: Bellen via mobiel
    min: 0
    max: 999
    price_monthly: 4
    price_onetime: 5
    required: false
callminutes:
  - name: Belminuten 500
    price_monthly: 10
    price_onetime: 0
    required: false
  - name: Belminuten 1500
    price_monthly: 12.50
    price_onetime: 0
    required: false
  - name: Belminuten 5000
    price_monthly: 25.00
    price_onetime: 0
    required: false
options:
  - name: Wachtrij
    min: 0
    max: 999
    price_monthly: 5
    price_onetime: 5
    required: false
  - name: Keuzemenu
    min: 0
    max: 999
    price_monthly: 5
    price_onetime: 5
    required: false
  - name: Faxbox
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
  - name: Beveiligd bellen (SRTP)
    price_monthly: 2
    price_onetime: 0
    required: false
crm:
  - name: Koppeling CRM-pakket
    price_monthly: 5
    price_onetime: 150
    required: false
---