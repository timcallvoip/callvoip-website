---
title: VoIP CTI handleiding
weight: 
description: ''
images: []
pdf: http://www.simmpl.nl/downloads/Simmpl_handleiding_bij_VoIP-CTI_CRM-koppelingen.pdf
Hide in Search: false
Nieuw: false
Update: false

---
<h3>Wat is VoIP CTI?</h3>

Met VoIP CTI (= Computer Telephony Integration) verbindt u de Simmpl telefooncentrale met uw klantsysteem (**CRM-, ERP- of administratiepakketten**). Dit biedt gemak en bespaart tijd bij het bellen naar klanten (Click-to-Dial), en als de klant u belt verschijnt een **pop-up met klantinformatie op uw scherm**. Klik op de pop-up en de klantenkaart in uw CRM pakket wordt geopend.

<h3>Wat is er nodig voor VoIP CTI?</h3>

Voor VoIP CTI heeft u nodig:

* een Windows-PC of Server (aan Apple-mogelijkheden wordt gewerkt)
* uw CRM-pakket: zie onderaan deze pagina en/of neem contact met ons op
* de Simmpl telefooncentrale met VoIP CTI licentie per gebruiker

Voor veel pakketten is de installatie eenvoudig: installeer de Client software per gebruiker en gebruik de configuratiesoftware om de koppeling tot stand te brengen.

<h3>De voordelen op een rij</h3>

* **Efficiënt**: zet heel eenvoudig een gesprek op door op het nummer te klikken
* **Klantvriendelijk**: u weet wie u aan de lijn hebt en kan de klant snel en efficiënt helpen
* **Werknemerstevredenheid**: werkt gemakkelijker, geen verkeerde nummers meer!
* **Uitgebreide koppeling**: koppelt met veel populaire CRM-, ERP- en administratiepakketten

Kortom: VoIP CTI is een mooie uitbreiding van uw telefonie én de basis voor nóg efficiënt werken!

![](https://res.cloudinary.com/callvoip/image/upload/v1566224907/voipcti-1_ntzwi9.png)

<h3>Simmpl en uw CRM koppelen: een stappenplan</h3>

Het koppelen van de VoIP CTI omvat de volgende vier stappen.

<h3>Stap 1: Maak de API aan op de Simmpl centrale</h3>

De eerste stap is het aanmaken van een API koppeling op de Simmpl centrale.   
Dit is een éénmalige stap die u bij de start doet.   
Log in op Simmpl en volg de volgende stappen:

1. Kies menu \[**Instellingen**\]
2. Kies bovenaan tabblad \[**API**\] en op \[**Toevoegen**\]
3. Vul een naam in en onderaan de pagina vult u de volgende doorschakel URL in: https://www.cloudcti.nl/webapi/oauth2
4. Kopieer nu de Client ID en Client Secret en sla deze op. De Client Secret wordt één keer weergegeven en deze heeft u later weer nodig.

Bewaar de Secret goed. Mocht u naderhand een nieuwe gebruiker willen toevoegen en heeft u de Secret niet meer, maak dan een nieuwe API aan.

![](https://res.cloudinary.com/callvoip/image/upload/v1566225169/voipcti-2_dbqrro.png)

<h3>Stap 2: Installeer en configureer de Client Software (per gebruiker)</h3>