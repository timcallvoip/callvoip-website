---
title: Callvoip Business VDSL instellen
weight: 
description: ''
images: []

---
### Algemeen

De Callvoip Business ADSL-internetverbindingen zijn meestel van het type PPPoE en er kunnen per type apparaat verschillen zijn in de beste instellingswijze. 

{{< layout/columns >}}  
 {{< layout/column2 >}}  
Encapsulatie  
 {{</ layout/column2 >}}  
 {{< layout/column2 >}}  
PPPoE (FRITZ!Box)  
PPPoA (Draytek)  
 {{</ layout/column2 >}}  
{{</ layout/columns >}}  
{{< layout/columns >}}  
 {{< layout/column2 >}}  
VPI  
 {{</ layout/column2 >}}  
 {{< layout/column2 >}}  
0  
 {{</ layout/column2 >}}  
{{</ layout/columns >}}  
{{< layout/columns >}}  
 {{< layout/column2 >}}  
VCI  
 {{</ layout/column2 >}}  
 {{< layout/column2 >}}  
35  
 {{</ layout/column2 >}}  
{{</ layout/columns >}}

{{< layout/columns >}}  
 {{< layout/column2 >}}  
Username | Password  
 {{</ layout/column2 >}}  
 {{< layout/column2 >}}  
callvoip | callvoip  
 {{</ layout/column2 >}}  
{{</ layout/columns >}}  
{{< layout/columns >}}  
 {{< layout/column2 >}}  
DNS-server 1  
 {{</ layout/column2 >}}  
 {{< layout/column2 >}}  
62\.212.131.101  
 {{</ layout/column2 >}}  
{{</ layout/columns >}}  
{{< layout/columns >}}  
 {{< layout/column2 >}}  
DNS-server 2  
 {{</ layout/column2 >}}  
 {{< layout/column2 >}}  
62\.212.131.130  
 {{</ layout/column2 >}}  
{{</ layout/columns >}}  
{{< layout/columns >}}  
 {{< layout/column2 >}}  
SMTP-server  
 {{</ layout/column2 >}}  
 {{< layout/column2 >}}  
smtp.ipcentraal.nl  
 {{</ layout/column2 >}}  
{{</ layout/columns >}}

### Draytek

Log in en ga naar WAN en vervolgens naar General Setup. Kies WAN1 (= xDSL interface) en stel deze in zoals hieronder aangegeven (NB: na het opslaan wijzigt de indicator ADSL in VDSL):

![](https://res.cloudinary.com/callvoip/image/upload/v1565008774/support-vdsl-draytek_qeilpd.png)

Klik op \[OK\] om de instellingen op te slaan.

Ga vevolgens naar menu WAN en Internet Access**.** Selecteer bij \[WAN 1\] als Access Mode: **PPPoE / PPPoA** en klik op \[Details Page\].

![](https://res.cloudinary.com/callvoip/image/upload/v1565008844/support-vdsl-draytek2_jylaej.png)

De detailpagina van WAN 1 komt naar voren. Vul die in zoals hieronder aangegeven.

![](https://res.cloudinary.com/callvoip/image/upload/v1565008931/support-vdsl-draytek3_nmutyu.png)

Klik vervolgens op OK om de instellingen op te slaan. Wacht nu ca 5 minuten en kijk of u internetverbinding heeft. Zo niet, check de bekabeling en doe de draytek dan eens uit, wacht ca 10 sec en doe hem dan weer aan. Komt de verbinding niet op, neem dan contact op met Callvoip voor verdere assistentie.

FRITZ!Box