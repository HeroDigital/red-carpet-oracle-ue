export default function decorate(block) {
  
  /* POC code */
  const panelPlaceholderMarkup = 

  `
  <section class="container">
    <div class="panel panel--cloud">
      <div class="panel-nav">
        <button class="back">
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path d="M10.293 4.293a1 1 0 0 0-1.414 0L4.293 8.586a1 1 0 0 0 0 1.414L8.879 14.707a1 1 0 0 0 1.414-1.414L6.414 9l3.879-3.879a1 1 0 0 0 0-1.414z" fill="currentColor" />
          </svg>
          Back
        </button>
        <button class="nav-menu-trigger">
          <svg width="9" height="18" viewBox="0 0 9 18">
            <path d="M4.5 3A1.5 1.5 0 1 0 4.5 6 1.5 1.5 0 0 0 4.5 3zm0 6A1.5 1.5 0 1 0 4.5 12 1.5 1.5 0 0 0 4.5 9zm0 6A1.5 1.5 0 1 0 4.5 18 1.5 1.5 0 0 0 4.5 15z" fill="currentColor" />
          </svg>
        </button>
      </div>
      <div class="main-content">
        <h2>
          Oracle Cloud Applications
        </h2>
        <p>
          A complete suite of cloud applications delivering consistent processes and data across your business
        </p>
        <button class="button button--main" id="cloud-trigger">
          Explore cloud apps
        </button>
      </div>
      <div class="menu">
        <h2>
          Oracle Cloud Applications
        </h2>
        <ul class="menu-list">
          <li>
            <button class="menu-trigger" data-selected>
              Fusions Applications Suite
            </button>
            <template class="left-content">
              <h2>
                Fusion Applications Suite
              </h2>
              <p>
                Oracle Fusion Cloud Applications is the world’s most complete cloud applications suite. Engineered to work together and with a modern user experience, Fusion Cloud Applications delivers continuous innovation via quarterly updates across every business function: finance, human resources, supply chain, manufacturing, sales, customer service, and marketing. "Oracle is already a long way ahead of the competition. Literally, Oracle is the only “leader” for Cloud ERP."
              </p>
              <p>
                <small>
                  The Oracle Fusion Cloud Is The Real Deal And That’s Bad News For SAP Patrick Moorehead, Forbes, July, 22, 2020
                </small>
              </p>
              <a class="button button--main" href="#">
                Learn more
              </a>
            </template>
            <template class="right-content">
              <h2>
                Western Digital consolidates finance apps with Oracle Cloud ERP
              </h2>
              <p>
                The hard disk manufacturer uses Oracle Cloud ERP to automate processes and gain a single, real-time view of its financial data.
              </p>
              <a class="button button--main" href="#">
                Read the story
              </a>
            </template>
          </li>
          <li>
            <button class="menu-trigger">
              NetSuite Applications
            </button>
            <template class="left-content">
              <h2>
                NetSuite Applications
              </h2>
              <p>
                NetSuite built the first unified suite of cloud applications that companies can use to run their entire business – all in one place. Organizations around the world use NetSuite to more easily grow and adapt to change. "NetSuite is a cloud-based application suite focused on finance, operations and customer relations. Its industry dimensions and global focus make it a sure bet for the future."
              </p>
              <p>
                <small>
                  Mickey North Rizza Program VP, Enterprise Applications and Digital Commerce, IDC
                </small>
              </p>
              <a class="button button--main" href="#">
                Learn more
              </a>
            </template>
            <template class="right-content">
              <h2>
                Hint keeps business flowing with NetSuite
              </h2>
              <p>
                For Hint, a maker of unsweetened, fruit-flavored waters, having cloud-based tools like NetSuite gives employees access to key data such as inventory levels to help make the business be flexible
              </p>
              <a class="button button--main" href="#">
                Read the story
              </a>
            </template>
          </li>
          <li>
            <button class="menu-trigger">
              Industry-Specific Applications
            </button>
            <template class="left-content">
              <h2>
                Industry-Specific Applications
              </h2>
              <p>
                We understand your industry is unlike any other. Only Oracle offers the deep industry domain expertise and hundreds of industry cloud solutions you need to meet your most complex operational, regulatory and customer challenges
              </p>
              <p>
                <small>
                  Robert Parker Senior Vice President, Enterprise Applications, Data Intelligence, Services, and Industry Research, IDC
                </small>
              </p>
              <a class="button button--main" href="#">
                Learn more
              </a>
            </template>
            <template class="right-content">
              <h2>
                DISH Wireless Selects Oracle for 5G Core Service-Based Architecture
              </h2>
              <p>
                5G network slicing and cloud native automation enable DISH Wireless to power a new level of innovation and services for customers
              </p>
              <a class="button button--main" href="#">
                Read the story
              </a>
            </template>
          </li>
        </ul>
      </div>
    </div>
    <div class="fold fold--cloud">
      <div class="fold-face fold-face--left">
        <div class="inner-content">
          <h2>
            Fusion Applications Suite
          </h2>
          <p>
            Oracle Fusion Cloud Applications is the world’s most complete cloud applications suite. Engineered to work together and with a modern user experience, Fusion Cloud Applications delivers continuous innovation via quarterly updates across every business function: finance, human resources, supply chain, manufacturing, sales, customer service, and marketing. "Oracle is already a long way ahead of the competition. Literally, Oracle is the only “leader” for Cloud ERP."
          </p>
          <p>
            <small>
              The Oracle Fusion Cloud Is The Real Deal And That’s Bad News For SAP Patrick Moorehead, Forbes, July, 22, 2020
            </small>
          </p>
          <a class="button button--main" href="#">
            Learn more
          </a>
        </div>
      </div>
      <div class="fold-face fold-face--right">
        <div class="inner-content">
          <h2>
            Western Digital consolidates finance apps with Oracle Cloud ERP
          </h2>
          <p>
            The hard disk manufacturer uses Oracle Cloud ERP to automate processes and gain a single, real-time view of its financial data.
          </p>
          <a class="button button--main" href="#">
            Read the story
          </a>
        </div>
      </div>
    </div>
    <div class="panel panel--infra">
      <div class="panel-nav">
        <button class="back">
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path d="M10.293 4.293a1 1 0 0 0-1.414 0L4.293 8.586a1 1 0 0 0 0 1.414L8.879 14.707a1 1 0 0 0 1.414-1.414L6.414 9l3.879-3.879a1 1 0 0 0 0-1.414z" fill="currentColor" />
          </svg>
          Back
        </button>
        <button class="nav-menu-trigger">
          <svg width="9" height="18" viewBox="0 0 9 18">
            <path d="M4.5 3A1.5 1.5 0 1 0 4.5 6 1.5 1.5 0 0 0 4.5 3zm0 6A1.5 1.5 0 1 0 4.5 12 1.5 1.5 0 0 0 4.5 9zm0 6A1.5 1.5 0 1 0 4.5 18 1.5 1.5 0 0 0 4.5 15z" fill="currentColor" />
          </svg>
        </button>
      </div>
      <div class="main-content">
        <h2>
          Oracle Cloud Infraestructure
        </h2>
        <p>
          An automated, secure platform for migrating enterprise workloads and building new cloud native apps
        </p>
        <button class="button button--main" id="infra-trigger">
          Explore OCI
        </button>
      </div>
      <div class="menu">
        <h2>
          Oracle Cloud Infrastructure
        </h2>
        <ul class="menu-list">
          <li>
            <button class="menu-trigger" data-selected>
              AI and Machine Learning
            </button>
            <template class="left-content">
              <h2>
                AI and Machine Learning
              </h2>
              <p>
                Oracle Cloud Infrastructure offers a wide range of AI and machine learning services and tools that enable data scientists, developers, and business users to get started with data science, fast.
              </p>
              <a class="button button--main" href="#">
                Learn more
              </a>
            </template>
            <template class="right-content">
              <h2>
                Easily add pretrained machine learning and data science models to your applications
              </h2>
              <p>
                Custom train AI and ML models on your organization’s own application data to help understand business context and deliver more-accurate results.
              </p>
              <a class="button button--main" href="#">
                Read the story
              </a>
            </template>
          </li>
          <li>
            <button class="menu-trigger">
              Compute
            </button>
            <template class="left-content">
              <h2>
                Compute
              </h2>
              <p>
                Oracle's Compute services include cloud virtual machines with custom core and memory shapes, bare metal performant infrastructure for enterprise application and High Performance Computing workloads, as well as cloud-native container services and on-demand serverless functions, all at globally consistent and market leading pricing.
              </p>
              <a class="button button--main" href="#">
                Learn more
              </a>
            </template>
            <template class="right-content">
              <h2>
                Denso Techno reduces vehicle noise analysis time by 5X on Oracle Cloud
              </h2>
              <p>
                Automotive parts manufacturer cuts complex fluid noise analysis and simulation times with high-performance computing on Oracle Cloud Infrastructure.
              </p>
              <a class="button button--main" href="#">
                Read the story
              </a>
            </template>
          </li>
          <li>
            <button class="menu-trigger">
              Database Services
            </button>
            <template class="left-content">
              <h2>
                Database Services
              </h2>
              <p>
                Database Service delivers an automated Oracle Database running on fully managed Oracle Cloud Infrastructure with customer-controllable automation of database lifecycle operations.
              </p>
              <a class="button button--main" href="#">
                Learn more
              </a>
            </template>
            <template class="right-content">
              <h2>
                FedEx moves accounts receivable system to Oracle Cloud
              </h2>
              <p>
                Migrating to Oracle Cloud Infrastructure helped FedEx lower costs, expand finance and revenue capabilities, and give IT teams more time for 'change-the-business' initiatives.
              </p>
              <a class="button button--main" href="#">
                Read the story
              </a>
            </template>
          </li>
          <li>
            <button class="menu-trigger">
              Networking
            </button>
            <template class="left-content">
              <h2>
                Networking
              </h2>
              <p>
                Networking enables secure connection to a customizable, isolated virtual cloud network (VCN) as the heart of your cloud deployment. Inexpensive data egress charges allow enterprises to save significantly compared to other public clouds.
              </p>
              <a class="button button--main" href="#">
                Learn more
              </a>
            </template>
            <template class="right-content">
              <h2>
                Specialized Bicycle Components shifts to Oracle Cloud
              </h2>
              <p>
                Amid a bike-buying boom, leading bicycle manufacturer moves its Oracle E-Business Suite and Agile PLM applications to Oracle Cloud Infrastructure.
              </p>
              <a class="button button--main" href="#">
                Read the story
              </a>
            </template>
          </li>
          <li>
            <button class="menu-trigger">
              Storage
            </button>
            <template class="left-content">
              <h2>
                Storage
              </h2>
              <p>
                Cloud storage includes low cost, high performance, local, object, file, block, and archive storage services. Customers can securely move data to the cloud with the storage gateway and data transfer service.
              </p>
              <a class="button button--main" href="#">
                Learn more
              </a>
            </template>
            <template class="right-content">
              <h2>
                Specialized Bicycle Components shifts to Oracle Cloud
              </h2>
              <p>
                Amid a bike-buying boom, leading bicycle manufacturer moves its Oracle E-Business Suite and Agile PLM applications to Oracle Cloud Infrastructure.
              </p>
              <a class="button button--main" href="#">
                Read the story
              </a>
            </template>
          </li>
        </ul>
      </div>
    </div>
    <div class="fold fold--infra">
      <div class="fold-face fold-face--left">
        <div class="inner-content">
          <h2>
            AI and Machine Learning
          </h2>
          <p>
            Oracle Cloud Infrastructure offers a wide range of AI and machine learning services and tools that enable data scientists, developers, and business users to get started with data science, fast.
          </p>
          <a class="button button--main" href="#">
            Learn more
          </a>
        </div>
      </div>
      <div class="fold-face fold-face--right">
        <div class="inner-content">
          <h2>
            Easily add pretrained machine learning and data science models to your applications
          </h2>
          <p>
            Custom train AI and ML models on your organization’s own application data to help understand business context and deliver more-accurate results.
          </p>
          <a class="button button--main" href="#">
            Read the story
          </a>
        </div>
      </div>
    </div>
  </section>
  `
  const placeholderElement = document.createElement('div')
  placeholderElement.innerHTML = panelPlaceholderMarkup
  block.append(placeholderElement)

  function setVW() {
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    document.documentElement.style.setProperty("--vw", `${vw}px`);
  }

  let resizeTimer;

  function removeAnimations() {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 400);
  }

  function wrapContent(content) {
    return `
      <div class="inner-content">
        ${content}
      </div>
    `;
  }

  setVW();
  window.addEventListener("resize", () => {
    setVW();
    removeAnimations();
  });

  const container = document.querySelector(".container");
  const cloudTrigger = document.querySelector("#cloud-trigger");
  const infraTrigger = document.querySelector("#infra-trigger");
  const backButtons = document.querySelectorAll(".back");
  const menuTriggers = document.querySelectorAll(".menu-trigger");
  const navMenuTriggers = document.querySelectorAll(".nav-menu-trigger");

  [cloudTrigger, infraTrigger].forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      container.classList.remove("close");
      container.classList.add("open");
      container.classList.add(
        e.target.id === "cloud-trigger" ? "cloud" : "infra"
      );
    });
  });

  backButtons.forEach((backButton) => {
    backButton.addEventListener("click", () => {
      container.classList.remove("open");
      container.classList.remove("cloud");
      container.classList.remove("infra");
      container.classList.add("close");
      container.querySelectorAll(".panel").forEach((panel) => {
        panel.classList.remove("panel--menu-active");
      });
    });
  });

  menuTriggers.forEach((menuTrigger) => {
    menuTrigger.addEventListener("click", (e) => {
      const fold = e.target.closest(".panel").nextElementSibling;
      const foldFaceLeft = fold.querySelector(".fold-face--left");
      const foldFaceRight = fold.querySelector(".fold-face--right");
      const li = e.target.closest("li");
      const leftContent = li.querySelector(".left-content").innerHTML;
      const rightContent = li.querySelector(".right-content").innerHTML;

      menuTriggers.forEach((trigger) =>
        trigger.removeAttribute("data-selected")
      );
      e.currentTarget.setAttribute("data-selected", "");

      foldFaceLeft.innerHTML = wrapContent(leftContent);
      foldFaceRight.innerHTML = wrapContent(rightContent);
    });
  });

  navMenuTriggers.forEach((navMenuTrigger) => {
    navMenuTrigger.addEventListener("click", () => {
      const panel = navMenuTrigger.closest(".panel");
      panel.classList.toggle("panel--menu-active");
    });
  });
}