const tableData = document.querySelector('.swiper-wrapper-js');
const maxWords = 190;

// Завантаження даних з локального JSON-файлу
export async function newData() {
  const response = await fetch('./js/reviews.json'); // локальний файл
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function onMarckupHtmlReview() {
  let mainData = [];
  try {
    const data = await newData();
    mainData = data.reviews; // Доступ до масиву відгуків у JSON
  } catch (err) {
    console.error(err);
  }

  mainData.forEach(item => {
    const itemHTML = `
        <li class="swiper-slide review-card">
          <img src="${item.avatar_url}" class="review-img" alt="${
      item.author
    }" />
          <p class="review-name">${item.author}</p>
          <p class="review-text">${
            item.review.length > maxWords
              ? item.review.substring(0, maxWords) + '...'
              : item.review
          }</p>
        </li>`;
    tableData.insertAdjacentHTML('beforeend', itemHTML);
  });
}
