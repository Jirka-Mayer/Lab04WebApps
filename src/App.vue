<template>
  <div id="app" class="container">
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img alt="Vue logo" src="@/assets/logo.png">
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          Home
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/increment' }">
          Increment
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/decrement' }">
          Decrement
        </b-navbar-item>
      </template>
    </b-navbar>
    <div style="height: 50px"></div>
    <router-view/>
  </div>
</template>
