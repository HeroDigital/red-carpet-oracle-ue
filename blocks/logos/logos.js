/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const rows = [...block.children];
  const firstRowColumns = [...rows[0].children];
  const secondRowColumns = [...rows[1].children];

  // Initially hide all elements in the second row
  secondRowColumns.forEach((column) => {
    column.classList.remove('show');

    // get the url of the picture img
    const picture = column.querySelector('picture');
    if (picture) {
      const img = picture.querySelector('img');
      if (img) {
        let url = img.getAttribute('src');
        // set the background image of the column
        url = url.replace('width=750', 'width=1920');
        column.style.backgroundImage = `url(${url})`;
      }
    }

    const content = column.querySelectorAll('p:not(:first-child)');
    if (content.length > 0) {
      const div = document.createElement('div');
      div.classList.add('logos-banner-content');

      // create a new div with the class 'logos-banner-container'
      const container = document.createElement('div');
      container.classList.add('logos-banner-container');

      // append 'container' to 'div'
      div.appendChild(container);

      content.forEach((node) => {
        container.append(node);
      });

      column.append(div);
    }
    // delete the first p tag
    column.querySelector('p:first-child').remove();
  });

  // Show the first column of the first row
  if (firstRowColumns[0]) {
    firstRowColumns[0].classList.add('active');
  }

  // Show the first column of the second row
  if (secondRowColumns[0]) {
    secondRowColumns[0].classList.add('show');
  }

  firstRowColumns.forEach((column, index) => {
    column.addEventListener('click', () => {
      secondRowColumns.forEach((element) => element.classList.remove('show'));
      firstRowColumns.forEach((element) => element.classList.remove('active'));
      // Show the corresponding element in the second row
      if (secondRowColumns[index]) {
        secondRowColumns[index].classList.add('show');
        column.classList.add('active');
      }
    });
  });

  [...block.children].forEach((row) => {
    row.classList.add('logos-row');
    [...row.children].forEach((column) => {
      column.classList.add('logos-column');
    });
  });
}
