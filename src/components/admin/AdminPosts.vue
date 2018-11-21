<template>
    <div>
        <div id="header">Posts</div>
    <div class="button add" @click="addPost()">Add Post</div>
    <ul>
      <li v-for="post in posts" class="post" :key="post.id">
        <div class="label">Title</div>
        <input v-model="post.title" :disabled="!post.isChanging"/>

        <div class="label">Content</div>
        <textarea v-model="post.content" rows="8" :disabled="!post.isChanging"/>

        <div class="button" v-show="post.isChanging" @click="save(post)">Save <i class="fas fa-save"/></div>
        <div class="button" v-show="post.isChanging" @click="undo(post)">Undo <i class="fas fa-undo"/></div>
        <div class="button" v-show="!post.isChanging" @click="edit(post)">Change <i class="fas fa-edit"/></div>
        <div class="button" v-show="!post.isChanging" @click="remove(post)">Remove <i class="fas fa-trash-alt"/></div>
      </li>
    </ul>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
    return {
      posts: [],
      isChanging: false
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
      .then(posts => {
        this.posts = posts;
      });
  },
  methods: {
    addPost() {
      var newPost = {
        title: "Title",
        content: "Content"
      };
      axios
        .post("/posts", newPost)
        .then(response => {
          var result = response.data;
          result["isChanging"] = false;
          result["titleSaved"] = "";
          result["contentSaved"] = "";
          return result;
        })
        .then(added => {
          this.posts.unshift(added);
        });
    },
    save(post) {
      post.isChanging = false;
      axios.post("/posts", post).then(response => {
        post.title = response.data.title;
        post.content = response.data.content;
      });
    },
    undo(post) {
      post.title = post.titleSaved;
      post.content = post.contentSaved;
      post.titleSaved = "";
      post.contentSaved = "";
      post.isChanging = false;
    },
    edit(post) {
      post.titleSaved = post.title;
      post.contentSaved = post.content;
      post.isChanging = true;
    },
    remove(post) {
      axios
        .delete("/posts", { data: post })
        .then(response => {
          for (var i = 0; i < this.posts.length; i++) {
            if (this.posts[i].id === post.id) {
              this.posts.splice(i, 1);
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
