<script>
import CustomButton from '@/components/CustomButton.vue'
import Book from '@/components/Book.vue'

export default {
  components: {
    CustomButton,
    Book,
  },
}
</script>

<template>
  <CustomButton>Foo</CustomButton>
  <CustomButton>New</CustomButton>

  <Book></Book>
</template>
