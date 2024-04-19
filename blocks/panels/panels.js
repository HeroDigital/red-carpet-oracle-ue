export default function decorate(block) {
  const panelPlaceholderMarkup = `
    <div class="panel panel--left">
      <div class="panel__top">
        <button class="panel-back">
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path d="M10.293 4.293a1 1 0 0 0-1.414 0L4.293 8.586a1 1 0 0 0 0 1.414L8.879 14.707a1 1 0 0 0 1.414-1.414L6.414 9l3.879-3.879a1 1 0 0 0 0-1.414z" fill="currentColor"></path>
          </svg>
          Back
        </button>
        <button class="panel-opener">
          <svg width="9" height="18" viewBox="0 0 9 18">
            <path d="M4.5 3A1.5 1.5 0 1 0 4.5 6 1.5 1.5 0 0 0 4.5 3zm0 6A1.5 1.5 0 1 0 4.5 12 1.5 1.5 0 0 0 4.5 9zm0 6A1.5 1.5 0 1 0 4.5 18 1.5 1.5 0 0 0 4.5 15z" fill="currentColor"></path>
          </svg>
        </button>
      </div>
      <div class="panel__init-content">
        <h2>
          <span>Oracle Cloud</span>
          Applications
        </h2>
        <p>
          A complete suite of cloud applications delivering consistent processes and data across your business
        </p>
        <button class="panel-button">
          Explore Cloud Apps
        </button>
      </div>
      <div class="panel__menu">
        <h3>
          <span>Oracle Cloud</span>
          Applications
        </h3>
        <ul class="menu">
          <li>
            <button data-selected>Oracle Cloud Applications</button>
            <template>
              <div class="fold__content" style="background-color: rgb(51, 85, 60)">
                <h3>
                  Oracle Cloud Applications
                </h3>
                <blockquote>
                  <p class="lg-only">
                    More than 30,000 organizations of all sizes rely on Oracle Cloud Applications to run their most important front- and back-office business operations. Each suite of applications is designed to work together to help eliminate IT complexity and maximize the benefits of data. Built and run on Oracle Cloud Infrastructure, the applications deliver the scalability, security, and performance today’s businesses demand.
                  </p>
                  <p>
                    "Built on more than a decade of innovation, Oracle offers a complete application portfolio for the modern digital business. Oracle's cloud platform provides a common data model, incorporates the latest technology, and delivers a regular and frequent cadence of new functionality, helping customers to modernize and innovate at the heart of their business."
                  </p>
                  <cite>
                    <span>Tim Jennings</span>
                    Chief Analyst, Enterprise IT, Omdia          
                  </cite>
                </blockquote>
                <a href="#" class="panel-button">
                  Learn More
                </a>
              </div>
              <div class="fold__clients" style="background-image: url('https://www.oracle.com/node/oce/storyhub/prod/api/v1.1/assets/CONT3D3B1F77EAF44D8D891C79294808866C/native/FedEx-1080-stock.jpg');">
                <img src="https://www.oracle.com/node/oce/storyhub/prod/api/v1.1/assets/CONTC1DBB987BA5045BF92E4538747334988/native/fedex.png" alt="FedEx" />
                <h3>
                  Cloud automation helps FedEx respond to changes 2X faster
                </h3>
                <p class="lg-only">
                  With Oracle Cloud ERP, EPM, SCM, and Analytics, FedEx responds to business challenges in real time and better supports organic and acquired growth.
                </p>
                <ul class="lg-only">
                  <li>
                    <a href="#>Oracle Cloud ERP</a>
                  </li>
                  <li>
                    <a href="#>Oracle Cloud SCM</a>
                  </li>
                  <li>
                    <a href="#>Oracle Analytics</a>
                  </li>
                  <li>
                    <a href="#>OCI Functions</a>
                  </li>          
                </ul>
                <a href="#" class="panel-button">
                  Read the story
                </a>
              </div>
            </template>
          </li>
          <li>
            <button>Fusion Applications Suite</button>
            <template>
              <div class="fold__content" style="background-color: rgb(51, 85, 60)">
                <h3>
                  Fusion Applications Suite
                </h3>
                <blockquote>
                  <p class="lg-only">
                    Oracle Fusion Cloud Applications is the world’s most complete cloud applications suite. Engineered to work together and with a modern user experience, Fusion Cloud Applications delivers continuous innovation via quarterly updates across every business function: finance, human resources, supply chain, manufacturing, sales, customer service, and marketing.
                  </p>
                  <p>
                    "Oracle is already a long way ahead of the competition. Literally, Oracle is the only “leader” for Cloud ERP."
                  </p>
                  <cite>
                    <span>The Oracle Fusion Cloud Is The Real Deal And That’s Bad News For SAP</span>
                    Patrick Moorehead, Forbes, July, 22, 2020
                  </cite>
                </blockquote>
                <a href="#" class="panel-button">
                  Learn More
                </a>
              </div>
              <div class="fold__clients" style="background-image: url('https://www.oracle.com/node/oce/storyhub/prod/api/v1.1/assets/CONTAF205687F8FA47228CD25A1164A24E83/native/rc04v2x1-western-2-.jpg');">
                <img src="https://www.oracle.com/node/oce/storyhub/prod/api/v1.1/assets/CONT0439FFC139EE4F8AB5CA3DF91344CEB6/native/customerlogo-western-digital-2022-wht.svg" alt="Western Digital" />
                <h3>
                  Western Digital consolidates finance apps with Oracle Cloud ERP
                </h3>
                <p class="lg-only">
                  The hard disk manufacturer uses Oracle Cloud ERP to automate processes and gain a single, real-time view of its financial data.
                </p>
                <ul class="lg-only">
                  <li>
                    <a href="#>Oracle Cloud ERP</a>
                  </li>
                  <li>
                    <a href="#>Oracle Integration</a>
                  </li>          
                </ul>
                <a href="#" class="panel-button">
                  Read the story
                </a>
              </div>
            </template>
          </li>
          <li>
            <button>Netsuite Applications</button>
            <template>
              <div class="fold__content" style="background-color: rgb(51, 85, 60)">
                <h3>
                  NetSuite Applications
                </h3>
                <blockquote>
                  <p class="lg-only">
                    NetSuite built the first unified suite of cloud applications that companies can use to run their entire business – all in one place. Organizations around the world use NetSuite to more easily grow and adapt to change.
                  </p>
                  <p>
                    "NetSuite is a cloud-based application suite focused on finance, operations and customer relations. Its industry dimensions and global focus make it a sure bet for the future."
                  </p>
                  <cite>
                    <span>Mickey North Rizza</span>
                    Program VP, Enterprise Applications and Digital Commerce, IDC
                  </cite>
                </blockquote>
                <a href="#" class="panel-button">
                  Learn More
                </a>
              </div>
              <div class="fold__clients" style="background-image: url('https://www.oracle.com/a/ocom/img/rh02-storyhub-applications-03.jpg');">
                <img src="https://www.oracle.com/node/oce/storyhub/prod/api/v1.1/assets/CONTFE0C83CEBC8A48A9B09AFF5DFBA0987E/native/customerlogo-hint.svg" alt="Hint" />
                <h3>
                  Hint keeps business flowing with NetSuite
                </h3>
                <p class="lg-only">
                  For Hint, a maker of unsweetened, fruit-flavored waters, having cloud-based tools like NetSuite gives employees access to key data such as inventory levels to help make the business be flexible and ...
                </p>
                <a href="#" class="panel-button">
                  Learn More
                </a>
              </div>
            </template>
          </li>
          <li>
            <button>Industry-Specific Applications</button>
            <template>
              <div class="fold__content" style="background-color: rgb(51, 85, 60)">
                <h3>
                  Industry-Specific Applications
                </h3>
                <blockquote>
                  <p class="lg-only">
                    We understand your industry is unlike any other. Only Oracle offers the deep industry domain expertise and hundreds of industry cloud solutions you need to meet your most complex operational, regulatory and customer challenges
                  </p>
                  <p>
                    "Oracle's depth of expertise and technology is essential as industries look to adapt and modernize to meet new operational, regulatory, and customer demands," said Robert Parker, Senior Vice President, Enterprise Applications, Data Intelligence, Services, and Industry Research, IDC,  "Oracle's strategy goes beyond verticalizing back-office applications. It offers hundreds of purpose-built, front-office applications that help customers solve complex issues and capitalize on opportunities – from engaging utility customers in conservation efforts and thwarting financial crime. Oracle’s portfolio of vertical applications is robust and relevant"
                  </p>
                  <cite>
                    <span>Robert Parker</span>
                    <span>Senior Vice President, Enterprise Applications, Data Intelligence, Services, and Industry</span>
                    Research, IDC
                  </cite>
                </blockquote>
                <a href="#" class="panel-button">
                  Learn More
                </a>
              </div>
              <div class="fold__clients" style="background-image: url('https://www.oracle.com/a/ocom/img/rh02-storyhub-applications-02.jpg');">
                <img src="https://www.oracle.com/node/oce/storyhub/prod/api/v1.1/assets/CONT398D9A351CD74D3CA13BBAB8839E65A0/native/rc28-cx-industry-customer-success-logo-dish-r1.png" alt="Dish Wireless" />
                <h3>
                  DISH Wireless Selects Oracle for 5G Core Service-Based Architecture
                </h3>
                <p class="lg-only">
                  5G network slicing and cloud native automation enable DISH Wireless to power a new level of innovation and services for customers
                </p>
                <a href="#" class="panel-button">
                  Learn more
                </a>
              </div>
            </template>
          </li>
        </ul>
      </div>
    </div>
    <div class="fold fold--left">
      <div class="fold__content" style="background-color: rgb(51, 85, 60)">
        <h3>
          Oracle Cloud Applications
        </h3>
        <blockquote>
          <p class="lg-only">
            More than 30,000 organizations of all sizes rely on Oracle Cloud Applications to run their most important front- and back-office business operations. Each suite of applications is designed to work together to help eliminate IT complexity and maximize the benefits of data. Built and run on Oracle Cloud Infrastructure, the applications deliver the scalability, security, and performance today’s businesses demand.
          </p>
          <p>
            "Built on more than a decade of innovation, Oracle offers a complete application portfolio for the modern digital business. Oracle's cloud platform provides a common data model, incorporates the latest technology, and delivers a regular and frequent cadence of new functionality, helping customers to modernize and innovate at the heart of their business."
          </p>
          <cite>
            <span>Tim Jennings</span>
            Chief Analyst, Enterprise IT, Omdia          
          </cite>
        </blockquote>
        <a href="#" class="panel-button">
          Learn More
        </a>
      </div>
      <div class="fold__clients" style="background-image: url('https://www.oracle.com/node/oce/storyhub/prod/api/v1.1/assets/CONT3D3B1F77EAF44D8D891C79294808866C/native/FedEx-1080-stock.jpg');">
        <img src="https://www.oracle.com/node/oce/storyhub/prod/api/v1.1/assets/CONTC1DBB987BA5045BF92E4538747334988/native/fedex.png" alt="FedEx" />
        <h3>
          Cloud automation helps FedEx respond to changes 2X faster
        </h3>
        <p class="lg-only">
          With Oracle Cloud ERP, EPM, SCM, and Analytics, FedEx responds to business challenges in real time and better supports organic and acquired growth.
        </p>
        <ul class="lg-only">
          <li>
            <a href="#>Oracle Cloud ERP</a>
          </li>
          <li>
            <a href="#>Oracle Cloud SCM</a>
          </li>
          <li>
            <a href="#>Oracle Analytics</a>
          </li>
          <li>
            <a href="#>OCI Functions</a>
          </li>          
        </ul>
        <a href="#" class="panel-button">
          Read the story
        </a>
      </div>
    </div>
    <div class="panel panel--right">
      <div class="panel__top">
        <button class="panel-back">
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path d="M10.293 4.293a1 1 0 0 0-1.414 0L4.293 8.586a1 1 0 0 0 0 1.414L8.879 14.707a1 1 0 0 0 1.414-1.414L6.414 9l3.879-3.879a1 1 0 0 0 0-1.414z" fill="currentColor"></path>
          </svg>
          Back
        </button>
        <button class="panel-opener">
          <svg width="9" height="18" viewBox="0 0 9 18">
            <path d="M4.5 3A1.5 1.5 0 1 0 4.5 6 1.5 1.5 0 0 0 4.5 3zm0 6A1.5 1.5 0 1 0 4.5 12 1.5 1.5 0 0 0 4.5 9zm0 6A1.5 1.5 0 1 0 4.5 18 1.5 1.5 0 0 0 4.5 15z" fill="currentColor"></path>
          </svg>
        </button>
      </div>
      <div class="panel__init-content">
        <h2>
          <span>Oracle Cloud</span>
          Infraestructure
        </h2>
        <p>
          An automated, secure platform for migrating enterprise workloads and building new cloud native apps
        </p>
        <button class="panel-button">
          Explore OCI
        </button>
      </div>
      <div class="panel__menu">
        <h3>
          <span>Oracle Cloud</span>
          Infrastructure
        </h3>
        <ul class="menu">
          <li>
            <button data-selected>AI and Machine Learning</button>
            <template>
              <div class="fold__content" style="background-color: rgb(10, 63, 70)">
                <h3>
                  AI and Machine Learning
                </h3>
                <blockquote>
                  <p class="lg-only">
                    Oracle Cloud Infrastructure offers a wide range of AI and machine learning services and tools that enable data scientists, developers, and business users to get started with data science, fast.
                  </p>
                </blockquote>
                <a href="#" class="panel-button">
                  Learn More
                </a>
              </div>
              <div class="fold__clients" style="background-image: url('https://www.oracle.com/a/ocom/img/rh02-storyhub-infrastructure-03.jpg');">
                <h3>
                  Easily add pretrained machine learning and data science models to your applications
                </h3>
                <p class="lg-only">
                  Custom train AI and ML models on your organization’s own application data to help understand business context and deliver more-accurate results.
                </p>
                <a href="#" class="panel-button">
                  Learn More
                </a>
              </div>
            </template>
          </li>
          <li>
            <button>Compute</button>
            <template>
              <div class="fold__content" style="background-color: rgb(10, 63, 70)">
                <h3>
                  Compute
                </h3>
                <blockquote>
                  <p class="lg-only">
                    Oracle's Compute services include cloud virtual machines with custom core and memory shapes, bare metal performant infrastructure for enterprise application and High Performance Computing workloads, as well as cloud-native container services and on-demand serverless functions, all at globally consistent and market leading pricing.
                  </p>
                  <p>
                    "Study participants found that migrating these business-critical workloads to Oracle Cloud, as compared to Amazon Web Services (AWS), delivers significantly better price/performance, lower ongoing operations cost, and an improved ability to innovate."
                  </p>
                  <cite>
                    <span>Pique Solutions</span>
                    Migrating Enterprise Workloads to the Cloud. Customer Experiences with Oracle Cloud and Amazon Web Services. Sep 2019
                  </cite>
                </blockquote>
                <a href="#" class="panel-button">
                  Learn More
                </a>
              </div>
              <div class="fold__clients" style="background-image: url('https://www.oracle.com/node/oce/storyhub/prod/api/v1.1/assets/CONTAF205687F8FA47228CD25A1164A24E83/native/rc04v2x1-western-2-.jpg');">
                <h3>
                  Denso Techno reduces vehicle noise analysis time by 5X on Oracle Cloud
                </h3>
                <p class="lg-only">
                  Automotive parts manufacturer cuts complex fluid noise analysis and simulation times with high-performance computing on Oracle Cloud Infrastructure.
                </p>
                <ul class="lg-only">
                  <li>
                    <a href="#>Oracle Cloud Infrastructure</a>
                  </li>
                  <li>
                    <a href="#>Oracle Cloud Compute</a>
                  </li>          
                </ul>
                <a href="#" class="panel-button">
                  Read the story
                </a>
              </div>
            </template>
          </li>
          <li>
            <button>Database Services</button>
            <template>
              <div class="fold__content" style="background-color: rgb(10, 63, 70)">
                <h3>
                  Database Services
                </h3>
                <blockquote>
                  <p class="lg-only">
                    Database Service delivers an automated Oracle Database running on fully managed Oracle Cloud Infrastructure with customer-controllable automation of database lifecycle operations.
                  </p>
                  <p class="lg-only">
                    Unique capabilities automates Oracle Database lifecycle and administration while providing full administrative privileges on the database and OS.
                  </p>
                  <p class="lg-only">
                    Provides the simplicity, elasticity, and pay-per-use benefits of Oracle Cloud for the industry-leading Oracle Database. Compatibility with all supported versions of Oracle Database enables customers to easily move workloads to Oracle Cloud Infrastructure.
                  </p>
                </blockquote>
                <a href="#" class="panel-button">
                  Learn More
                </a>
              </div>
              <div class="fold__clients" style="background-image: url('https://www.oracle.com/node/oce/storyhub/prod/api/v1.1/assets/CONTAF205687F8FA47228CD25A1164A24E83/native/rc04v2x1-western-2-.jpg');">
                <img src="https://www.oracle.com/node/oce/storyhub/prod/api/v1.1/assets/CONTC1DBB987BA5045BF92E4538747334988/native/fedex.png" alt="FedEx" />
                <h3>
                  FedEx moves accounts receivable system to Oracle Cloud
                </h3>
                <p class="lg-only">
                  Migrating to Oracle Cloud Infrastructure helped FedEx lower costs, expand finance and revenue capabilities, and give IT teams more time for 'change-the-business' initiatives.
                </p>
                <ul class="lg-only">
                  <li>
                    <a href="#>Oracle Cloud Infrastructure</a>
                  </li>
                  <li>
                    <a href="#>Oracle Exadata Cloud Service</a>
                  </li>          
                  <li>
                    <a href="#">Customer Success Services</a>
                  </li>          
                </ul>
                <a href="#" class="panel-button">
                  Learn more
                </a>
              </div>
            </template>
          </li>
          <li>
            <button>Networking</button>
            <template>
              <div class="fold__content" style="background-color: rgb(10, 63, 70)">
                <h3>
                  Networking
                </h3>
                <blockquote>
                  <p class="lg-only">
                    Networking enables secure connection to a customizable, isolated virtual cloud network (VCN) as the heart of your cloud deployment. Inexpensive data egress charges allow enterprises to save significantly compared to other public clouds.
                  </p>
                  <p>
                    "We move fast. We finished migrating to Oracle Cloud in less than 30 days, and we’ve already seen huge benefits. We’ve saved 60 percent of our costs...We can open up more environments while staying within our budget."
                  </p>
                  <cite>
                    <span>Katie Horvath</span>
                    Chief Executive Officer, Naveego
                  </cite>
                </blockquote>
                <a href="#" class="panel-button">
                  Learn More
                </a>
              </div>
              <div class="fold__clients" style="background-image: url('https://www.oracle.com/a/ocom/img/rh02-storyhub-infrastructure-01.jpg');">
                <img src="https://www.oracle.com/node/oce/storyhub/prod/api/v1.1/assets/CONT2F9CF3BBF40243F6A3342863E7B678F3/native/customerlogo-specialized.svg" alt="Specialized" />
                <h3>
                  Specialized Bicycle Components shifts to Oracle Cloud
                </h3>
                <p class="lg-only">
                  Amid a bike-buying boom, leading bicycle manufacturer moves its Oracle E-Business Suite and Agile PLM applications to Oracle Cloud Infrastructure.
                </p>
                <ul class="lg-only">
                  <li>
                    <a href="#>Oracle Cloud Infrastructure</a>
                  </li>
                  <li>
                    <a href="#>Oracle Exadata Cloud Service</a>
                  </li>          
                  <li>
                    <a href="#">Compute</a>
                  </li>          
                  <li>
                    <a href="#">Oracle Enterprise Manager</a>
                  </li>          
                </ul>
                <a href="#" class="panel-button">
                  Read the story
                </a>
              </div>
            </template>
          </li>
          <li>
            <button>Security, Identity and Compliance</button>
            <template>
              <div class="fold__content" style="background-color: rgb(10, 63, 70)">
                <h3>
                  Security, Identity, and Compliance
                </h3>
                <blockquote>
                  <p class="lg-only">
                    Oracle security, identity, and compliance solutions protect your most valuable data in the cloud and on-premises. Oracle's approach leads with security first, built on our decades of experience securing data and applications. Oracle Cloud delivers a more secure cloud to our customers, building trust and protecting their most valuable data.
                  </p>
                  <p>
                    "We chose Oracle Cloud Infrastructure because of its industry-leading security, outstanding performance, and unmatched level of support."
                  </p>
                  <cite>
                    <span>Eric S. Yuan</span>
                    CEO, Zoom
                  </cite>
                </blockquote>
                <a href="#" class="panel-button">
                  Learn More
                </a>
              </div>
              <div class="fold__clients" style="background-image: url('https://www.oracle.com/a/ocom/img/rh02-storyhub-infrastructure-02.jpg');">
                <img src="https://www.oracle.com/node/oce/storyhub/prod/api/v1.1/assets/CONT6A04054EC5C8486FBC51ED9CE2B9426F/native/customerlogo-thomson-reuters-wht.svg" alt="Thomson Reuters" />
                <h3>
                  Thomson Reuters rolls out ONESOURCE with zero downtime on Oracle Cloud
                </h3>
                <p class="lg-only">
                  Thomson Reuters extends its core ONESOURCE indirect tax application on Oracle Autonomous Database to increase availability, scalability, and security.
                </p>
                <ul class="lg-only">
                  <li>
                    <a href="#>Oracle Cloud Infrastructure</a>
                  </li>
                  <li>
                    <a href="#>Oracle Autonomous Database</a>
                  </li>          
                  <li>
                    <a href="#">Oracle Cloud ERP</a>
                  </li>          
                </ul>
                <a href="#" class="panel-button">
                  Read the story
                </a>
              </div>
            </template>
          </li>
          <li>
            <button>Storage</button>
            <template>
              <div class="fold__content" style="background-color: rgb(10, 63, 70)">
                <h3>
                  Storage
                </h3>
                <blockquote>
                  <p class="lg-only">
                    Cloud storage includes low cost, high performance, local, object, file, block, and archive storage services. Customers can securely move data to the cloud with the storage gateway and data transfer service.
                  </p>
                  <p>
                    "We ran our VDBench tests for both bare metal and VM shapes using both the local NVMe storage (DenseIO) and network block storage (Standard). The performance, simply put, blew us away"
                  </p>
                  <cite>
                    Storagreview.com
                  </cite>
                </blockquote>
                <a href="#" class="panel-button">
                  Learn More
                </a>
              </div>
              <div class="fold__clients" style="background-image: url('https://www.oracle.com/a/ocom/img/rh02-storyhub-infrastructure-02.jpg');">
                <h3>
                  UC Davis helps make drugs safer using Oracle Cloud HPC
                </h3>
                <p class="lg-only">
                  UC Davis researchers run molecular dynamics and machine learning models twice as fast as before using Oracle High-Performance Computing.
                </p>
                <ul class="lg-only">
                  <li>
                    <a href="#>Machine Learning Services</a>
                  </li>
                  <li>
                    <a href="#>Compute</a>
                  </li>          
                  <li>
                    <a href="#">Storage</a>
                  </li>          
                </ul>
                <a href="#" class="panel-button">
                  Read the story
                </a>
              </div>
            </template>
          </li>
        </ul>
      </div>
    </div>
    <div class="fold fold--right">
      <div class="fold__content" style="background-color: rgb(10, 63, 70)">
        <h3>
          AI and Machine Learning
        </h3>
        <blockquote>
          <p class="lg-only">
            Oracle Cloud Infrastructure offers a wide range of AI and machine learning services and tools that enable data scientists, developers, and business users to get started with data science, fast.
          </p>
        </blockquote>
        <a href="#" class="panel-button">
          Learn More
        </a>
      </div>
      <div class="fold__clients" style="background-image: url('https://www.oracle.com/a/ocom/img/rh02-storyhub-infrastructure-03.jpg');">
        <h3>
          Easily add pretrained machine learning and data science models to your applications
        </h3>
        <p class="lg-only">
          Custom train AI and ML models on your organization’s own application data to help understand business context and deliver more-accurate results.
        </p>
        <a href="#" class="panel-button">
          Learn More
        </a>
      </div>
    </div>
  `;

  block.innerHTML = panelPlaceholderMarkup;

  const folds = block.querySelectorAll('.fold');
  const panels = block.querySelectorAll('.panel');
  const openers = block.querySelectorAll('.panel-opener');
  const triggers = block.querySelectorAll('.panel-button');
  const backs = block.querySelectorAll('.panel-back');
  const menuButtons = block.querySelectorAll('.menu button');

  triggers.forEach((button) => {
    button.addEventListener('click', (event) => {
      block.scrollIntoView({ behavior: 'smooth', block: 'start' });
      folds.forEach((foldItem) => foldItem.classList.remove('open'));
      panels.forEach((panelItem) => panelItem.classList.remove('open'));
      const panel = event.target.closest('.panel');
      panel.classList.add('open');
      const foldItem = panel.nextElementSibling;
      foldItem.classList.add('open');
    });
  });

  openers.forEach((button) => {
    button.addEventListener('click', (event) => {
      const panel = event.target.closest('.panel');
      panel.classList.toggle('open-menu');
    });
  });

  backs.forEach((button) => {
    button.addEventListener('click', () => {
      panels.forEach((panelItem) => panelItem.classList.remove('open'));
      panels.forEach((panelItem) => panelItem.classList.remove('open-menu'));
      folds.forEach((foldItem) => foldItem.classList.remove('open'));
    });
  });

  menuButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const menu = event.target.closest('.menu');
      const li = event.target.closest('li');
      const template = li.querySelector('template');
      const panel = event.target.closest('.panel');
      const fold = panel.nextElementSibling;

      menu
        .querySelectorAll('button')
        .forEach((menuButton) => menuButton.removeAttribute('data-selected'));
      li.querySelector('button').setAttribute('data-selected', '');
      fold.innerHTML = template.innerHTML;
    });
  });
}
