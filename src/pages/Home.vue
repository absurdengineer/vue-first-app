<template>
  <h3>Home Page</h3>
  <button @click="flag = !flag">Toggle</button>
  <!-- <transition name="fade" appear mode="out-in">
    <h5 v-if="flag" key="main">This is First Text</h5>
    <h5 v-else key="secondary">This is Another Text</h5>
  </transition> -->

  <!-- <transition name="zoom" appear mode="out-in">
    <h5 v-if="flag" key="main">Hello World</h5>
  </transition> -->

  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <h5 v-if="flag">Hello World</h5>
  </transition>
</template>

<script>
export default {
  name: "Home",
  data() {
    return { flag: true };
  },
  unmounted() {
    console.log("Home Component Unmounted.");
  },
  activated() {
    console.log("Home Component Activated.");
  },
  deactivated() {
    console.log("Home Component Deactivated");
  },
  methods: {
    beforeEnter(el) {
      console.log("before-enter event Fired!", el);
    },
    enter(el, done) {
      console.log("enter event Fired!", el);
      done();
    },
    afterEnter(el) {
      console.log("after-enter event Fired!", el);
    },
    beforeLeave(el) {
      console.log("before-leave event Fired!", el);
    },
    leave(el, done) {
      console.log("leave event Fired!", el);
      done();
    },
    afterLeave(el) {
      console.log("after-leave event Fired!", el);
    },
  },
};
</script>

<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.5s linear;
}
.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
}

@keyframes zoom-in {
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
}
@keyframes zoom-out {
  from {
    transform: scale(1, 1);
  }
  to {
    transform: scale(0, 0);
  }
}

.zoom-enter-active {
  animation: zoom-in 1s linear forwards;
  transition: all 1s linear;
}
.zoom-leave-active {
  animation: zoom-out 1s linear forwards;
  transition: all 1s linear;
}
.zoom-enter-from {
  opacity: 0;
}
.zoom-leave-to {
  opacity: 0;
}
</style>
