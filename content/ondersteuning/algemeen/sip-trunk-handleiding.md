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

(afbeelding siptrunk-1)

<h3>Een SIP-trunk instellen</h3>

_Stap 1: de Trunk-telefoonnummers beschikbaar maken_

Als u een (of meer) telefoonnummer(s) wilt gebruiken voor een trunk, zorg dan dat u deze telefoonnummers ONTKOPPELT van de reguliere belplannen. Wij koppelen nummers standaard aan een belplan en dit kunt u zelf ongedaan maken.

Controleer of een nummer aan een belplan is gekoppeld op de volgende manier:

* ga in de Simmpl bedieningspagina’s naar menu \[Belplan\] waar uw belplannen staan
* controleer of u hier een belplan ziet met dat aan het betreffende externe nummer is gekoppeld > dit nummer staat dan onder de naam van het belplan
* voorbeeld: het LINKER belplan (fax) heeft GEEN extern nummer, rechts WEL
* Om het nummer los te koppelen: klik op het belplan en klik bovenin beeld op \[Instellingen\]
* Klik in veld \[Extern nummer\] en haal het nummer hier weg (met backspace of delete) zodat het veld leeg is en klik dan op \[opslaan\]
* Het nummer is nu ontkoppeld en kan worden gekoppeld aan uw trunk.   
  Herhaal dit voor alle nummers die u aan de trunk wilt koppelen.

(afbeelding siptrunk-2)

(afbeelding siptrunk-3)

(afbeelding siptrunk-4)

_Stap 2: de Trunk instellen_

De SIP trunks vindt u bij de \[toestellen\], tabblad \[Trunks\]:

(afbeelding siptrunk-5)

Klik op \[**+Toevoegen**\] om een nieuwe trunk in gebruik te nemen en door loop de wizard:

(afbeelding siptrunk-6)

(afbeelding siptrunk-7)

Klik op \[Finish\] om uw Trunk-account op te slaan.  
De Trunk, en alle bijbehorende informatie, wordt vervolgens weergegeven onder het kopje \[Trunks\]:

(afbeelding siptrunk-8)

U dient het SIP-serveradres, de SIP-username en het SIP-password in de door u geselecteerde PBX in te geven. Daarnaast is het noodzakelijk om de nummers die u als Caller-ID geselecteerd heeft in de Simmpl centrale ook in te geven in de eigen PBX op locatie middels internationale weergave \[31\].

(afbeelding siptrunk-9)

<h3>Bijlage 1: 3CX telefooncentrale instellen voor SIP TRUNK</h3>

Registreer uw Simmpl-account in uw 3CX centrale – wij adviseren het gebruik van 3CX versie 12.5 met de volgende instellingen:

**VoIP Providers > overview**

(afbeelding siptrunk-10)

**VoIP Providers > \[callvoip\] > tab General:**

Kies bij het toevoegen van de trunk de volgende settings:

* **Country**: Generic
* **Provider**: Generic Voip Provider

Voeg het provider-profiel toe en sla op:

(afbeelding siptrunk-11)

**VoIP Providers > \[callvoip\] > tab Advanced:**  
Mocht registratie van uw trunk niet succesvol zijn, let dan op de volgende zaken:

* **Require registration for**: in and outgoing calls
* **Which IP to use in contact field**: Local IP Address

(afbeelding siptrunk-12)

**VoIP Providers > \[callvoip\] > tab Outbound Parameters:**  
  
Pas hier de volgende regels aan:

From: User Part: “OutboundCallerId outbound caller id taken from extension”  
Alle Remote Party ID opties naar : “leave default value”  
P-asserted Identity: User Part: “Outboundcallerid outbound caller id taken from extension”  
P-asserted Identity: “Host Part Part: GWHostPort gateway/provider host/port”

(afbeelding siptrunk-13)

**VoIP Providers > \[callvoip\] > tab Inbound Parameters:**

Hier zijn geen wijzigingen nodig.

(afbeelding siptrunk-14)

**VoIP Providers > \[callvoip\] > tab Source ID:**

Zet een vinkje bij "Source Identification by DID"  
Voeg het inkomende nummer (één of meer) toe als DID in de lijst

(afbeelding siptrunk-15)

**VoIP Providers > \[callvoip\] > tab DID:**

Hier kunt u meerdere nummer toevoegen die via dezelfde trunk lopen.

(afbeelding siptrunk-16)

**Inbound routes:**  
  
Hier kunt per telefoonnummer aangeven wat er per telefoonnummer moet gebeuren.  
Bij DID/DDI number/mask vult u het telefoonnummer als 31 formaat in.

(afbeelding siptrunk-17)

**Outbound Rules > overview:**

Zorg dat u outbound rules aanmaakt voor regionaal en uitgaande gesprekken.  
Hier geeft u aan dat de gesprekken als 3150820000 of bv 0044 voor Engelse nummers worden verstuurd.

(afbeelding siptrunk-18)

**Outbound Rules > Nationale nummers**

(afbeelding siptrunk-19)

**Outbound Rules > Regionale nummers**

U kunt zelf bepalen dat u binnen uw eigen netnummerregio kunt uitbellen zonder dat u het netnummer hoeft te draaien.

(afbeelding siptrunk-20)

**Outbound Rules > Uitgaande gesprekken**

U kunt zelf instellen dat uitgaande gesprekken worden voorafgegaan door 31 of 00 zonder aanpassingen worden gebeld.

(afbeelding siptrunk-21)

<h3>Bijlage 2: configuratie-voorbeelden Asterisk voor SIP TRUNK</h3>

Hieronder een voorbeeld voor een Asterisk configuratie voor de Simmpl SIP Trunk. Configuratievoorbeelden voor FreePBX, Elastix, Trixbox en vergelijkbare systemen zijn in de maak.   
Op basis van het Asterisk voorbeeld (met name de sip.conf) kunt u vermoedelijk al een eind komen in de configuratie van de FreePBX gebaseerde systemen.

_Asterisk versie 1.8 of hoger:_

(afbeelding siptrunk-22)

(afbeelding siptrunk-23)

<h3>Bijlage 3a: configuratie-voorbeeld Elastix FreePBX met toestelaccount</h3>

Voor diverse IP PBX’en is het mogelijk om met SIP-toestelaccounts (extensies) te werken. Een trunk is één groot kanaal met daarin al uw nummers, de PBX ziet op welk nummer gebeld wordt en kan kiezen met welk nummer u wilt uitbellen.

Hierbij de instructie voor registratie van een FreePBX centrale op basis van toestelaccount (extensie).

(afbeelding siptrunk-24)

<h3>Bijlage 3b: configuratie-voorbeelden Elastix / FreePBX met SIP TRUNK</h3>

(afbeelding siptrunk-25)

Elastix / FreePBX Outbound Route:

(afbeelding siptrunk-26)

Elastix / FreePBX Incoming Route:

(afbeelding siptrunk-27)

<h3>Bijlage 4a: MyPBX Yeastar telefooncentrale met toestelaccount</h3>

Voeg een nieuwe registratie als volgt toe, en gebruik de sip username en password van een toestealccount:

(afbeelding siptrunk-28)

(afbeelding siptrunk-29)

In de outbound rules hoeven geen aanpassingen te worden gedaan:

(afbeelding siptrunk-30)

<h3>Bijlage 4b: MyPBX Yeastar telefooncentrale met SIP Trunk</h3>

(afbeelding siptrunk-31)

(afbeelding siptrunk-32)

Nog een paar voorbeelden van outbound route instellingen:

(afbeelding siptrunk-33)

Voor het inbound verkeer kunt u de volgende gegevens gebruiken:

(afbeelding siptrunk-34)

<h3>Bijlage 5a: AVAYA centrale met toestelaccount</h3>

IP Office IPO500 IP telefooncentrale

(afbeelding siptrunk-35)

LAN1 wordt (meestal) gebruikt voor de aansluiting van Avaya IP-telefoons (via b.v. een PoE switch).

(afbeelding siptrunk-36)

LAN2 wordt (meestal) gebruikt als WAN aansluiting (internet).

(afbeelding siptrunk-37)

(afbeelding siptrunk-38)

(afbeelding siptrunk-39)

(afbeelding siptrunk-40)

(afbeelding siptrunk-41)

<h3>Bijlage 6: FAQ</h3>

**Problemen met inkomende gesprekken**

* Check wat er precies misgaat; hoort u niets, krijgt u een ingesprektoon, een melding van een niet bestaand nummer, krijgt u een foutmelding, krijgt u wel een overgangstoon maar gaat er niets rinkelen, of komt er geen gesprek tot stand als er wordt aangenomen? Hou ook in de gaten wat er verandert aan dit gedrag als u instellingen wijzigt.
* Check dan of de firewall en de PBX zelf de IP-adressen waar de gesprekken vandaan komen accepteren. Dat zijn de volgende IP-adressen:   
  185\.19.236.0/22 ( > dat is 185.19.236.0 tot en met 185.19.239.255)
* Check de gesprekslogs van uw PBX tijdens een inkomend gesprek.   
  De logs vind u (afhankelijk van uw type centrale) bijvoorbeeld hier:  
  tail -f /var/log/kamailio.log   
  tail -f /var/log/messages   
  tail -f /var/log/syslog

NB: voer deze commando’s uit vanaf de command shell en niet vanaf in de webinterface of via de asterisk console

**Is er een probleem met uitgaande gesprekken?**

Maak een trace van het gesprek en kijk welke informatie er bij uw PBX terugkomt.  
Indien gewenst: mail de sip trace naar Simmpl voor assistentie en advies.

<h3>Bijlage 7: default destination whitelist</h3>

Voor alle klanten geldt een default destination whitelist waaronder o.a. alle Europese landen en alle grote handelspartners. Van deze landen kunnen vaste, mobiele en freephone nummers worden gebeld. Verkeer naar bestemmingen die fraudegevoelig zijn, is geblokkeerd.

(afbeelding siptrunk-42)

Op uw verzoek kunnen wij ook één van de overige destination whitelists instellen:

* Nederland vast + mobiel
* Benelux
* West-Europa
* heel Europa
* wereldwijd