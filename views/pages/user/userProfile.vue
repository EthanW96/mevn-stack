<template>
  <v-container class="pa-0" fluid>
    <template>
      <v-layout row>
        <v-flex>
          <v-card>
            <!-- Begin Toolbar -->
            <v-toolbar class="primary primaryText--text">
              <v-toolbar-title> {{ user.name }} </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn class="primaryText--text blue darken-3" :to="{name:'users'}">
                    Return to List
                  </v-btn>
            </v-toolbar>
            <v-card-text class="display-3">
                Email: {{ user.email }}
              </v-card-text>
              <v-card-text class="display-3">
                Age: {{ user.age }}
              </v-card-text>

          </v-card>
        </v-flex>
      </v-layout>
    </template>
  </v-container>
</template>

<script>
import { http } from "../../config/http.js";

export default {
  //Variables
  data: () => ({
    user: {},
  }),

  methods: {
    //load user from the db
    load(id) {
      http
        .get("/users/" + id, this.user)
        .then((response) => {
          console.log(this.user);
          this.user = response.data.user;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },

  //get that user
  mounted() {
    this.load(this.$route.params.id);
  },
};
</script>

<style>
</style>
