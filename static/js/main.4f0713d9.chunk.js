(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[0],{23:function(e,a,t){e.exports=t(44)},28:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},38:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(18),i=t.n(r),s=(t(28),t(7)),c=t(8),o=t(10),m=t(9),u=[{title:"Home",url:"/",cName:"nav-links"},{title:"Projects",url:"/projects",cName:"nav-links"},{title:"Work Experience",url:"/work",cName:"nav-links"},{title:"Resume",url:"/resume",cName:"nav-links"},{title:"About Me",url:"/about",cName:"nav-links"}],d=[{title:"Github",url:"https://github.com/michaeldsim",cName:"footer-links",image:"/images/github_icon.png"},{title:"LinkedIn",url:"https://www.linkedin.com/in/michaeldavidsim/",cName:"footer-links",image:"/images/linkedin_icon.png"},{title:"email",url:"mailto:michael@michaeldavidsim.com",cName:"footer-links",image:"/images/email_icon.png"}],h=[{title:"Object-Oriented Programming",desc:"3 years of object-oriented design of tools and data structures. Proficient in Java and Python and experience with other languages such as C, PHP, and Scala."},{title:"Web Development",desc:"I have a working knowledge of front-end web development as well as an understanding of the basic web technologies."},{title:"SQL/SQLite",desc:"Basic knowledge of MySQL. Experience with SQLite and T-SQL from personal projects."},{title:"PC Diagnostics",desc:"I have built my own (and many other friends') computer(s) and have also been their own personal technical support. Over the years, this has greatly improved my problem solving capabilities."}],p=[{job:"MARX CryptoTech LP",title:"Technical Support Intern",image:"/images/jobs/marx.png",duration:"September 2018 - November 2018",desc:"At MARX, I was an intern and an assistant to one of the engineers of the company. I was responsible for all the tasks that he assigned to me which would include things such as: develop sample programs using a JNI library, format our encrypted usb keys to prepare for programming, and manage the content on our website using a CMS (Pimcore)."},{job:"Parkside District",title:"Lead Server",image:"/images/jobs/pd.png",duration:"June 2018 - March 2020",desc:"As the lead server, I was responsible for mentoring other teammates as well as collaborated and communicated effectively in a face-pace restaurant environment to ensure professional and efficient food delivery. At the end of the night, I had to ensure that all service areas and stations were cleaned and organized."},{job:"PBD Worldwide Inc.",title:"Distribution Associate",image:"/images/jobs/pbd.jpg",duration:"January 2017 - June 2018",desc:"I was an associate for many different departments simultaneously at PBD. I would float around and assist any section that would require my assistance. I was also responsible for unloading trucks, checking in merchandise, and distributing inventory."},{job:"Taco Bell",title:"Service Champion Lead",image:"/images/jobs/tacobell.png",duration:"May 2015 - November 2016",desc:"As Service Champion Lead, I trained all new employees in operating both the sales register as well as preparing food. During my time here, we received the 'Best in the Region' honors for our restaurant by exceeding customer expectations and providing exceptional service during high-volume, fast paced environment."}],g=(t(29),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",{className:"FooterItems"},l.a.createElement("p",{className:"footer-text"},"Feel free to contact me on any of my social media!"),l.a.createElement("div",null,l.a.createElement("ul",{className:"footer-menu"},d.map((function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("a",{className:e.cName,href:e.url},l.a.createElement("img",{className:"footer-image",src:"/website-v2"+e.image,alt:e.title})))})))))}}]),t}(n.Component)),v=(t(30),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={clicked:!1,scrolledPast:!1},e.listener=document.addEventListener("scroll",(function(a){e.state.scrolledPast||window.scrollY>80&&e.setState({scrolledPast:!0}),e.state.scrolledPast&&window.scrollY<80&&e.setState({scrolledPast:!1})})),e.handleClick=function(){e.setState({clicked:!e.state.clicked})},e}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:this.state.scrolledPast||"/website-v2/"!==window.location.pathname?"NavbarItemsColored":"NavbarItems"},l.a.createElement("div",{className:"menu-icon",onClick:this.handleClick},l.a.createElement("i",{className:this.state.clicked?"fas fa-times":"fas fa-bars"})),l.a.createElement("ul",{className:this.state.clicked?"nav-menu active":"nav-menu"},u.map((function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("a",{className:e.cName,href:e.url},e.title))}))))}}]),t}(n.Component)),f=t(19),E=t.n(f),w=t(12),b=t.n(w),y=(t(32),function(){return l.a.createElement("div",null,l.a.createElement(b.a,null,l.a.createElement(v,null)),l.a.createElement("div",{className:"page-container"},l.a.createElement("div",{className:"content-wrap-image"},l.a.createElement("div",{className:"image-text"},l.a.createElement(b.a,null,l.a.createElement("p",{className:"large-text"},"MICHAEL D. SIM"),l.a.createElement("p",{className:"small-text"},"an aspiring developer passionate about innovative technology and software"))),l.a.createElement("div",{className:"home-link-container"},l.a.createElement(b.a,null,l.a.createElement(E.a,{className:"home-link",href:"#more",offset:"150"},"Read more",l.a.createElement("img",{src:"/website-v2/images/double-arrow-down-white.svg",alt:"arrow"})))))),l.a.createElement("div",{id:"more",className:"content-wrap-home"},l.a.createElement("div",{className:"aboutme"},l.a.createElement("img",{src:"/website-v2/images/IMG_1813.jpg",alt:"Myself"}),console.log("process env","/website-v2"),l.a.createElement("p",{className:"aboutme-text"},"Hi there! My name is Michael. Welcome to my website. I am currently an undergraduate student at Georgia State University studying Computer Science. Over the years, I have completed a few small personal projects to improve my skills as a developer along with my course work. I have a strong knowledge in Java which is what I mainly used for most of my courses. I also have experience in Python, HTML, CSS, JS, and ReactJS (which I used to create this website)."))),l.a.createElement("div",{className:"content-wrap-skills"},l.a.createElement("p",{className:"skillsTitle"},"SKILLS"),l.a.createElement("div",{className:"skills"},h.map((function(e,a){return l.a.createElement("div",{className:"box",key:a},l.a.createElement("h3",{className:"title"},e.title),l.a.createElement("p",null,e.desc))}))),l.a.createElement("div",{className:"jump-link"},l.a.createElement("a",{href:"/website-v2"+u[1].url},"Learn more"))),l.a.createElement(g,null))}),N=(t(33),function(){return l.a.createElement("div",{className:"page-container"},l.a.createElement(v,null),l.a.createElement("div",{className:"content-wrap"},l.a.createElement("h3",null,"404"),l.a.createElement("p",null,"Page was not found!")),l.a.createElement(g,null))}),k=(t(34),function(){return l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement("div",{className:"page-container"},l.a.createElement("div",{className:"content-wrap"},l.a.createElement("div",{className:"about-me-box"},l.a.createElement("img",{src:"/website-v2/images/image0.jpg",alt:"Me and my girlfriend"}),l.a.createElement("div",{className:"intro-text"},l.a.createElement("h3",null,"Introduction"),l.a.createElement("p",null,"Hello again and thank you for visiting my page! My name is Michael and I was born and raised in Lawrenceville, GA. I am currently a student at Georgia State University planning to graduate in Fall 2020 with a BS in Computer Science. I enjoy spending my free time on programming, fitness, and learning about new technology. I also like to unwind by playing video games (on a PC that I built) and watching TV shows.                    "))),l.a.createElement("div",{className:"bottom-text"},l.a.createElement("h3",null,"Why Computer Science?"),l.a.createElement("p",null,"I have always been a very curious person ever since I was a little kid. I would always take apart my toys and try to figure out how each part worked and I feel like a lot of that problem solving and logic is used when I started to program. It is very fun to see how smaller things can work together and create something much greater. I have also been very into computers ever since middle school. This was mainly because I was a huge fan of Minecraft at the time and I modded my game pretty often. This showed me a new perspective on how files worked together in a game and how it changes."))),l.a.createElement(g,null)))}),I=(t(35),function(){return l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement("div",{className:"page-container"},l.a.createElement("div",{className:"content-wrap"},l.a.createElement("div",{className:"work-container"},p.map((function(e,a){return l.a.createElement("div",{className:"work"},l.a.createElement("img",{src:"/website-v2"+e.image,alt:"job"}),l.a.createElement("div",{className:"work-text",key:a},l.a.createElement("div",{className:"title-box"},l.a.createElement("h3",{className:"work-title"},e.job+" // "),l.a.createElement("p",{className:"work-title"},e.title),l.a.createElement("p",null,e.duration)),l.a.createElement("p",null,e.desc)))}))))),l.a.createElement(g,null))}),j=(t(36),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={loading:!0,data:[]},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.github.com/users/michaeldsim/repos").then((function(e){return e.json()})).then((function(a){e.setState({data:a})}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement("div",{className:"page-container"},l.a.createElement("div",{className:"content-wrap"},l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Language"))),l.a.createElement("tbody",null,this.state.data.map((function(e){return l.a.createElement("tr",{key:e.id,className:"row"},l.a.createElement("td",{className:"projects-title"},l.a.createElement("a",{href:e.html_url},e.name)),l.a.createElement("td",null,e.description),l.a.createElement("td",{className:"projects-language"},e.language))}))))),l.a.createElement(g,null)))}}]),t}(n.Component)),S=t(20),x=(t(38),function(){return l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement("div",{className:"page-container"},l.a.createElement("div",{className:"content-wrap"},l.a.createElement("div",{className:"resume"},l.a.createElement(S.PDFObject,{url:"/website-v2/images/MichaelDSim_Resume.pdf",height:"60vh"})),l.a.createElement("a",{className:"download-button",href:"/website-v2/images/MichaelDSim_Resume.pdf",download:"MichaelDSim_Resume.pdf"},"Download")),l.a.createElement(g,null)))}),M=t(21),P=t(1);var C=function(){return l.a.createElement(M.a,{basename:"/website-v2"},l.a.createElement(P.d,null,l.a.createElement(P.b,{exact:!0,path:"/",component:y}),l.a.createElement(P.b,{exact:!0,path:"/about",component:k}),l.a.createElement(P.b,{exact:!0,path:"/work",component:I}),l.a.createElement(P.b,{exact:!0,path:"/projects",component:j}),l.a.createElement(P.b,{exact:!0,path:"/resume",component:x}),l.a.createElement(P.b,{exact:!0,path:"/404",component:N,status:404}),l.a.createElement(P.a,{to:"/404"})))};i.a.render(l.a.createElement(C,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.4f0713d9.chunk.js.map