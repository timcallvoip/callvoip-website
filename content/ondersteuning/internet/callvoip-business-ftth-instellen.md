---
title: Callvoip Business FTTH instellen
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

Log in en ga naar **WAN** en vervolgens **General Setup**. Kies **WAN2** (= router-poort) en stel deze in zoals hieronder aangegeven. Belangrijk: laat veld **_Display Name_** leeg

![](https://res.cloudinary.com/callvoip/image/upload/v1565008278/support-ftth-draytek_vhkark.png)

Ga nu naar **WAN** en vervolgens naar **Internet Access** en op **WAN2**. Stel deze in op PPPoE en neem de onderstaande instellen over. Bij username en password kunt u '**callvoip**' invullen.

![](https://res.cloudinary.com/callvoip/image/upload/v1565008408/support-ftth-draytek2_elu6wn.png)