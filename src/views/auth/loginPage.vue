<template lang="">

		<div class="row align-items-center justify-content-md-center h-p100">	
			
			<div class="col-12">
				<div class="row justify-content-center no-gutters">
					<div class="col-lg-4 col-md-5 col-12">
						<div class="content-top-agile p-10">
							<p class="text-white-50">Sign in to start your session</p>							
						</div>
						<div class="p-30 rounded30 box-shadowed b-2 b-dashed">
					<loginForm />
							
							<div class="text-center">
                             <router-link to="/"> Home </router-link>
								<p class="mt-15 mb-0 text-white">Don't have an account? <router-link to="/register" class="text-info ml-5">Sign Up</router-link></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>
<script setup>
    import loginForm from '@/components/forms/loginForm.vue'

</script>
<style lang="">
    
</style>