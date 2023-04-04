export const NavItems = [
    {
        title: 'Home',
        url: '/',
        cName: 'nav-links'
    },
    {
        title: 'Projects',
        url: '/projects',
        cName: 'nav-links'
    },
    {
        title: 'Work Experience',
        url: '/work',
        cName: 'nav-links'
    },
    {
        title: 'Resume',
        url: '/resume',
        cName: 'nav-links'
    },
    {
        title: 'About Me',
        url: '/about',
        cName: 'nav-links'
    }
]

export const FooterItems = [
    {
        title: 'Github',
        url: 'https://github.com/michaeldsim',
        cName: 'footer-links',
        image: '/images/github_icon.png'
    },
    {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/michaeldavidsim/',
        cName: 'footer-links',
        image: '/images/linkedin_icon.png'
    },
    {
        title: 'email',
        url: 'mailto:michael@michaeldavidsim.com',
        cName: 'footer-links',
        image: '/images/email_icon.png'
    }
]

export const Skills = [
    {
        title: 'Object-Oriented Programming',
        desc: `${new Date().getFullYear() - 2017} years of object-oriented design of tools and data structures. Proficient in Java, JavaScript, and Python and experience with other languages such as C, PHP, and Scala.`
    },
    {
        title: 'Web Development',
        desc: 'I have a working knowledge of front-end web development as well as an understanding of the basic web technologies.'
    },
    {
        title: 'SQL/SQLite',
        desc: 'Basic knowledge of MySQL. Experience with SQLite and T-SQL from personal projects.'
    },
    {
        title: 'PC Diagnostics',
        desc: 'I have built my own (and many other friends\') computer(s) and have also been their own personal technical support. Over the years, this has greatly improved my problem solving capabilities.'
    }
]

export const Jobs = [
    {
        job: 'Atlassian',
        title: 'Software Engineer',
        image: '/images/jobs/atlassian.png',
        duration: 'April 2022 - Present',
        desc: 'As a junior backend engineer at Atlassian on Confluence Cloud, I was responsible for developing and maintaining the backend infrastructure of the team collaboration software. My role included designing and implementing new features, optimizing performance, and ensuring the reliability and security of the platform. Working closely with other engineers, product managers, and designers, I gained experience in agile development, code reviews, and continuous learning. At Atlassian, I thrived in a supportive and collaborative culture that values innovation, transparency, and diversity.'
    },
    {
        job: 'Brooksource - (The Home Depot)',
        title: 'Software Engineer',
        image: '/images/jobs/brooksource.png',
        duration: 'June 2021 - April 2022',
        desc: 'Worked for a client of Brooksource\'s (The Home Depot) where I work as a part of Supply Chain, more specifically the SOQ team. As a part of this team, I am responsible for building and maintaining DAGs (automated workflows) which calculate and load data to hundreds of thousands of SKUs daily using the Apache Airflow, Python, Bigquery and SQL. I have also designed and implemented REST APIs using Spring Boot and HBase to retrieve specific SKU information from Bigtable and create Google Cloud Dataflow tasks to perform ETL operations from Bigquery to Bigtable as well.'
    },
    {
        job: 'Stonebranch, Inc.',
        title: 'Software Engineer Intern',
        image: '/images/jobs/stonebranch.png',
        duration: 'January 2021 - June 2021',
        desc: 'During my time at Stonebranch, I was a part of the team that developed and maintained the Universal Controller, a centralized command-center for automation and IT orchestration software. Using Java, I implemented many features such as creating endpoints for the API in order to invoke certain server operations or creating components in the UI for the new functions. I also used Python and Robot Framework to develop unit tests for our automated regression test suite.'
    },
    {
        job: 'MARX CryptoTech LP',
        title: 'Technical Support Intern',
        image: '/images/jobs/marx.png',
        duration: 'September 2018 - November 2018',
        desc: 'At MARX, I was an intern and an assistant to one of the engineers of the company. I was responsible for all the tasks that he assigned to me which would include things such as: develop sample programs using a JNI library, format our encrypted usb keys to prepare for programming, and manage the content on our website using a CMS (Pimcore).'
    },
    {
        job: 'Parkside District',
        title: 'Lead Server',
        image: '/images/jobs/pd.png',
        duration: 'June 2018 - March 2020',
        desc: 'As the lead server, I was responsible for mentoring other teammates as well as collaborated and communicated effectively in a face-pace restaurant environment to ensure professional and efficient food delivery. At the end of the night, I had to ensure that all service areas and stations were cleaned and organized.'
    },
    {
        job: 'PBD Worldwide Inc.',
        title: 'Distribution Associate',
        image: '/images/jobs/pbd.jpg',
        duration: 'January 2017 - June 2018',
        desc: 'I was an associate for many different departments simultaneously at PBD. I would float around and assist any section that would require my assistance. I was also responsible for unloading trucks, checking in merchandise, and distributing inventory.'
    },
    {
        job: 'Taco Bell',
        title: 'Service Champion Lead',
        image: '/images/jobs/tacobell.png',
        duration: 'May 2015 - November 2016',
        desc: 'As Service Champion Lead, I trained all new employees in operating both the sales register as well as preparing food. During my time here, we received the \'Best in the Region\' honors for our restaurant by exceeding customer expectations and providing exceptional service during high-volume, fast paced environment.'
    }
]
