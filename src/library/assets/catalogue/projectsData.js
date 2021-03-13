import assemble_thumbnail from '../images/assemble_assets/assemble_main.png'
import poofers_thumbnail from '../images/poofers/poofers_main.png'
import unmix_thumbnail from '../images/unmix/unmix_main.png'
import emailyy_thumbnail from '../images/emailyy/emailyy_main.png'

const projectsData = [
    {
        name: "Assemble",
        type: "Cross-platform Mobile App",
        timeline: "August 2020 - Present",
        desc: "A local app made for Singaporeans, which allows users to form meaningful relationship through daily suggested matches",
        devTools: ["NativeScript Vue", "Express", "Firebase services", "AWS services"],
        playstoreUrl: "https://play.google.com/store/apps/details?id=org.chalkboystudio.rootly",
        appstoreUrl: "https://apps.apple.com/us/app/assemble-local-dating-app/id1553270546",
        weburl: "",
        sourceCodeLink : "",
        thumbnailImageUrl: assemble_thumbnail
    },
    {
        name: "Emailyy",
        type: "Web App",
        timeline: "Feb 2020",
        desc: "A web app that allows user to mass send and track responses of survey emails. User logs in using Google OAuth, and pay via Stripe API. This project was built as part of a full stack web development course by Stephan Grider",
        devTools: ["JavaScript", "React", "Node", "MongoDB", "Express", "Redux", "OAuth", "Stripe", "Heroku"],
        playstoreUrl: "",
        appstoreUrl: "",
        weburl: "https://murmuring-thicket-55187.herokuapp.com",
        sourceCodeLink : "https://github.com/francislow/emailyy",
        thumbnailImageUrl: emailyy_thumbnail
    },
    {
        name: "Unmix",
        type: "Native Android App",
        timeline: "August 2019",
        desc: "A native android application that allows user to store and manage pictures locally in a separate gallery",
        devTools: ["Android", "Java", "SQLite", "Android SDK"],
        playstoreUrl: "https://play.google.com/store/apps/details?id=com.chalkboystudios.franc.unmix",
        appstoreUrl: "",
        weburl: "",
        sourceCodeLink : "https://github.com/francislow/unmix-photo-gallery",
        thumbnailImageUrl: unmix_thumbnail
    },
    {
        name: "Poofers",
        type: "Native Android App",
        timeline: "March 2017",
        desc: "A native android 2D arcade game application developed using libGDX, a Java game development framework.",
        devTools: ["Android", "Java", "libGDX", "InkScape", "Android SDK"],
        playstoreUrl: "https://play.google.com/store/apps/details?id=com.chalkboyygames",
        appstoreUrl: "",
        weburl: "",
        sourceCodeLink : "https://github.com/francislow/poofers",
        thumbnailImageUrl: poofers_thumbnail
    }
]

export default projectsData