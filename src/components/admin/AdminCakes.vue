<template>
    <div>
        <div id="header">Cakes</div>
    <div class="button add" @click="addCake()">Add Cake</div>
    <ul>
      <li v-for="cake in cakes" class="post" :key="cake.id">
        <div class="label">Title</div>
        <input v-model="cake.title" :disabled="!cake.isChanging"/>

        <div class="label">Content</div>
        <textarea v-model="cake.content" rows="8" :disabled="!cake.isChanging"/>

        <div class="button" v-show="cake.isChanging" @click="save(cake)">Save <i class="fas fa-save"/></div>
        <div class="button" v-show="cake.isChanging" @click="undo(cake)">Undo <i class="fas fa-undo"/></div>
        <div class="button" v-show="!cake.isChanging" @click="edit(cake)">Change <i class="fas fa-edit"/></div>
        <div class="button" v-show="!cake.isChanging" @click="remove(cake)">Remove <i class="fas fa-trash-alt"/></div>
      </li>
    </ul>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cakes: []
    };
  },
  beforeCreate() {
    axios
      .get("/posts")
      .then(response => {
        var result = response.data;
        result.forEach(element => {
          element["isChanging"] = false;
          element["titleSaved"] = "";
          element["contentSaved"] = "";
        });

        return result;
      })
      .then(cakes => {
        this.cakes = cakes;
      });
  },
  methods: {
    addCake() {
      var newCake = {
        title: "Title",
        content: "Content"
      };
      axios
        .post("/posts", newCake)
        .then(response => {
          var result = response.data;
          result["isChanging"] = false;
          result["titleSaved"] = "";
          result["contentSaved"] = "";
          return result;
        })
        .then(added => {
          this.cakes.unshift(added);
        });
    },
    save(cake) {
      cake.isChanging = false;
      axios.post("/posts", cake).then(response => {
        cake.title = response.data.title;
        cake.content = response.data.content;
      });
    },
    undo(cake) {
      cake.title = cake.titleSaved;
      cake.content = cake.contentSaved;
      cake.titleSaved = "";
      cake.contentSaved = "";
      cake.isChanging = false;
    },
    edit(cake) {
      cake.titleSaved = cake.title;
      cake.contentSaved = cake.content;
      cake.isChanging = true;
    },
    remove(cake) {
      axios
        .delete("/posts", { data: cake })
        .then(response => {
          for (var i = 0; i < this.cakes.length; i++) {
            if (this.cakes[i].id === post.id) {
              this.cakes.splice(i, 1);
            }
          }
        });
    }
  }
};
</script>

<style scoped>
#header {
  display: block;
  font-size: 40px;
  border-bottom: 3px solid #ccc;
  margin-bottom: 20px;
}

ul {
  margin: 0;
  padding: 0;
}

.post {
  border: 2px solid #999;
  border-radius: 5px;
  display: block;
  margin-bottom: 20px;
  padding: 20px 30px;
  background-color: rgb(250, 250, 250);
}

.post:last-child {
  margin-bottom: 0;
}

input,
textarea {
  display: block;
  width: 100%;
  resize: none;
  margin-bottom: 15px;
  font-size: 16px;
  border-radius: 5px;
  border: 2px solid #ccc;
  font-family: inherit;
}

.button {
  display: inline-block;
  width: 100px;
  text-align: center;
  border: 1px solid black;
  background-color: #eee;
  padding: 5px;
  border-radius: 5px;
  margin-right: 10px;
}

.button:hover {
  cursor: pointer;
  box-shadow: 0px 0px 4px #000;
}

.button:active {
  box-shadow: 0px 0px 3px #000;
}

.add {
  margin-bottom: 20px;
}

.label {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 5px;
}
</style>
