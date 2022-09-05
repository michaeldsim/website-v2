(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[0],{23:function(e,a,t){e.exports=t(44)},28:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},38:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(18),o=t.n(l),i=(t(28),t(7)),s=t(8),c=t(10),m=t(9),d=[{title:"Home",url:"/",cName:"nav-links"},{title:"Projects",url:"/projects",cName:"nav-links"},{title:"Work Experience",url:"/work",cName:"nav-links"},{title:"Resume",url:"/resume",cName:"nav-links"},{title:"About Me",url:"/about",cName:"nav-links"}],u=[{title:"Github",url:"https://github.com/michaeldsim",cName:"footer-links",image:"/images/github_icon.png"},{title:"LinkedIn",url:"https://www.linkedin.com/in/michaeldavidsim/",cName:"footer-links",image:"/images/linkedin_icon.png"},{title:"email",url:"mailto:michael@michaeldavidsim.com",cName:"footer-links",image:"/images/email_icon.png"}],p=[{title:"Object-Oriented Programming",desc:"".concat((new Date).getFullYear()-2017," years of object-oriented design of tools and data structures. Proficient in Java, JavaScript, and Python and experience with other languages such as C, PHP, and Scala.")},{title:"Web Development",desc:"I have a working knowledge of front-end web development as well as an understanding of the basic web technologies."},{title:"SQL/SQLite",desc:"Basic knowledge of MySQL. Experience with SQLite and T-SQL from personal projects."},{title:"PC Diagnostics",desc:"I have built my own (and many other friends') computer(s) and have also been their own personal technical support. Over the years, this has greatly improved my problem solving capabilities."}],h=[{job:"Atlassian",title:"Software Engineer",image:"/images/jobs/atlassian.png",duration:"April 2022 - Present",desc:"Currently, I am working at Atlassian as a part of the Content Experience and the Better Together team for Confluence. While on these teams, I led the migration of our acceptance test suite for, created dashboards in SignalFX for certain metrics that we were tracking, and resolved vulnerability issues for macros within Confluence."},{job:"Brooksource - (The Home Depot)",title:"Software Engineer",image:"/images/jobs/brooksource.png",duration:"June 2021 - April 2022",desc:"Worked for a client of Brooksource's (The Home Depot) where I work as a part of Supply Chain, more specifically the SOQ team. As a part of this team, I am responsible for building and maintaining DAGs (automated workflows) which calculate and load data to hundreds of thousands of SKUs daily using the Apache Airflow, Python, Bigquery and SQL. I have also designed and implemented REST APIs using Spring Boot and HBase to retrieve specific SKU information from Bigtable and create Google Cloud Dataflow tasks to perform ETL operations from Bigquery to Bigtable as well."},{job:"Stonebranch, Inc.",title:"Software Engineer Intern",image:"/images/jobs/stonebranch.png",duration:"January 2021 - June 2021",desc:"During my time at Stonebranch, I was a part of the team that developed and maintained the Universal Controller, a centralized command-center for automation and IT orchestration software. Using Java, I implemented many features such as creating endpoints for the API in order to invoke certain server operations or creating components in the UI for the new functions. I also used Python and Robot Framework to develop unit tests for our automated regression test suite."},{job:"MARX CryptoTech LP",title:"Technical Support Intern",image:"/images/jobs/marx.png",duration:"September 2018 - November 2018",desc:"At MARX, I was an intern and an assistant to one of the engineers of the company. I was responsible for all the tasks that he assigned to me which would include things such as: develop sample programs using a JNI library, format our encrypted usb keys to prepare for programming, and manage the content on our website using a CMS (Pimcore)."},{job:"Parkside District",title:"Lead Server",image:"/images/jobs/pd.png",duration:"June 2018 - March 2020",desc:"As the lead server, I was responsible for mentoring other teammates as well as collaborated and communicated effectively in a face-pace restaurant environment to ensure professional and efficient food delivery. At the end of the night, I had to ensure that all service areas and stations were cleaned and organized."},{job:"PBD Worldwide Inc.",title:"Distribution Associate",image:"/images/jobs/pbd.jpg",duration:"January 2017 - June 2018",desc:"I was an associate for many different departments simultaneously at PBD. I would float around and assist any section that would require my assistance. I was also responsible for unloading trucks, checking in merchandise, and distributing inventory."},{job:"Taco Bell",title:"Service Champion Lead",image:"/images/jobs/tacobell.png",duration:"May 2015 - November 2016",desc:"As Service Champion Lead, I trained all new employees in operating both the sales register as well as preparing food. During my time here, we received the 'Best in the Region' honors for our restaurant by exceeding customer expectations and providing exceptional service during high-volume, fast paced environment."}],g=(t(29),function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"FooterItems"},r.a.createElement("p",{className:"footer-text"},"Feel free to contact me on any of my social media!"),r.a.createElement("div",null,r.a.createElement("ul",{className:"footer-menu"},u.map((function(e,a){return r.a.createElement("li",{key:a},r.a.createElement("a",{className:e.cName,href:e.url},r.a.createElement("img",{className:"footer-image",src:""+e.image,alt:e.title})))})))))}}]),t}(n.Component)),f=(t(30),function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={clicked:!1,scrolledPast:!1},e.listener=document.addEventListener("scroll",(function(a){e.state.scrolledPast||window.scrollY>80&&e.setState({scrolledPast:!0}),e.state.scrolledPast&&window.scrollY<80&&e.setState({scrolledPast:!1})})),e.handleClick=function(){e.setState({clicked:!e.state.clicked})},e}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:!this.state.scrolledPast&&this.props.transparent?"NavbarItems":"NavbarItemsColored"},r.a.createElement("div",{className:"menu-icon",onClick:this.handleClick},r.a.createElement("i",{className:this.state.clicked?"fas fa-times":"fas fa-bars"})),r.a.createElement("ul",{className:this.state.clicked?"nav-menu active":"nav-menu"},d.map((function(e,a){return r.a.createElement("li",{key:a},r.a.createElement("a",{className:e.cName,href:"/#"+e.url},e.title))}))))}}]),t}(n.Component));f.defaultProps={transparent:!1};var v=f,E=t(19),w=t.n(E),b=t(13),y=t.n(b),k=(t(32),function(){return r.a.createElement("div",null,r.a.createElement(v,{transparent:!0}),r.a.createElement("div",{className:"page-container"},r.a.createElement("div",{className:"content-wrap-image"},r.a.createElement("div",{className:"image-text"},r.a.createElement(y.a,null,r.a.createElement("p",{className:"large-text"},"MICHAEL D. SIM"),r.a.createElement("p",{className:"small-text"},"an aspiring developer passionate about innovative technology and software"))),r.a.createElement("div",{className:"home-link-container"},r.a.createElement(y.a,null,r.a.createElement(w.a,{className:"home-link",href:"#more",offset:"150"},"Read more",r.a.createElement("img",{src:"/images/double-arrow-down-white.svg",alt:"arrow"})))))),r.a.createElement("div",{id:"more",className:"content-wrap-home"},r.a.createElement("div",{className:"aboutme"},r.a.createElement("img",{src:"/images/IMG_1813.jpg",alt:"Myself"}),console.log("process env",""),r.a.createElement("p",{className:"aboutme-text"},"Hi there! My name is Michael. Welcome to my website. I am a Software Engineer with a strong focus on Java as that is what I've used primarily in my professional career as well as in school. Aside from this, I like to pick up personal projects using new frameworks and/or languages in order to step out of my comfort zone and grow my skill set to constantly improve as a developer. I actually built this website as a way to teach myself about React.js."))),r.a.createElement("div",{className:"content-wrap-skills"},r.a.createElement("p",{className:"skillsTitle"},"SKILLS"),r.a.createElement("div",{className:"skills"},p.map((function(e,a){return r.a.createElement("div",{className:"box",key:a},r.a.createElement("h3",{className:"title"},e.title),r.a.createElement("p",null,e.desc))}))),r.a.createElement("div",{className:"jump-link"},r.a.createElement("a",{href:"/#"+d[1].url},"Learn more"))),r.a.createElement(g,null))}),N=(t(33),function(){return r.a.createElement("div",{className:"page-container"},r.a.createElement(v,null),r.a.createElement("div",{className:"content-wrap"},r.a.createElement("h3",null,"404"),r.a.createElement("p",null,"Page was not found!")),r.a.createElement(g,null))}),I=(t(34),function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",{className:"page-container"},r.a.createElement("div",{className:"content-wrap"},r.a.createElement("div",{className:"about-me-box"},r.a.createElement("img",{src:"/images/image0.jpg",alt:"Me and my girlfriend"}),r.a.createElement("div",{className:"intro-text"},r.a.createElement("h3",null,"Introduction"),r.a.createElement("p",null,"Hello again and thank you for visiting my page! My name is Michael and I was born and raised in Lawrenceville, GA. I am currently a student at Georgia State University planning to graduate in Fall 2020 with a BS in Computer Science. I enjoy spending my free time on programming, fitness, and learning about new technology. I also like to unwind by playing video games (on a PC that I built) and watching TV shows.                    "))),r.a.createElement("div",{className:"bottom-text"},r.a.createElement("h3",null,"Why Computer Science?"),r.a.createElement("p",null,"I have always been a very curious person ever since I was a little kid. I would always take apart my toys and try to figure out how each part worked and I feel like a lot of that problem solving and logic is used when I started to program. It is very fun to see how smaller things can work together and create something much greater. I have also been very into computers ever since middle school. This was mainly because I was a huge fan of Minecraft at the time and I modded my game pretty often. This showed me a new perspective on how files worked together in a game and how it changes."))),r.a.createElement(g,null)))}),j=(t(35),function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",{className:"page-container"},r.a.createElement("div",{className:"content-wrap"},r.a.createElement("div",{className:"work-container"},h.map((function(e,a){return r.a.createElement("div",{className:"work"},r.a.createElement("img",{src:""+e.image,alt:"job"}),r.a.createElement("div",{className:"work-text",key:a},r.a.createElement("div",{className:"title-box"},r.a.createElement("h3",{className:"work-title"},e.job+" // "),r.a.createElement("p",{className:"work-title"},e.title),r.a.createElement("p",null,e.duration)),r.a.createElement("p",null,e.desc)))}))))),r.a.createElement(g,null))}),S=(t(36),function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={loading:!0,data:[]},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.github.com/users/michaeldsim/repos").then((function(e){return e.json()})).then((function(a){e.setState({data:a})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",{className:"page-container"},r.a.createElement("div",{className:"content-wrap"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Language"))),r.a.createElement("tbody",null,this.state.data.map((function(e){return r.a.createElement("tr",{key:e.id,className:"row"},r.a.createElement("td",{className:"projects-title"},r.a.createElement("a",{href:e.html_url},e.name)),r.a.createElement("td",null,e.description),r.a.createElement("td",{className:"projects-language"},e.language))}))))),r.a.createElement(g,null)))}}]),t}(n.Component)),P=t(20),x=(t(38),function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",{className:"page-container"},r.a.createElement("div",{className:"content-wrap"},r.a.createElement("div",{className:"resume"},r.a.createElement(P.PDFObject,{url:"/images/MichaelSim_ResumeATS.pdf",height:"60vh"})),r.a.createElement("a",{className:"download-button",href:"/images/MichaelDSim_Resume.pdf",download:"MichaelDSim_Resume.pdf"},"Download")),r.a.createElement(g,null)))}),A=t(21),C=t(1);var M=function(){return r.a.createElement(A.a,{basename:""},r.a.createElement(C.d,null,r.a.createElement(C.b,{exact:!0,path:"/",component:k}),r.a.createElement(C.b,{exact:!0,path:"/about",component:I}),r.a.createElement(C.b,{exact:!0,path:"/work",component:j}),r.a.createElement(C.b,{exact:!0,path:"/projects",component:S}),r.a.createElement(C.b,{exact:!0,path:"/resume",component:x}),r.a.createElement(C.b,{exact:!0,path:"/404",component:N,status:404}),r.a.createElement(C.a,{to:"/404"})))};o.a.render(r.a.createElement(M,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.438281fc.chunk.js.map