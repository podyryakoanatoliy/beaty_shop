export const projectData = [
  {
    codeItemOne: '#Halloween2024',
    codeItemTwo: '#TrickOrTreat',
    codeItemThree: '#Wedding',
    codeItemFour: '#Ordinary',
    text: 'Твоя краса — це твоя сила, а я лише допомагаю її розкрити. Кожен штрих пензля — це крок до твого бездоганного вигляду, який сяятиме у кожному моменті.',
    btnHref: '#footer',
    btnText: 'Замовити макіяж',
  },
];

export function onGetHtmlMarckup() {
  return projectData
    .map(
      ({
        codeItemOne,
        codeItemTwo,
        codeItemThree,
        codeItemFour,
        text,
        btnHref,
        btnText,
      }) => {
        return `<div class="top-part">
            <ul class="code-list">
              <li class="code-item">
                <p class="code-text">${codeItemOne}</p>
              </li>
              <li class="code-item">
                <p class="code-text">${codeItemTwo}</p>
              </li>
              <li class="code-item">
                <p class="code-text">${codeItemThree}</p>
              </li>
              <li class="code-item">
                <p class="code-text">${codeItemFour}</p>
              </li>
            </ul>
            <p class="main-text">
              ${text}
            </p>
            <a href="${btnHref}" class="main-button-a" id="projectBtn">${btnText}</a>
          </div>`;
      }
    )
    .join('');
}

document.addEventListener('DOMContentLoaded', () => {
  const projectBtn = document.getElementById('projectBtn');
  if (projectBtn) {
    projectBtn.addEventListener('click', e => {
      e.preventDefault();
      const targetElement = document.querySelector(
        projectBtn.getAttribute('href')
      );
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }
    });
  }
});
