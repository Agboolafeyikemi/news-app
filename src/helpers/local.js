function storeNews(news) {
  const o = this.getNews("READLIST");
  const p = o.find((checkorder) => checkorder.title === news.title);
  if (p === undefined) {
    o.push(news);
  }
  localStorage.setItem("READLIST", JSON.stringify(o));
}

function storeSearchResults(news) {
  const o = this.getNews("SEARCHLIST");
  const p = o.find((checkorder) => checkorder.title === news.title);
  if (p === undefined) {
    o.push(news);
  }
  localStorage.setItem("SEARCHLIST", JSON.stringify(o));
}

function storeInputValue(value) {
  localStorage.setItem("INPUTVALUE", JSON.stringify(value));
}
function deleteNews(news) {
  const o = this.getNews("READLIST");
  const q = o.filter((checkorder) => checkorder.title !== news.title);
  if (q) {
    localStorage.setItem("READLIST", JSON.stringify(q));
  }
}
function getSearchResults(items) {
  const checkOrderLocal = localStorage.getItem(items);
  if (checkOrderLocal !== null) {
    return JSON.parse(checkOrderLocal);
  } else {
    return [];
  }
}

function getNews(items) {
  const checkOrderLocal = localStorage.getItem(items);
  if (checkOrderLocal !== null) {
    return JSON.parse(checkOrderLocal);
  } else {
    return [];
  }
}

export default {
  getNews,
  storeNews,
  deleteNews,
  storeSearchResults,
  getSearchResults,
  storeInputValue,
};
