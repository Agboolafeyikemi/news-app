<template>
  <div class="w-full">
    <div class="flex justify-between items-center md:mx-20">
      <div>
        <a href="/" class="flex items-center">
          <img
            src="../assets/logo.svg"
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
      <nav class="hidden md:block">
        <ul class="flex items-center justify-between">
          <li class="ml-10">
            <a href="/" class="text-base font-bold">Home</a>
          </li>
          <li class="ml-10">
            <a href="/read-news" class="text-base font-bold">Read News</a>
          </li>
        </ul>
      </nav>

      <a
        href="/search"
        class="hidden md:block flex items-center text-base font-bold hover:text-green-400"
      >
        <span class="hover:text-green-400">Search</span>
        <i class="ml-3 text-base font-bold el-icon-search"></i>
      </a>

      <!-- Navigation Menu -->
      <div class="block md:hidden">
        <el-dropdown>
          <el-button type="primary" style="padding: 0px">
            <i class="text-4xl el-icon-s-fold el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <a href="/">Home</a>
            </el-dropdown-item>
            <el-dropdown-item>
              <a href="/read-news">Read News</a>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style>
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
</style>
