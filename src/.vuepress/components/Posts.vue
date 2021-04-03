<template>
  <div>
    <div v-for="post in posts" :key="post.key">
      <router-link :to="post.path">
        <div class="post">
            {{ post.title }}
            <div class="description">
              {{ post.frontmatter.description }}
            </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.getPosts()
        .map((p) => this.convertPageDate(p))
        .sort(this.dateCompare());
    },
  },
  methods: {
    getPosts() {
      return this.$site.pages.filter((p) => p.path.includes("/posts/"));
    },
    convertPageDate(p) {
      return { ...p, date: new Date(p.frontmatter.date) };
    },
    dateCompare(desc = true) {
      let multiplier = desc ? -1 : 1;
      return (a, b) => {
        return multiplier * (a.date - b.date);
      };
    },
  },
};
</script>

<style scoped>
.post {
  margin-top: 10px;
  margin-bottom: 10px;
  border-left: solid 5px #3767ce;
  padding: 20px;
}

.description {
  margin-top: 10px;
  color: #95979F;
}
</style>