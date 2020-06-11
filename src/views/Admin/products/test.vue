<template>
    <div>
  <h1>{{ categories.name}}</h1></div>
</template>
<script>
import * as firebase from "firebase"
export default {
  name: "HuddleSpace",
  data() {
    return {
      id: this.$route.params,
    }
  },
  created() {
    this.fetchData()
  },
  watch: {
    "$route": "fetchData"
  },

  methods: {
    fetchData() {
      firebase.firestore().collection("categories")
      .doc(this.$route.params.id)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              name: doc.data().name
            
          });
        });
    }
}}
</script>
