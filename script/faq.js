/* FAQ QUESTIONS AND ANSWERS */
const selectElement = (selector, element = document, all = null) => {
  if (all) {
    return element.querySelectorAll(selector);
  }
  return element.querySelector(selector);
};

const faqData = [
  {
    id: 1,
    question:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quisquam.',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ad earum adipisci magni suscipit! Id, iure adipisci fugit quam vitae sed porro quaerat? Cupiditate at totam aut veniam eos animi.',
  },
  {
    id: 2,
    question:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quisquam.',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ad earum adipisci magni suscipit! Id, iure adipisci fugit quam vitae sed porro quaerat? Cupiditate at totam aut veniam eos animi.',
  },
  {
    id: 3,
    question:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quisquam.',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ad earum adipisci magni suscipit! Id, iure adipisci fugit quam vitae sed porro quaerat? Cupiditate at totam aut veniam eos animi.',
  },
  {
    id: 4,
    question:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quisquam.',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ad earum adipisci magni suscipit! Id, iure adipisci fugit quam vitae sed porro quaerat? Cupiditate at totam aut veniam eos animi.',
  },
  {
    id: 5,
    question:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quisquam.',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ad earum adipisci magni suscipit! Id, iure adipisci fugit quam vitae sed porro quaerat? Cupiditate at totam aut veniam eos animi.',
  },
  {
    id: 6,
    question:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quisquam.',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ad earum adipisci magni suscipit! Id, iure adipisci fugit quam vitae sed porro quaerat? Cupiditate at totam aut veniam eos animi.',
  },
  {
    id: 7,
    question:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quisquam.',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ad earum adipisci magni suscipit! Id, iure adipisci fugit quam vitae sed porro quaerat? Cupiditate at totam aut veniam eos animi.',
  },
  {
    id: 8,
    question:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quisquam.',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ad earum adipisci magni suscipit! Id, iure adipisci fugit quam vitae sed porro quaerat? Cupiditate at totam aut veniam eos animi.',
  },
  {
    id: 9,
    question:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quisquam.',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ad earum adipisci magni suscipit! Id, iure adipisci fugit quam vitae sed porro quaerat? Cupiditate at totam aut veniam eos animi.',
  },
  {
    id: 10,
    question:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quisquam.',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ad earum adipisci magni suscipit! Id, iure adipisci fugit quam vitae sed porro quaerat? Cupiditate at totam aut veniam eos animi.',
  },
  {
    id: 11,
    question:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quisquam.',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ad earum adipisci magni suscipit! Id, iure adipisci fugit quam vitae sed porro quaerat? Cupiditate at totam aut veniam eos animi.',
  },
];

window.addEventListener('DOMContentLoaded', () => {
  let faqArticles = faqData.map((faqItem, index) => {
    return `
    <article class="_accordion text-muted">
      
    <div class="_accordion-question">${faqItem.question}
    <span class="show">+</span>
    <span class="hide">-</span>
    </div>
      <div class="_accordion-body">
        <p class="_accordion-text">${faqItem.answer}</p>
      </div>
    </article>
    `;
  });
  selectElement('.faq-container').innerHTML = faqArticles.join();

  const accordions = selectElement('._accordion', document, true);
  accordions.forEach((accordion) => {
    const accordionQuestion = selectElement('._accordion-question', accordion);
    accordionQuestion.addEventListener('click', () => {
      accordion.classList.toggle('active');
    });
  });
});
