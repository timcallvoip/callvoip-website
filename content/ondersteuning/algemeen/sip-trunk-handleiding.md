---
title: SIP-Trunk handleiding
weight: 
description: ''
images: []
pdf: http://www.simmpl.nl/downloads/Simmpl_SIP-Trunk-manual.pdf

---
De Simmpl telefooncentrale is zelf een centrale met veel mogelijkheden. Een eigen telefooncentrale heeft u dus in principe niet nodig. Toch kunt u redenen hebben om deze wel te gebruiken, bv bij gebruik van specifieke integraties / koppelingen of uit oogpunt van kosten, beheer of (on-)afhankelijkheid.   
De Simmpl centrale kan ook uitstekend worden gebruikt met eigen centrales.   
Dit kan op twee manieren:

**a) SIP TRUNK**

Simmpl biedt SIP trunks: één registratie als grote ‘snelweg’ met daarin al uw nummers.   
Een trunk is één verbinding tussen de Simmpl-telefooncentrale en uw eigen telefooncentrale (PBX) waar alle inkomende en uitgaande telefoonverkeer langsloopt.   
U bepaalt zelf of nummers inkomend en/of uitgaand beschikbaar zijn voor de centrale achter de trunk en u beschikt over geavanceerde instellingen. Met één registratie is dit verreweg de meest efficiënte manier bij een groot aantal nummers. Kies dus een trunk bij 10 nummers of meer.   
U kunt zelf een trunk-account aanmaken en deze op uw eigen telefooncentrale instellen.

**b) TOESTELACCOUNT(S)**

Net zoals u een toestel van een SIP account voorziet, kunt u uw centrale vaak ook met een toestelaccount instellen. Het verschil met een trunk is dat een toestelaccount maar één vaste uitgaande identiteit heeft. Alleen dit nummer kan worden meegestuurd bij uitbellen. U kunt wel meerdere toestelaccounts aanmaken en afzonderlijk naast elkaar registreren.

<h3>Wat is een SIP Trunk?</h3>

Een SIP-trunk is één grote verbinding tussen de Simmpl telefooncentrale en uw eigen telefooncentrale. Deze verbinding loopt via internet. In deze éne verbinding is ruimte voor al uw nummers (deze kunt u zelf koppelen) en het door u gewenste aantal gelijktijdige gesprekken. De Simmpl centrale ontvangt de gesprekken op al uw nummers en zorgt dat de gesprekken keurig doorgaan naar uw eigen centrale. Uw eigen telefooncentrale is het centrale punt van intelligentie en bepaalt welk nummer op welke toestellen rinkelt en wie met welk nummer uitbelt, en daar stelt u de belroutes in. Uitgaande gesprekken gaan via de trunk weer terug naar de Simmpl centrale en die zorgt dat ze naar de juiste bestemmingen gaan.

De SIP Trunk functionaliteit maakt het mogelijk om telefoongesprekken te transporteren via het VoIP-platform. De SIP Trunk functionaliteit van Simmpl is te gebruiken in combinatie met diverse populaire lokale Hosted PBX omgevingen, o.a.:

* Digium Asterisk / Kamailio
* 3CX
* Yeastar / MuyPBX
* 4PSA
* Barracuda
* Elmeg
* IP Office
* SNOM PBX

Daarnaast maakt de Trunk-functionaliteit van Simmpl gebruik van subnetten: een subnet is een deelnetwerk in een bepaald netwerk, dat volgens het Internet Protocol werkt.   
Bij subnetten wordt een IP-range voor adressering opgedeeld op gescheiden fysieke netwerken. Zodoende kunt u zaken goed gescheiden houden.

<h3>Tools ter bescherming</h3>

Simmpl heeft als telecomprovider veiligheid hoog in het vaandel staan. Om u bij deze bescherming te faciliteren biedt Simmpl tools om beperkingen in te stellen die voorkomen dat er ongewenst gebruik plaatsvindt. Denkt u bijvoorbeeld aan het overschrijden van bepaalde limieten, het bellen naar ongewenste bestemmingen (bepaalde landen of bv. 0906-nummer) en het gebruik van een white-/blacklist, het aantal gelijktijdige gesprekken en de IP-adressen vanaf waar de Trunk kan worden gebruikt.   
Op deze manier creëert Simmpl nog meer grip op veiligheid voor u.

<h3>Simmpl SIP Trunks en een veilige verbinding met uw eigen centrale</h3>

De veiligheid van uw belverkeer staat hoog in ons vaandel. Echter, u draagt zelf de verantwoordelijkheid voor de beveiliging van uw eigen telefooncentrale, en daar kunnen wij geen invloed op uitoefenen. Wij kunnen wel zorgen dat de mogelijkheden van het belverkeer in bestemming, aantal en bedrag worden beperkt met de bijbehorende emailsignalering naar u, om zo bepaalde ongewenste verkeersstromen te kunnen voorkomen of beperken. Hieronder een overzicht.

**Simmpl SIP Trunk features**:

* Eén trunk biedt 2 SIP-accounts om zo failover-situaties te faciliteren
* Eén trunk kan inkomende gesprekken op meerdere nummers ontvangen
* Eén trunk kan meerdere nummers als Caller ID gebruiken

<h3>Simmpl SIP Trunk beveiligingsfeatures</h3>

Simmpl SIP Trunks zijn gemakkelijk te configureren op basis van een intuïtieve wizard en de hieronder aangereikte gegevens. Om de kwetsbaarheid van de SIP Trunk te beperken is een aantal beperkingen beschikbaar dat de kans op cq. impact van ongewenst gebruik kan beperken.

* **Channels**: beperking van het aantal gelijktijdige gesprekken / spraakkanalen.
* **IP Whitelist**: beperken van de toegang tot specifieke IP-s of subnetten, door uzelf in te vullen
* **Destination Whitelist**: Het beperken van de bestemmingen waarnaar gebeld kan worden (regio, land, type telefoonnummer, prefix)
* **Limits**: het beperken van het bedrag / aantal gesprekken per uur-dag-week als fraudebeperking. Dit wordt reeds bij uitgifte van uw klantomgeving ingesteld op 10-25-50 Euro en kan op uw verzoek worden aangepast. U krijgt een emailnotificatie als u 80% van deze waarde bereikt.

<h3>Een IP PBX gebruiken met TOESTELACCOUNTS ipv met een TRUNK</h3>

Voor diverse IP PBX’en is het mogelijk om met SIP-toestelaccounts (extensies) te werken. Een trunk is één groot kanaal met daarin al uw nummers, de PBX ziet op welk nummer gebeld wordt en kan kiezen met welk nummer u wilt uitbellen.

Hierbij de instructie voor registratie van een FreePBX centrale op basis van toestelaccount (extensie).