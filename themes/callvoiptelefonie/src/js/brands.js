import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons/faFacebookSquare";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";


library.add(faWhatsapp, faFacebook, faLinkedin,  faFacebookSquare, faTwitter, faYoutube);

dom.watch();