<template>
  <div>
    <h2 class="ml-20 mt-20 -mb-10 font-semibold text-xl">Top Stories</h2>
    <section class="wrapper text-gray-600 body-font">
      <div class="container bg-green-100 px-5 py-24 mx-auto max-w-7x1">
        <div class="flex flex-wrap w-full mb-4 py-2 border-0">
          <div>
            <el-select
              v-model="category"
              @change="getCategories"
              placeholder="Select By Category"
            >
              <el-option
                v-for="item of categories"
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
                      Nigeria
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
  name: "categories",
  data() {
    return {
      categories: [
        {
          name: "Business",
          id: "Business",
        },
        {
          name: "Entertainment",
          id: "Entertainment",
        },
        {
          name: "General",
          id: "General",
        },
        {
          name: "Health",
          id: "Health",
        },
        {
          name: "Science",
          id: "Science",
        },
        {
          name: "Sports",
          id: "Sports",
        },
      ],
      newsCategories: "",
      loading: false,
      category: "",
    };
  },
  methods: {
    async getCategories(category) {
      this.loading = true;
      let iso = localStorage.getItem("country_ISO");
      const data = await api.getTopNewsHeadingCategories(iso, category);
      if (data) {
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
        position: "bottom-left",
      });
    },
  },
  mounted() {
    this.getCategories("business");
  },
};
</script>

<style scoped>
.wrapper {
  width: 100vw;
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
  /* background: #f8fcff; */
  border-radius: 20px;
  padding: 2% 5%;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  flex-direction: column;
  max-width: 1280px;
  /* background: #e8f6ff; */
  margin-top: 5rem;
}
</style>
