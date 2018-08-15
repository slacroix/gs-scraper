<template>
  <div class="result-card card">
    <div class="card-header">
      <div class="card-header--title">
        {{data.title}}
      </div>
      <div class="card-header--price">
        ${{data.price}}
      </div>
    </div>
    <div class="card-body">
      <div class="card-body--image card-image" v-if="data.image">
        <img :src="data.image"/>
      </div>
      <div class="card-body--description">
        {{data.description}}
      </div>
      <div class="card-footer">
        <a target="__blank" :href="data.link">Link</a>
        <div class="card-header--date">
          {{data.date}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultCard',
  props: {
    data: Object,
    description: String
  },
  created() {
    if (this.data.hasOwnProperty('title') && this.data.title && this.data.title.length > 60) {
      const titleShortened = this.data.title.substr(0, 56);
      this.data.title = titleShortened + '...';
    }
    if (
      this.data.hasOwnProperty('description') &&
      this.data.description &&
      this.data.description.length > 252
    ) {
      // console.warn('GREATER THAN 252');
      const dShortened = this.data.description.substr(0, 249);
      this.data.description = dShortened + '...';
    }
  }
};
</script>

/*eslint-disable */
<style lang="scss" scoped>
@import '../styles/shadows.scss';
.result-card {
  @include box_shadow(2);
  padding: 1em;
  background-color: #fff;
  width: 100%;
  .card-header,
  .card-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: bold;
  }
  .card-header {
    height: 48px;
    .card-header--title {
      max-width: 35ch;
    }
  }
  .card-body--description {
    height: 144px;
  }
  .card-body--image {
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-width: 400px;
      max-height: 300px;
    }
  }
  .card-header--price {
    color: green;
    font-size: 1.2em;
  }
}
</style>
/*eslint-enable */