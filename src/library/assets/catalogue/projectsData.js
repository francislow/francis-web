import assemble_1 from '../images/assemble/assemble_main.png'
import assemble_3 from '../images/assemble/assemble_3.png'
import assemble_4 from '../images/assemble/assemble_4.png'
import assemble_5 from '../images/assemble/assemble_5.png'
import assemble_6 from '../images/assemble/assemble_6.png'
import assemble_7 from '../images/assemble/assemble_7.png'
import assemble_8 from '../images/assemble/assemble_8.png'
import assemble_9 from '../images/assemble/assemble_9.png'
import assemble_10 from '../images/assemble/assemble_10.png'
import assemble_11 from '../images/assemble/assemble_11.png'

import poofers_1 from '../images/poofers/poofers_main.png'
import poofers_2 from '../images/poofers/poofers_2.png'
import poofers_3 from '../images/poofers/poofers_3.png'
import poofers_4 from '../images/poofers/poofers_4.png'
import poofers_5 from '../images/poofers/poofers_5.png'
import poofers_6 from '../images/poofers/poofers_6.png'
import poofers_7 from '../images/poofers/poofers_7.png'

import unmix_1 from '../images/unmix/unmix_main.png'
import unmix_2 from '../images/unmix/unmix_2.png'
import unmix_3 from '../images/unmix/unmix_3.png'
import unmix_4 from '../images/unmix/unmix_4.png'
import unmix_5 from '../images/unmix/unmix_5.png'
import unmix_6 from '../images/unmix/unmix_6.png'

import emailyy_1 from '../images/emailyy/emailyy_main.png'
import emailyy_2 from '../images/emailyy/emailyy_2.png'
import emailyy_3 from '../images/emailyy/emailyy_3.png'
import emailyy_4 from '../images/emailyy/emailyy_4.png'
import emailyy_5 from '../images/emailyy/emailyy_5.png'
import emailyy_6 from '../images/emailyy/emailyy_6.png'

const projects = {
    assemble: {
        name: "Assemble",
        type: "Cross-platform Mobile App",
        timeline: "August 2020 - Present",
        desc: "A local app made for Singaporeans, which allows users to form meaningful relationship through daily suggested matches.",
        devTools: ["NativeScript Vue", "Express", "Firebase services", "AWS services", "NginX"],
        playstoreUrl: "https://play.google.com/store/apps/details?id=org.chalkboystudio.rootly",
        appstoreUrl: "https://apps.apple.com/us/app/assemble-local-dating-app/id1553270546",
        weburl: "",
        sourceCodeLink : "",
        images: [assemble_1, assemble_3, assemble_4, assemble_5, assemble_6, assemble_7, assemble_8, assemble_9, assemble_10, assemble_11]
    },
    emailyy: {
        name: "Emailyy",
        type: "Web App",
        timeline: "Feb 2020",
        desc: "A web app that allows user to mass send and track responses of survey emails. User logs in using Google OAuth, and pay via Stripe API. This project was built as part of a full stack web development course by Stephan Grider.",
        devTools: ["ReactJS", "Redux", "MongoDB", "Express", "OAuth", "Stripe", "Heroku"],
        playstoreUrl: "",
        appstoreUrl: "",
        weburl: "https://murmuring-thicket-55187.herokuapp.com",
        sourceCodeLink : "https://github.com/francislow/emailyy",
        images: [emailyy_1, emailyy_2, emailyy_3, emailyy_4, emailyy_5, emailyy_6]
    },
    unmix: {
        name: "Unmix",
        type: "Native Android App",
        timeline: "August 2019",
        desc: "A native android application that allows user to store and manage pictures locally in a separate gallery.",
        devTools: ["Android", "Java", "SQLite", "Android SDK"],
        playstoreUrl: "https://play.google.com/store/apps/details?id=com.chalkboystudios.franc.unmix",
        appstoreUrl: "",
        weburl: "",
        sourceCodeLink : "https://github.com/francislow/unmix-photo-gallery",
        images: [unmix_1, unmix_2, unmix_3, unmix_4, unmix_5, unmix_6]
    },
    poofers: {
        name: "Poofers",
        type: "Native Android App",
        timeline: "March 2017",
        desc: "A native android 2D arcade game application developed using libGDX, a Java game development framework.",
        devTools: ["Android", "Java", "libGDX", "InkScape", "Android SDK"],
        playstoreUrl: "https://play.google.com/store/apps/details?id=com.chalkboyygames",
        appstoreUrl: "",
        weburl: "",
        sourceCodeLink : "https://github.com/francislow/poofers",
        images: [poofers_1, poofers_2, poofers_3, poofers_4, poofers_5, poofers_6, poofers_7]
    }
}

export default projects