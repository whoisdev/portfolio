// Skills Icons
import tsIcon from "./images/typescript.svg"
import awsIcon from "./images/aws.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import postgresIcon from "./images/postgres.svg"
import nodeIcon from "./images/node.svg"
import javaIcon from "./images/java.svg"
import pythonIcon from "./images/python.svg"
import rewLogo from "./images/rew.svg"
import amazon from "./images/amazon.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import instagramIcon from "./images/instagram.svg"
import avatar from "./images/profile.png";

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Dev",
  headerTagline: [
    //Line 1 For Header
    "Software Developer 👨‍💻,",
    //Line 2 For Header
    "Car Enthusiast 🏎️.",
    //Line 3 For Header,
    "University Of Victoria Graduate 🎓"
  ],
  //   Header Paragraph
  headerParagraph:
    "Checkout my resume and GitHub to know the latest about my projects.",

  //Contact Email
  contactEmail: "devsingh120397@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Software Developer Intern Summer 2020", //Project Title - Add Your Project Title Here
      para: [
        "Worked on the payments team to develop a financial reporting system for sellers.",
        "Owned the development of an internal financial tool.",
        "Gained experience with Microservices, Agile, Maven, React.JS and Groovy."
      ],
      //Project Image - Add Your Project Image Here
      imageSrc: amazon,
      //Project URL - Add Your Project Url Here
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Software Developer Intern Fall 2019", //Project Title - Add Your Project Title Here
      para: [
        "Used React.JS and Groovy to develop client facing web pages for the payments team.",
        "Helped implement automated AWS IAM keys rotation for payments team apps.",
        "Gained experience with Microservices, Agile, Maven, React.JS and Groovy."
      ],
      //Project Image - Add Your Project Image Here
      imageSrc: amazon,
      //Project URL - Add Your Project Url Here
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Software Developer Intern Summer 2019", //Project Title - Add Your Project Title Here
      para: [
        "Helped migrate the data source from MySQL to ElasticSearch, improved search performance by 20 - 30% and improved reliability.",
        "Gained experience with Google Cloud Spanner, ElasticSearch, Vue.JS, and Kibana.",
        "Implemented support for multiple languages on both frontend and backend systems."
      ],
      imageSrc: rewLogo,
      //Project Image - Add Your Project Image Here
      //Project URL - Add Your Project Url Here
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
    ,{
        id: 5,
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently",
  aboutParaTwo:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently",
  aboutParaThree:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  aboutImage: avatar,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: reactIcon,
      heading: "React.JS",
    },
    {
      id: 2,
      img: nodeIcon,
      heading:
        "Node.JS",
    },
    {
      id: 3,
      img: jsIcon,
      heading: "JavaScript",
    },
    {
      id: 5,
      img: javaIcon,
      heading:
        "Java",
    },
    {
      id: 6,
      img: tsIcon,
      heading:
        "TypeScript",
    },
    {
      id: 7,
      img: awsIcon,
      heading: "AWS",
    },
    {
      id: 8,
      img: postgresIcon,
      heading: "PostgreSQL",
    },
    {
      id: 9,
      img: pythonIcon,
      heading: "Python",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "I Would Be Happy To Work Together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/whoisdev" },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/who_is_dev/",
    },
  ],

  // End Contact Section ---------------
}
