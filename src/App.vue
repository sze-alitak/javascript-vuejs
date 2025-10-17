<template>
  <ul class="mb-20 grid grid-cols-4 gap-4">
    <li><RouterLink to="/">Home</RouterLink></li>
    <li><RouterLink to="/books">Books</RouterLink></li>
    <li><RouterLink to="/todo">Todo</RouterLink></li>
  </ul>

  <RouterView></RouterView>
</template>

