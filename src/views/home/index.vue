<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor v-for="(floor, index) in floorList" :key="floor.id" :floorObj="floor" />
    <Brand />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ListContainer from './list_container'
import Recommend from './recommend'
import Rank from './rank'
import Like from './like'
import Floor from './floor'
import Brand from './brand'
export default {
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  mounted() {
    this.$store.dispatch('home/getFloorList')
  },
  computed: {
    ...mapState({
      floorList: state => state.home.floorList
    })
  }
}
</script>

<style>
</style>