<template lang="">
    <div>
		<div class="content-header">
			<div class="d-flex align-items-center">
				<div class="mr-auto">
					<h3 class="page-title">Profile</h3>
					<div class="d-inline-block align-items-center">
						<nav>
							<ol class="breadcrumb">
								<li class="breadcrumb-item active" aria-current="page">Profile</li>
							</ol>
						</nav>
					</div>
				</div>
			</div>
		</div>

		<!-- Main content -->
		<section class="content">

		  <div class="row">
			  <div class="col-12 col-lg-6 col-xl-6">
				  <div class="box box-inverse bg-img" style="background-image: url(src/assets/images/gallery/full/1.jpg);" data-overlay="2">
					  <div class="flexbox px-20 pt-20">
						<label class="toggler toggler-danger text-white">
						  <input type="checkbox">
						  <i class="fa fa-heart"></i>
						</label>
					
					  </div>

					  <div class="box-body text-center pb-50">
						<a href="#">
						  <img class="avatar avatar-xxl avatar-bordered" src="@/assets/images/avatar/5.jpg" alt="">
						</a>
						<h4 class="mt-2 mb-0" ><a class="hover-primary text-white"  href="#">{{ fullname }}</a></h4>
						<span><i class="fa fa-map-marker w-20"></i> an {{ role }}</span>
					  </div>

					</div>				

				  <!-- Profile Image -->
				  <div class="box">
					<div class="box-body box-profile">            
					  <div class="row">
						<div class="col-12">
							<div>
								<p>Email :<span class="text-gray pl-10">{{ userInfo.Email }}</span> </p>
								<p>Phone :<span class="text-gray pl-10">{{ userInfo.phone }}</span></p>
							</div>
						</div>
					
					  </div>
					</div>
					<!-- /.box-body -->
				  </div>
			  </div>
		  </div>
		  <!-- /.row -->

		</section>
		<!-- /.content -->
    </div>
</template>
<script>
export default {
 props: { userInfo: {Object}, role: String, fullname: String },

    setup() {
		return {  }
	}
}
</script>
<style lang="">
    
</style>