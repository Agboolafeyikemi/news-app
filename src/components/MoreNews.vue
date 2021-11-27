<template>
  <div>
    <h2 class="ml-20 -mb-10 font-semibold text-xl">News By Source</h2>
    <section class="wrapper text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto max-w-7x1">
        <div class="flex flex-wrap w-full mb-4 py-2 border-0">
          <div>
            <el-select
              v-model="source_news"
              @change="getCategories"
              placeholder="Select News Source"
            >
              <el-option
                v-for="item in sources"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="flex flex-wrap -m-4" v-loading="loading">
          <div
            class="xl:w-1/3 md:w-1/2 p-4"
            v-for="news in newsCategories"
            :key="news.title"
          >
            <div class="bg-white p-6 rounded-lg">
              <img
                class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-full rounded w-full object-cover object-center mb-6"
                :src="
                  news.urlToImage
                    ? news.urlToImage
                    : 'https://i.imgur.com/lmYYa2s.png'
                "
                :alt="news.title"
              />
              <a :href="news.url" target="_blank">
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  {{ news.title | truncate(50, "...") }}
                </h2>
              </a>
              <div class="flex space-x-2 mt-2 justify-between">
                <div class="flex justify-between space-x-2 mt-2 w-full">
                  <div class="flex justify-between">
                    <span>
                      <svg
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

                    <h3 class="text-lg text-gray-600 font-semibold mb-2 ml-2">
                      {{ location }}
                    </h3>
                  </div>
                  <i
                    class="cursor-pointer text-green-400 text-2xl block ml-3 el-icon-circle-plus text-white"
                    @click="addToReadList(news)"
                  ></i>
                </div>
              </div>
              <p class="leading-relaxed text-base">
                {{ news.description | truncate(50, "...") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import api from "../api";
import localStorageHelper from "../helpers/local";
export default {
  name: "morenews",
  data() {
    return {
      newsCategories: "",
      loading: false,
      source_news: "",
      sources: [],
      location: "",
    };
  },
  methods: {
    async getCategories(source) {
      let params = source ? source : this.source_news;
      this.loading = true;
      const data = await api.filterNewsBySource(params);
      if (data) {
        this.newsCategories = data.data.articles.slice(0, 5);
        this.loading = false;
      } else {
        this.loading = false;
      }
    },
    addToReadList(news) {
      localStorageHelper.storeNews(news);
      this.$notify({
        title: "Success",
        message: "Added to your read list",
        type: "success",
        position: "bottom-left",
      });
    },
  },
  async mounted() {
    this.getCategories("techcrunch");
    const response = await api.getAllSources();
    this.sources = response.data.sources;
    this.location = localStorage.getItem("country");
  },
};
</script>

<style scoped>
.wrapper {
  width: 100vw;
  display: flex;
  justify-content: center;
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
  flex-direction: column;
  max-width: 1280px;
  background: #a6b5c0;
  margin-top: 5rem;
}
</style>
