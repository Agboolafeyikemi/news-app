<template>
  <section class="wrapper text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto max-w-7x1">
      <div class="flex flex-wrap w-full mb-4 p-4">
        <div class="w-full mb-6 lg:mb-0">
          <h1
            class="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900"
          >
            News
          </h1>
          <div class="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
      </div>
      <div class="flex flex-wrap -m-4">
        <div
          class="xl:w-1/3 md:w-1/2 p-4"
          v-for="news in newsCategories"
          :key="news.title"
        >
          <div class="bg-white p-6 rounded-lg">
            <img
              class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
              src="https://kuyou.id/content/images/ctc_2020021605150668915.jpg"
              alt="Image Size 720x400"
            />
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
              Chichen Itza
            </h2>
            <div class="flex space-x-2 mt-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
              <h3 class="text-lg text-gray-600 font-semibold mb-2">New York</h3>
            </div>
            <p class="leading-relaxed text-base">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import api from "../api";
import localStorageHelper from "../helpers/local";
export default {
  name: "categories",
  data() {
    return {
      newsCategories: "",
      loading: false,
    };
  },
  methods: {
    async getCategories(category) {
      this.loading = true;
      let iso = localStorage.getItem("country_ISO");
      const data = await api.getTopNewsHeadingCategories(iso, category);
      if (data) {
        console.log(`data\n\n\n\n\n\n\n\n\n`, data);
        this.newsCategories = data.data.articles.slice(0, 5);
        this.loading = false;
      }
    },
    addToReadList(news) {
      localStorageHelper.storeNews(news);
      this.$notify({
        title: "Success",
        message: "Added to your read list",
        type: "success",
      });
    },
  },
  mounted() {
    this.getCategories("business");
  },
};
</script>

<style scoped>
.p {
  color: red;
}
.wrapper {
  width: 100vw;
  display: -moz-box;
  display: flex;
  -moz-box-pack: center;
  justify-content: center;
  -moz-box-align: center;
  align-items: center;
  min-height: 43rem;
  padding: 0 0 5%;
}
.wrapper > div {
  justify-content: space-between;
  width: 90%;
  position: relative;
  z-index: 1;
  background: #f8fcff;
  border-radius: 20px;
  padding: 2% 5%;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  flex-direction: column;
  max-width: 1280px;
  background: #e8f6ff;
  margin-top: 5rem;
}
</style>
