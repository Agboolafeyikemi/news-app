<template>
  <div class="home" v-if="location && headlines">
    <section
      class="con pb-32 w-full flex justify-center align-center mh-43 pt-0 pr-0 pb-5"
    >
      <div
        class="title text-white text-center text-white p-8 text-3xl md:text-5xl"
      >
        Trending News in <br />
        {{ location.country.name }}
      </div>

      <div class="flex justify-center flex-wrap">
        <div class="flex flex-col justify-between mx-8 md:mx-0 md:w-1/4">
          <div
            class="container mx-auto p-5 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
          >
            <img
              class="rounded-xl"
              :src="
                headlines[0].urlToImage
                  ? headlines[0].urlToImage
                  : 'https://dailypost.ng/wp-content/uploads/2021/11/Omicron-1.jpg'
              "
              :alt="headlines[0].name && headlines[0].name"
            />

            <div>
              <h1 class="mt-5 text-2xl font-semibold">
                {{ headlines[0].title | truncate(50, "...") }}
              </h1>
            </div>
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
                  {{ location.country.name }}
                </h3>
              </div>
              <i
                class="cursor-pointer text-green-400 text-2xl block ml-3 el-icon-circle-plus text-white"
                @click="addToReadList(news)"
              ></i>
            </div>
          </div>
          <div
            class="container mx-auto p-5 bg-white max-w-sm mt-3 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 mt-3"
          >
            <img
              class="rounded-xl"
              :src="
                headlines[2].urlToImage
                  ? headlines[2].urlToImage
                  : 'https://dailypost.ng/wp-content/uploads/2021/11/Omicron-1.jpg'
              "
              :alt="headlines[2].name"
            />
            <div>
              <h1 class="mt-5 text-2xl font-semibold">
                {{ headlines[2].title | truncate(50, "...") }}
              </h1>
            </div>
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
                  {{ location.country.name }}
                </h3>
              </div>
              <i
                class="cursor-pointer text-green-400 text-2xl block ml-3 el-icon-circle-plus text-white"
                @click="addToReadList(news)"
              ></i>
            </div>
          </div>
        </div>

        <div class="px-4 max-w-xl">
          <div class="bg-white shadow-2xl rounded-lg mb-6 tracking-wide">
            <div class="md:flex-shrink-0">
              <img
                class="rounded-xl"
                :src="
                  headlines[1].urlToImage
                    ? headlines[1].urlToImage
                    : 'https://dailypost.ng/wp-content/uploads/2021/11/Omicron-1.jpg'
                "
                :alt="headlines[1].name"
              />
            </div>
            <div class="px-4 py-2 mt-2">
              <h2 class="font-bold text-2xl text-gray-800 tracking-normal">
                {{ headlines[1].title | truncate(50, "...") }}
              </h2>
              <p class="text-sm text-gray-700 px-2 mr-1">
                {{ headlines[1].description | truncate(500, "...") }}
              </p>
              <div class="flex items-center justify-between mt-2 mx-6">
                <a
                  :href="headlines[1].url"
                  target="_blank"
                  class="hover:cursor-pointer text-blue-500 text-xs -ml-3"
                  >Show More</a
                >
                <i
                  class="cursor-pointer text-green-400 text-2xl block ml-3 el-icon-circle-plus text-white"
                  @click="addToReadList(news)"
                ></i>
              </div>
              <div class="author flex items-center -ml-3 my-3">
                <div class="flex space-x-2 mt-2 justify-between">
                  <div class="flex justify-between space-x-2 mt-2 w-full">
                    <div class="ml-5 flex justify-between">
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
                        {{ location.country.name }}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-between mx-8 md:mx-0 md:w-1/4">
          <div
            class="container mx-auto p-5 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
          >
            <img
              class="rounded-xl"
              :src="headlines[3].urlToImage && headlines[3].urlToImage"
              :alt="headlines[3].name"
            />

            <div>
              <h1 class="mt-5 text-2xl font-semibold">
                {{ headlines[3].title | truncate(50, "...") }}
              </h1>
            </div>
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
                  {{ location.country.name }}
                </h3>
              </div>
              <i
                class="cursor-pointer text-green-400 text-2xl block ml-3 el-icon-circle-plus text-white"
                @click="addToReadList(news)"
              ></i>
            </div>
          </div>
          <div
            class="container mx-auto p-5 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
          >
            <img
              class="rounded-xl"
              :src="headlines[4].urlToImage"
              :alt="headlines[4].name"
            />

            <div>
              <h1 class="mt-5 text-2xl font-semibold">
                {{ headlines[4].title | truncate(50, "...") }}
              </h1>
            </div>
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
                  {{ location.country.name }}
                </h3>
              </div>
              <i
                class="cursor-pointer text-green-400 text-2xl block ml-3 el-icon-circle-plus text-white"
                @click="addToReadList(news)"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </section>
    <CategoriesNews></CategoriesNews>
    <MoreNews></MoreNews>
  </div>
</template>

<script>
import localStorageHelper from "../helpers/local";
import api from "../api";
import CategoriesNews from "../components/Categories.vue";
import MoreNews from "../components/MoreNews.vue";

export default {
  name: "Home",
  components: {
    CategoriesNews,
    MoreNews,
  },
  data() {
    return {
      location: "",
      loading: false,
      headlines: "",
    };
  },
  methods: {
    async getLocation() {
      this.loading = true;
      const response = await api.getUserLocation();
      if (response) {
        this.location = response.data;
        localStorage.setItem("country_ISO", response.data.country.iso_code);
        const data = await api.getTopNewsHeading(
          response.data.country.iso_code
        );
        this.headlines = data.data.articles.slice(0, 5);
        console.log(`headlines`, this.headlines);
        this.loading = false;
      } else {
        console.log("error");
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
    this.getLocation();
    console.log(`headlines\n\n\n\n\n\n\n`, this.headlines);
  },
};
</script>

<style scoped>
.con {
  background: #a6b5c0;
}
</style>
