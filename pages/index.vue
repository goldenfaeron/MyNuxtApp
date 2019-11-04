<template>
<div>
  <logo>
  </logo>
  <TestComponent>
  </TestComponent>
</div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import TestComponent from '~/components/TestComponent.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
	TestComponent
  }
}
</script>
