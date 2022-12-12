async function fetchNews(category) {
  const response = await fetch("http://localhost:3001/news");
  const data = await response.json();

  const filteredNews = data.filter((news) => {
    return news.labels.includes(
      category.trim() || category.slice(0, 1).toUpperCase() + category.slice(1)
    );
  });
  return filteredNews;
}
export default fetchNews;
