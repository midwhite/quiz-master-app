<template>
  <modal @close="$emit('close')">
    <h3 slot="header">Sign in</h3>
  </modal>
</template>

<script>
  import Modal from '@/components/shared/modal';

  export default {
    components: {
      Modal,
    },
  };
</script>
