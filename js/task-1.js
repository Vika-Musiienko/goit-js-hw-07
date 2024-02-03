const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('li.item');
console.log(`Кількість категорій: ${categoryItems.length}`);
categoryItems.forEach((item) => {
  const categoryName = item.querySelector('h2').textContent;
  const categoryElementsCount = item.querySelectorAll('li').length;
  console.log(`Категорія "${categoryName}" містить ${categoryElementsCount} елементів.`);
});