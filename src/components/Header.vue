<template>
  <div class="w-full">
    <div class="flex justify-between items-center md:mx-20">
      <div>
        <a href="/" class="flex items-center">
          <img
            src="../assets/logo.jpeg"
            alt="news-logo"
            height="56"
            width="56"
          />
          <!-- <Logo /> -->
          <div class="ml-2">
            <span class="text-green-600 leading-none">NEWS</span>
          </div>
        </a>
      </div>
      <div class="flex w-3/6">
        <el-input
          class="md:w-3/6 search_input"
          placeholder="Search News By Category"
          v-model="input"
        ></el-input>
        <el-button
          v-loading="loading"
          class="bg-green-100 -ml-40 md:w-1/6 z-50"
          @click="searchEntry"
          type="primary"
          >Search</el-button
        >
      </div>

      <a class="anchor bg-green-800 text-white-400" href="/read-list">
        <span class="text-white">Saved News</span
        ><span class="number">{{ readList.length }}</span></a
      >
    </div>
  </div>
</template>

<script>
import api from "../api";
import localStorageHelper from "../helpers/local";
export default {
  components: {},
  data() {
    return {
      readList: [],
      loading: false,
      input: "",
    };
  },
  methods: {
    async getReadList() {
      this.loading = true;
      const response = localStorage.getItem("READLIST");
      this.readList = JSON.parse(response);
      this.loading = false;
    },
    async searchEntry() {
      this.loading = true;
      if (this.input) {
        const response = await api.searchAllCategories(this.input);
        this.loading = false;
        this.searchResults = response.data.articles.slice(0, 5);
        localStorageHelper.storeSearchResults(this.searchResults);
        localStorageHelper.storeInputValue(this.input);
        this.loading = false;
        this.$router.push("/search-list");
      } else {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.getReadList();
  },
};
</script>

<style scoped>
/* since nested groupes are not supported we have to use
     regular css for the nested dropdowns
  */
li > ul {
  transform: translatex(100%) scale(0);
}
li:hover > ul {
  transform: translatex(101%) scale(1);
}
li > button svg {
  transform: rotate(-90deg);
}
li:hover > button svg {
  transform: rotate(-270deg);
}

.group:hover .group-hover\:scale-100 {
  transform: scale(1);
}
.group:hover .group-hover\:-rotate-180 {
  transform: rotate(180deg);
}
.scale-0 {
  transform: scale(0);
}
.min-w-32 {
  min-width: 8rem;
}
.anchor {
  align-items: center;
  padding: 12px 20px;
  border-radius: 5px;
}
.number {
  background-color: #fff;
  border-radius: 0.125rem;
  color: #000;
  font-size: 0.8125rem;
  font-weight: 600;
  margin-left: 0.5rem;
  padding: 0.1875rem 0.375rem;
}
.el-button {
  margin-left: -43px;
  background-color: #064e3b;
  border: none;
  color: #fff;
}
</style>
