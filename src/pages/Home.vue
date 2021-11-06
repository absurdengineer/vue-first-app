<template>
  <h3>Home Page</h3>
  <!-- <transition name="fade" appear mode="out-in">
    <h5 v-if="flag" key="main">This is First Text</h5>
    <h5 v-else key="secondary">This is Another Text</h5>
  </transition> -->

  <!-- <transition name="zoom" appear mode="out-in">
    <h5 v-if="flag" key="main">Hello World</h5>
  </transition> -->

  <!-- <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    :css="true"
    name="fade"
  >
     :css will instruc vue not to check for css animations and go directly for js animations
        as vue prefers css animations over js animations.
    
    <h5 v-if="flag">Hello World</h5>
  </transition> -->
  <button @click="addElement">Add Number</button>
  <ul>
    <transition-group name="fade">
      <li
        v-for="(number, index) in numbers"
        :key="number"
        @click="handleDelete(index)"
      >
        {{ number }}
      </li>
    </transition-group>
  </ul>
</template>

<script>
export default {
  name: "Home",
  data() {
    return { flag: true, numbers: [1, 2, 3, 4, 5, 6] };
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
    enter(el) {
      console.log("enter event Fired!", el);
      // const animation = el.animate([{ transform: "scale3d(0,0,0)" }, {}], {
      //   duration: 1000,
      // });
      // animation.onfinish = () => done();
    },
    afterEnter(el) {
      console.log("after-enter event Fired!", el);
    },
    beforeLeave(el) {
      console.log("before-leave event Fired!", el);
    },
    leave(el) {
      console.log("leave event Fired!", el);
      // const animation = el.animate([{}, { transform: "scale3d(0,0,0)" }], {
      //   duration: 1000,
      // });
      // animation.onfinish = () => done();
    },
    afterLeave(el) {
      console.log("after-leave event Fired!", el);
    },
    addElement() {
      const number = Math.floor(Math.random() * 100 + 1);
      const index = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(index, 0, number);
    },
    handleDelete(index) {
      this.numbers.splice(index, 1);
    },
  },
};
</script>

<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 1s linear;
}
.fade-leave-to {
  transition: all 1s linear;
  opacity: 0;
}
.fade-move {
  transition: all 1s linear;
}
.fade-leave-active {
  position: absolute;
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

li {
  font-size: 22px;
  cursor: pointer;
}
</style>
