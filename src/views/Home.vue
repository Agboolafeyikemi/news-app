<template>
  <div class="home" v-loading="loading" v-if="location">
    <CategoriesNew></CategoriesNew>
    <!-- <MoreNews></MoreNews> -->
  </div>
</template>

<script>
import api from "../api";
import CategoriesNew from "../components/Categories.vue";
// import MoreNews from "../components/MoreNews.vue";
export default {
  name: "Home",
  components: {
    CategoriesNew,
    // MoreNews,
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
        this.headlines = data.data.articles.slice(0, 7);
        this.loading = false;
      } else {
        console.log("error");
        this.loading = false;
      }
    },
  },
  mounted() {
    this.getLocation();
  },
};
</script>

<style scoped>
.el-carousel__container {
  /* height: 616px; */
}

.overlay {
  background: rgba(0, 0, 0, 0.6);
}

.title_text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
