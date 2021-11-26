function storeNews(news) {
  const o = this.getNew("READLIST");
  const p = o.find((checkorder) => checkorder.title === news.title);
  if (p === undefined) {
    o.push(news);
  }
  localStorage.setItem("READLIST", JSON.stringify(o));
}

function deleteNews(news) {
  const o = this.getNews("READLIST");
  const q = o.filter((checkorder) => checkorder.title !== news.title);
  if (q) {
    localStorage.setItem("READLIST", JSON.stringify(q));
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
};
