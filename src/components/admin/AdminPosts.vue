<template>
    <div>
        <div id="header">Posts</div>
    <div class="button add" @click="addPost()">Add Post</div>
    <ul>
      <li v-for="post in posts" class="post" :key="post.id">
        <div class="label">Image</div>
        <div class="imagePreview" v-if="post.image">
          <img :src="post.image.fileDownloadUri" alt="">
        </div>
        <label class="file-select">
        <!-- We can't use a normal button element here, as it would become the target of the label. -->
          <div class="select-button">
          <!-- Display the filename if a file has been selected. -->
            <div v-if="post.image">
              <span >
                Selected File: {{ post.image.fileName }}
              </span>
            </div>
            <span v-else>Select File</span>
          </div>
          <!-- Now, the file input that we hide. -->
          <input :disabled="!post.isChanging" type="file" @change="onFileSelected(post, $event)"/>
        </label>

        <div class="label">Text</div>
        <textarea v-model="post.text" rows="8" :disabled="!post.isChanging"/>

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
    fetch("http://localhost:8080/private/posts", {
      method: "GET",
      headers: new Headers({
        Authorization: localStorage.token,
        "Content-Type": "application/json"
      })
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        var result = data;
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
        text: "Text"
      };

      fetch("http://localhost:8080/posts", {
        method: "POST",
        headers: new Headers({
          Authorization: localStorage.token,
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(newPost)
      })
        .then(response => response.json())
        .then(data => {
          var result = data;
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

      fetch("http://localhost:8080/posts", {
        method: "PUT",
        headers: new Headers({
          Authorization: localStorage.token,
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(post)
      })
        .then(response => response.json())
        .then(data => {
          post.id = data.id;
          post.text = data.text;
          post.image = data.image;
        });
    },
    undo(post) {
      post.title = post.titleSaved;
      post.content = post.contentSaved;
      post.image = post.imageSaved;
      post.titleSaved = "";
      post.contentSaved = "";
      post.isChanging = false;
    },
    edit(post) {
      post.titleSaved = post.title;
      post.contentSaved = post.content;
      post.imageSaved = post.image;
      post.isChanging = true;
    },
    remove(post) {
      fetch("http://localhost:8080/posts", {
        method: "DELETE",
        headers: new Headers({
          Authorization: localStorage.token,
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(post)
      }).then(response => {
        for (var i = 0; i < this.posts.length; i++) {
          if (this.posts[i].id === post.id) {
            this.posts.splice(i, 1);
          }
        }
      });
    },
    onFileSelected(post, event) {
      const formData = new FormData();
      formData.append("file", event.target.files[0]);

      fetch("http://localhost:8080/uploadFile", {
        method: "POST",
        headers: new Headers({
          Authorization: localStorage.token
        }),
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          post.image = data;
        });
    }
  }
};
</script>

<style scoped>

.imagePreview {
  display: block;
  width: 300px;
  height: 200px;
}

.imagePreview img {
  width: 100%;
  height: 100%;
}

.file-select > .select-button {
  padding: 1rem;
  display: inline-block;
  width: 300px;
  box-sizing: border-box;

  color: white;
  background-color: #2EA169;

  border-radius: .3rem;

  text-align: center;
  font-weight: bold;
}

/* Don't forget to hide the original file input! */
.file-select > input[type="file"] {
  display: none;
}



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
