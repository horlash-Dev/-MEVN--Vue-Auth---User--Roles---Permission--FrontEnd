<template lang="">
    <div>
    	<div class="content-header">
			<div class="d-flex align-items-center">
				<div class="mr-auto">
					<h3 class="page-title">Role</h3>
					<div class="d-inline-block align-items-center">
						<nav>
							<ol class="breadcrumb">
								<li class="breadcrumb-item active" aria-current="page">Roles</li>
							</ol>
						</nav>
					</div>
				</div>
			</div>
		</div>

        <div class="col-12 mt-10">
			  <div class="box">
				<div class="box-header with-border">
				  <h4 class="box-title">Roles Table</h4>
				  <div class="box-controls pull-right">
					<div class="lookup lookup-circle lookup-right">
					  <input type="text" name="s">
					</div>
				  </div>
				</div>
				<!-- /.box-header -->
                <div class="box-body no-padding">
					<div class="table-responsive">
					  <table class="table table-hover">
                            <tr>
                              <th scope="col"># ID </th>
                              <th scope="col">UserName</th>
                              <th scope="col">Role</th>
                              <th scope="col">actions</th>
                            </tr>
                            
                    <userRoles />

                </table> 
					</div>
				</div>
				<!-- /.box-body -->
			  </div>
			  <!-- /.box -->
			</div>
            
    </div>
</template>
<script setup>
import userRoles from '../../uac/userRoles.vue'
</script>
<style lang="">
    
</style>