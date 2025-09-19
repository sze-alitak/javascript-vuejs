<script>
export default {
  data() {
    return {
        books: [
              {
                "id": 1,
                "title": "Foundation",
                'is_completed': false,
            },
            {
                "id": 2,
                "title": "Foundation and Empire",
                'is_completed': false,
            },
            {
                "id": 3,
                "title": "Witcher",
                'is_completed': false,
            },
            {
                "id": 4,
                "title": "Witcher 2",
                'is_completed': false,
            },
            {
                "id": 5,
                "title": "Witcher 3",
                'is_completed': false,
            },
        ]
    }
  },
  computed: {
      incompleteBooks() {
          return this.books.filter(book => !book.is_completed);
      },
      completeBooks() {
          return this.books.filter(book => book.is_completed);
      },
  }
}
</script>

<template>
  <h2 v-if="incompleteBooks.length">Könyvek:</h2>
  <ul>
    <li v-for="book in incompleteBooks" :key="`book-${book.id}`">
      <input type="checkbox" v-model="book.is_completed">
      <span>{{ book.title }}</span>
    </li>
  </ul>

  <h2 class="mt-3" v-if="completeBooks.length">Elolvasott könyvek:</h2>
  <ul>
    <li v-for="book in completeBooks" :key="`book-${book.id}`">
      <input type="checkbox" v-model="book.is_completed">
      <span>{{ book.title }}</span>
    </li> 
  </ul>
</template>
