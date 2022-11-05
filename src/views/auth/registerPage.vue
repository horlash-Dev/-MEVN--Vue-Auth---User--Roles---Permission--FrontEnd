<template lang="">

		<div class="row align-items-center justify-content-md-center h-p100">	
			
			<div class="col-12">
				<div class="row justify-content-center no-gutters">
					<div class="col-lg-4 col-md-5 col-12">
						<div class="content-top-agile p-10">
							<p class="text-white-50">Sign up to start your session</p>							
						</div>
						<div class="p-30 rounded30 box-shadowed b-2 b-dashed">
					<registerForm />
                	
					<p class="mt-15 mb-0 text-white">Login<router-link to="/login" class="text-info ml-5">Sign in</router-link></p>
					</div>
				</div>
				</div>
			</div>
		</div>

</template>
<script setup>
    import registerForm from '@/components/forms/registerForm.vue'

</script>
<style lang="">
    
</style>