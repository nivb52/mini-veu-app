<template>
  <div class="autocomplete search__container">
    <input
      class="search__input"
      type="text"
      v-model="term"
      @keydown.down="onArrowDown"
      @keydown.right="onArrowDown"
      @keydown.up="onArrowUp"
      @keydown.left="onArrowUp"
      @keydown.enter="onEnter"
    />

    <ul id="autocomplete-results" 
        v-show="isShowingResults" class="autocomplete-results"
    >
    
      <li class="loading" v-if="isLoading">Loading results...</li>

      <li
        v-else
        v-for="(result, i) in results"
        :key="i"
        @click="clickedResult(result)"
        class="autocomplete-result"
        :class="{ 'is-active': i === arrowCounter }"
      >{{ result.LocalizedName }}</li>
    </ul>
  </div>
</template>

<script>
import debounce from "lodash.debounce";

export default {
  name: "Autocomplete",

  props: {
    items: {
      type: Array,
      required: false,
      default: () => []
    },
    isFromLocal: {
      type: Boolean,
      required: false,
      default: false
    },
  },

  data() {
    return {
      isLoading: false,
      results: [],
      term: "",
      isShowingResults: false,
      arrowCounter: 0
    };
  },
  watch: {
    items: function(val, oldValue) {
        this.results = val;
        this.isLoading = false;
    },
     term(val) {
      if(!val) return
      const wantedInput = /[^A-Za-z]/ig     

      const isEnglish = val.search(wantedInput)
      if (isEnglish !== -1) {
        this.createToast('english only','is-info')
        this.term = val.replace(wantedInput, '')
      } else this.onChangeDebounce()
    }
  },
  methods: {
    onChange() {
        this.$emit("onSearch", this.term);
        this.isLoading = true;
        this.isShowingResults = true;
        this.results = this.items
        this.isLoading = false;
    },
    onPickedResult(result){
      this.$emit("onPickCity", result);
      this.isShowingResults = false;  
    },

   onEnter() {
      const result = this.results[this.arrowCounter]
      this.arrowCounter = -1;
      this.onPickedResult(result)
    },

    clickedResult(result) {
      if(!result) return      
      this.onPickedResult(result)
    },

    onArrowDown() {
      if (this.arrowCounter < this.results.length) {
        this.arrowCounter = this.arrowCounter + 1;
      }
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1;
      }
    },
 
    handleClickOutside(e) {
      if (!this.$el.contains(e.target)) {
        this.isShowingResults = false;
        this.arrowCounter = -1;
      }
    },
    
  },

  mounted() {
    this.onChangeDebounce = debounce(this.onChange.bind(this), 350)
    document.addEventListener("click", this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener("click", this.handleClickOutside);
  }
};
</script>

<style lang="scss" scope>
@import "@/assets/css/utills/search.scss";

</style>