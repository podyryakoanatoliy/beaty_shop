const tableData = document.querySelector('.swiper-wrapper-js');
const maxWords = 190;

// Завантаження даних з локального JSON-файлу
async function newData() {
  try {
    const response = await fetch('./js/reviews.json'); // Локальний файл
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
}

// Генерація HTML для відгуків
async function onMarckupHtmlReview() {
  const mainData = await newData();

  if (!mainData || !mainData.reviews) return;

  // Створюємо масив HTML-контенту для кожного відгуку
  const reviewsHTML = mainData.reviews
    .map(item => {
      const truncatedReview =
        item.review.length > maxWords
          ? `${item.review.substring(0, maxWords)}...`
          : item.review;

      return `
      <li class="swiper-slide review-card">
        <img src="${item.avatar_url}" class="review-img" alt="${item.author}" />
        <p class="review-name">${item.author}</p>
        <p class="review-text">${truncatedReview}</p>
      </li>
    `;
    })
    .join(''); // З'єднуємо всі елементи в один рядок

  // Вставляємо HTML в контейнер
  tableData.insertAdjacentHTML('beforeend', reviewsHTML);
}
