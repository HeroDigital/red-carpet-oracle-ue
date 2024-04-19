const chevronDownIcon = `
  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill-rule='evenodd' viewBox='0 0 16 16'><g fill='#ffffff'><path d='M13.0001768 4.25 8.00035354 9.60660168 2.99982323 4.25 2 5.32132034 7.00053032 10.6786797 8.00035354 11.75 9.00017677 10.6786797 14 5.32132034'/></g></svg>
`;

export default async function decorate(block) {
  const footerMarkup = `
    <div class="footer__wrapper">
      <nav class="footer__main-nav">
        <ul class="footer__cols">
          <li>
            <details name="footer-item">
              <summary>Resources for ${chevronDownIcon}</summary>
              <ul>
                <li><a href="#">Carrers</a></li>
                <li><a href="#">Developers</a></li>
                <li><a href="#">Investors</a></li>
                <li><a href="#">Partners</a></li>
                <li><a href="#">Researches</a></li>
                <li><a href="#">Students and Educators</a></li>
              </ul>
            </details>
          </li>
          <li>
            <details name="footer-item">
              <summary>Why Oracle ${chevronDownIcon}</summary>
              <ul>
                <li><a href="#">Analyst Reports</a></li>
                <li><a href="#">Best cloud-based ERP</a></li>
                <li><a href="#">Cloud Economics</a></li>
                <li><a href="#">Corporate Responsibility</a></li>
                <li><a href="#">Diversity and Inclusion</a></li>
                <li><a href="#">Security Practices</a></li>
              </ul>
            </details>
          </li>
          <li>
            <details name="footer-item">
              <summary>Learn ${chevronDownIcon}</summary>
              <ul>
                <li><a href="#">What is cloud computing?</a></li>
                <li><a href="#">What is CRM?</a></li>
                <li><a href="#">What is Docker?</a></li>
                <li><a href="#">What is Kubernetes?</a></li>
                <li><a href="#">What is Python?</a></li>
                <li><a href="#">What is SaaS?</a></li>
              </ul>
            </details>
          </li>
          <li>
            <details name="footer-item">
              <summary>News and events ${chevronDownIcon}</summary>
              <ul>
                <li><a href="#">News</a></li>
                <li><a href="#">Oracle CloudWorld</a></li>
                <li><a href="#">Oracle CloudWorld Tour</a></li>
                <li><a href="#">Oracle Health Summit</a></li>
                <li><a href="#">Oracle DevLive</a></li>
                <li><a href="#">Search all events</a></li>
              </ul>
            </details>
          </li>
          <li>
            <details name="footer-item">
              <summary>Contact Us ${chevronDownIcon}</summary>
              <ul>
                <li><a href="#">Sales 1-800-ORACLE (672253)</a></li>
                <li><a href="#">How can we help?</a></li>
                <li><a href="#">Subscribe to emails</a></li>
                <li><a href="#">Integrity Helpline</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </nav>
      <div class="footer__bottom">
        <nav class="footer__links-nav">
          <ul>
            <li><a href="#">© 2024 Oracle</a></li>
            <li><a href="#">Privacy / Do Not Sell My Info</a></li>
            <li><a href="#">Ad Choices</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </nav>
        <nav class="footer__social-nav">
          <ul>
            <li>
              <a href="#" aria-label="Facebook">
                <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill-rule='evenodd' viewBox='0 0 25 30'><g fill='#ffffff'><path d='M23,12.073725 C23,5.96030998 18.0830126,1 12.0102986,1 L12,1 C5.92728597,1 1,5.96030998 1,12.073725 C1,17.6007959 5.03016748,22.1694418 10.2892957,23 L10.2892957,15.2726987 L7.47779049,15.2726987 L7.47779049,12.073725 L10.2892957,12.073725 L10.2915843,9.63388837 C10.2915843,6.85883339 11.923333,5.31982407 14.4361802,5.31982407 C15.6388224,5.31982407 16.8895246,5.55251859 16.8895246,5.55251859 L16.8895246,8.25960834 L15.5118069,8.25960834 C14.1455321,8.25960834 13.7084157,9.12126924 13.7084157,9.99675359 L13.7118485,12.073725 L16.7670862,12.073725 L16.2784771,15.2726987 L13.7118485,15.2726987 L13.7118485,23 C18.9709768,22.1694418 23,17.6007959 23,12.073725'/></g></svg>
              </a>
            </li>
            <li>
              <a href="#" aria-label="X">
                <svg xmlns='http://www.w3.org/2000/svg' height='30' width='30' fill-rule='evenodd' viewBox='0 0 25 30'><path fill='#ffffff' d='M1.051 2L9.16 13.031 1 22h1.836l7.144-7.852L15.75 22H22l-8.564-11.652L21.03 2h-1.836l-6.579 7.232L7.3 2H1.051zm2.7 1.376h2.871L19.3 20.624h-2.87L3.751 3.376z'></path></svg>
              </a>
            </li>
            <li>
              <a href="#" aria-label="LinkedIn">
                <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill-rule='evenodd' viewBox='0 0 25 30'><g fill='#ffffff'><path d='M19.750875,13.2518611 C19.750875,10.0424583 17.7563611,8.94765278 15.9108056,8.94765278 C14.2042778,8.94765278 13.0871667,10.0519306 12.7670972,10.6987917 L12.7250833,10.6987917 L12.7250833,9.243125 L9.54409722,9.243125 L9.54409722,19.7502639 L12.8515833,19.7502639 L12.8515833,14.0536389 C12.8515833,12.5347222 13.8139306,11.7960417 14.7950694,11.7960417 C15.7236528,11.7960417 16.4435417,12.3182361 16.4435417,14.0114722 L16.4435417,19.7502639 L19.750875,19.7502639 L19.750875,13.2518611 Z M7.810375,5.88063889 C7.810375,4.78384722 6.95665278,3.98130556 5.90355556,3.98130556 C4.85045833,3.98130556 3.99658333,4.78384722 3.99658333,5.88063889 C3.99658333,6.97758333 4.85045833,7.77920833 5.90355556,7.77920833 C6.95665278,7.77920833 7.810375,6.97758333 7.810375,5.88063889 L7.810375,5.88063889 Z M4.24988889,19.7421667 L7.55722222,19.7421667 L7.55722222,9.23502778 L4.24988889,9.23502778 L4.24988889,19.7421667 Z M23.0006111,2.62402778 L23.0006111,21.3759722 C23.0006111,22.2729306 22.2735417,23.0001528 21.3767361,23.0001528 L2.62402778,23.0001528 C1.72706944,23.0001528 1,22.2729306 1,21.3759722 L1,2.62402778 C1,1.72706944 1.72706944,1 2.62402778,1 L21.3767361,1 C22.2735417,1 23.0006111,1.72706944 23.0006111,2.62402778 L23.0006111,2.62402778 Z'/></g></svg>
              </a>
            </li>
            <li>
              <a href="#" aria-label="YouTube">
                <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill-rule='evenodd' viewBox='0 0 25 30'><g fill='#ffffff'><path d='M22.54025,6.49845161 C23,8.28090323 23,12 23,12 C23,12 23,15.7189677 22.54025,17.5016774 C22.28725,18.4850323 21.541875,19.2594839 20.595125,19.5224516 C18.879625,20 12,20 12,20 C12,20 5.120375,20 3.40475,19.5224516 C2.458125,19.2594839 1.712625,18.4850323 1.459625,17.5016774 C1,15.7189677 1,12 1,12 C1,12 1,8.28090323 1.459625,6.49845161 C1.712625,5.51496774 2.458125,4.74051613 3.40475,4.47767742 C5.120375,4 12,4 12,4 C12,4 18.879625,4 20.595125,4.47767742 C21.541875,4.74051613 22.28725,5.51496774 22.54025,6.49845161 Z M9.9999625,16.000025 L15.9999625,12.0001779 L9.9999625,8.000025 L9.9999625,16.000025 Z'/></g></svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  `;

  block.innerHTML = footerMarkup;

  const details = block.querySelectorAll("[name='footer-item']");
  const mediaQuery = "(width > 900px)";
  const mq = window.matchMedia(mediaQuery);

  function handleOpenAttr(detail, matches) {
    if (matches) {
      detail.removeAttribute("name");
      detail.open = true;
    } else {
      detail.setAttribute("name", "footer-item");
      detail.open = false;
    }
  }

  details.forEach((detail) => {
    handleOpenAttr(detail, mq.matches);
  });

  mq.addEventListener("change", (event) => {
    details.forEach((detail) => {
      handleOpenAttr(detail, event.matches);
    });
  });
}
