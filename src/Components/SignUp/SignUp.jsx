import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import './SignUp.css'
import $ from 'jquery'
export default function SignUp() {
  return <>
  
  <section class="wizard-section py-2">
		<div class="row no-gutters">
			<div class="col-lg-6 col-md-6">
				<div class="wizard-content-left d-flex justify-content-center align-items-center">
					
				</div>
			</div>
			<div class="col-lg-6 col-md-6">
				<div class="form-wizard">
					<form action="" method="post" role="form">
						<div class="form-wizard-header">
							
							<ul class="list-unstyled form-wizard-steps clearfix">
								<li class="active"><span>1</span></li>
								<li><span>2</span></li>
								<li><span>3</span></li>
							</ul>
						</div>
						<fieldset class="wizard-fieldset show">
							<h5>Parent Information</h5>
							<div class="flex">
								<div class="form-group">
								<input type="text" class="form-control wizard-required" id="fname"/>
								<label for="fname" class="wizard-form-text-label ">First Name</label>
								<div class="wizard-form-error"></div>
							</div>
							<div class="form-group">
								<input type="text" class="form-control wizard-required" id="lname"/>
								<label for="lname" class="wizard-form-text-label">Last Name</label>
								<div class="wizard-form-error"></div>
							</div>
							</div>
							<div class="form-group">
								<input type="text" class="form-control wizard-required" id="Phone-number"/>
								<label for="Phone-number" class="wizard-form-text-label">Phone Number</label>
								<div class="wizard-form-error"></div>
							</div>
							<div class="form-group">
								<input type="text" class="form-control wizard-required" id="Nationality"/>
								<label for="Nationality" class="wizard-form-text-label">Nationality</label>
								<div class="wizard-form-error"></div>
							</div>
			
							
							<div class="form-group">
								Gender
								<div class="wizard-form-radio">
									<input name="radio-name" id="radio1" type="radio"/>
									<label for="radio1">Male</label>
								</div>
								<div class="wizard-form-radio">
									<input name="radio-name" id="radio2" type="radio"/>
									<label for="radio2">Female</label>
								</div>
							
							</div>
							<div class="form-group">
								<input type="text" class="form-control wizard-required" id="zcode"/>
								<label for="zcode" class="wizard-form-text-label ">Currently living at</label>
								<div class="wizard-form-error"></div>
							</div>
							<div class="form-group clearfix">
								<Link to="javascript:;" id='btn1' class="form-wizard-next-btn rounded-pill float-right">Next</Link>
							</div>
						</fieldset>	
						<fieldset class="wizard-fieldset">
							<h5>Parent Information</h5>
							<div class="form-group">
								<input type="email" class="form-control wizard-required" id="email"/>
								<label for="email" class="wizard-form-text-label">Email</label>
								<div class="wizard-form-error"></div>
							</div>
							
							<div class="form-group">
								<input type="text" class="form-control wizard-required" id="username"/>
								<label for="username" class="wizard-form-text-label">User Name</label>
								<div class="wizard-form-error"></div>
							</div>

							<div class="row">
								<div class="col-12">Birth Date</div>
								<div class="col-lg-4 col-md-4 col-sm-4">
									<div class="form-group">
										<select class="form-control">
											<option value="">Date</option>
											<option value="">1</option>
											<option value="">2</option>
											<option value="">3</option>
											<option value="">4</option>
											<option value="">5</option>
											<option value="">6</option>
											<option value="">7</option>
											<option value="">8</option>
											<option value="">9</option>
											<option value="">10</option>
											<option value="">11</option>
											<option value="">12</option>
											<option value="">13</option>
											<option value="">14</option>
											<option value="">15</option>
											<option value="">16</option>
											<option value="">17</option>
											<option value="">18</option>
											<option value="">19</option>
											<option value="">20</option>
											<option value="">21</option>
											<option value="">22</option>
											<option value="">23</option>
											<option value="">24</option>
											<option value="">25</option>
											<option value="">26</option>
											<option value="">27</option>
											<option value="">28</option>
											<option value="">29</option>
											<option value="">30</option>
											<option value="">31</option>
										</select>
									</div>
								</div>
								<div class="col-lg-4 col-md-4 col-sm-4">
									<div class="form-group">
										<select class="form-control">
											<option value="">Month</option>
											<option value="">jan</option>
											<option value="">Feb</option>
											<option value="">March</option>
											<option value="">April</option>
											<option value="">May</option>
											<option value="">June</option>
											<option value="">Jully</option>
											<option value="">August</option>
											<option value="">Sept</option>
											<option value="">Oct</option>
											<option value="">Nov</option>
											<option value="">Dec</option>	
										</select>
									</div>
								</div>
								<div class="col-lg-4 col-md-4 col-sm-4">
									<div class="form-group">
										<input type="text" class="form-control" placeholder="Year" name="Year of birth"/>
									</div>
								</div>
							</div>

							<div class="form-group">
								<input type="password" class="form-control wizard-required" id="pwd"/>
								<label for="pwd" class="wizard-form-text-label">Password</label>
								<div class="wizard-form-error"></div>
								<span class="wizard-password-eye"><i class="far fa-eye"></i></span>
							</div>
							<div class="form-group">
								<input type="password" class="form-control wizard-required" id="cpwd"/>
								<label for="cpwd" class="wizard-form-text-label">Confirm Password</label>
								<div class="wizard-form-error"></div>
							</div>
							<div class="form-group clearfix">
								<Link to="javascript:;" class="form-wizard-previous-btn float-left">Previous</Link>
								<Link to="javascript:;" class="form-wizard-next-btn float-right">Next</Link>
							</div>
						</fieldset>	
						<fieldset class="wizard-fieldset">
							<h5> Child Information</h5>
							<div class="form-group">
								<input type="Childfname" class="form-control wizard-required" id="Childfname"/>
								<label for="Childfname" class="wizard-form-text-label">First Name</label>
								<div class="wizard-form-error"></div>
							</div>
							<div class="form-group">
								<input type="Childlname" class="form-control wizard-required" id="Childlname"/>
								<label for="Childlname" class="wizard-form-text-label">Last Name</label>
								<div class="wizard-form-error"></div>
							</div>
							
							<div class="row">
								<div class="col-12">Birth Date</div>
								<div class="col-lg-4 col-md-4 col-sm-4">
									<div class="form-group">
										<select class="form-control">
											<option value="">Date</option>
											<option value="">1</option>
											<option value="">2</option>
											<option value="">3</option>
											<option value="">4</option>
											<option value="">5</option>
											<option value="">6</option>
											<option value="">7</option>
											<option value="">8</option>
											<option value="">9</option>
											<option value="">10</option>
											<option value="">11</option>
											<option value="">12</option>
											<option value="">13</option>
											<option value="">14</option>
											<option value="">15</option>
											<option value="">16</option>
											<option value="">17</option>
											<option value="">18</option>
											<option value="">19</option>
											<option value="">20</option>
											<option value="">21</option>
											<option value="">22</option>
											<option value="">23</option>
											<option value="">24</option>
											<option value="">25</option>
											<option value="">26</option>
											<option value="">27</option>
											<option value="">28</option>
											<option value="">29</option>
											<option value="">30</option>
											<option value="">31</option>
										</select>
									</div>
								</div>
								<div class="col-lg-4 col-md-4 col-sm-4">
									<div class="form-group">
										<select class="form-control">
											<option value="">Month</option>
											<option value="">jan</option>
											<option value="">Feb</option>
											<option value="">March</option>
											<option value="">April</option>
											<option value="">May</option>
											<option value="">June</option>
											<option value="">Jully</option>
											<option value="">August</option>
											<option value="">Sept</option>
											<option value="">Oct</option>
											<option value="">Nov</option>
											<option value="">Dec</option>	
										</select>
									</div>
								</div>
								<div class="col-lg-4 col-md-4 col-sm-4">
									<div class="form-group">
										<input type="text" class="form-control" placeholder="Year" name="Year of birth"/>
									</div>
								</div>
							</div>

									<div class="form-group">
								Gender
								<div class="wizard-form-radio">
									<input name="radio-name" id="radio1" type="radio"/>
									<label for="radio1">Male</label>
								</div>
								<div class="wizard-form-radio">
									<input name="radio-name" id="radio2" type="radio"/>
									<label for="radio2">Female</label>
								</div>
							</div>
								<div class="form-group">
									<select class="form-control">
										<option disabled label="Education Level" value="">Education Level</option>
										<option value="">Primary 1</option>
										<option value="">Primary 2</option>
										<option value="">Primary 3</option>
										<option value="">Primary 4</option>
										<option value="">Primary 5</option>
										<option value="">Primary 6</option>
										
									</select>

								</div>
								<div class="form-group">
									<h6 class="margin-buttom">Upload your Child Picture</h6>
									<input id="acon" name="Child-photo" type="file"/></div>
							<div class="form-group clearfix">
								<Link to="javascript:;" class="form-wizard-previous-btn btn2 float-left">Previous</Link>
								<Link to="javascript:;" class="form-wizard-submit float-right">Submit</Link>
							</div>
						</fieldset>	
					</form>
				</div>
			</div>
		</div>
	</section>
  </>
}

$(document).ready(function() {
	// click on next button
	$('.form-wizard-next-btn').click(function() {
		var parentFieldset = $(this).parents('.wizard-fieldset');
		var currentActiveStep = $(this).parents('.form-wizard').find('.form-wizard-steps .active');
		var next = $(this);
		var nextWizardStep = true;
		parentFieldset.find('.wizard-required').each(function(){
			var thisValue = $(this).val();

			if( thisValue === "") {
				$(this).siblings(".wizard-form-error").slideDown();
				nextWizardStep = false;
			}
			else {
				$(this).siblings(".wizard-form-error").slideUp();
			}
		});
		if( nextWizardStep) {
			next.parents('.wizard-fieldset').removeClass("show","400");
			currentActiveStep.removeClass('active').addClass('activated').next().addClass('active',"400");
			next.parents('.wizard-fieldset').next('.wizard-fieldset').addClass("show","400");
			$(document).find('.wizard-fieldset').each(function(){
				if($(this).hasClass('show')){
					var formAtrr = $(this).attr('data-tab-content');
					$(document).find('.form-wizard-steps .form-wizard-step-item').each(function(){
						if($(this).attr('data-attr') === formAtrr){
							$(this).addClass('active');
							var innerWidth = $(this).innerWidth();
							var position = $(this).position();
							$(document).find('.form-wizard-step-move').css({"left": position.left, "width": innerWidth});
						}else{
							$(this).removeClass('active');
						}
					});
				}
			});
		}
	});
	//click on previous button
	$('.form-wizard-previous-btn').click(function() {
		var counter = parseInt($(".wizard-counter").text());;
		var prev =$(this);
		var currentActiveStep = $(this).parents('.form-wizard').find('.form-wizard-steps .active');
		prev.parents('.wizard-fieldset').removeClass("show","400");
		prev.parents('.wizard-fieldset').prev('.wizard-fieldset').addClass("show","400");
		currentActiveStep.removeClass('active').prev().removeClass('activated').addClass('active',"400");
		$(document).find('.wizard-fieldset').each(function(){
			if($(this).hasClass('show')){
				var formAtrr = $(this).attr('data-tab-content');
				$(document).find('.form-wizard-steps .form-wizard-step-item').each(function(){
					if($(this).attr('data-attr') == formAtrr){
						$(this).addClass('active');
						var innerWidth = $(this).innerWidth();
						var position = $(this).position();
						$(document).find('.form-wizard-step-move').css({"left": position.left, "width": innerWidth});
					}else{
						$(this).removeClass('active');
					}
				});
			}
		});
	});
	//click on form submit button
	$(document).on("click",".form-wizard .form-wizard-submit" , function(){
		var parentFieldset = $(this).parents('.wizard-fieldset');
		var currentActiveStep = $(this).parents('.form-wizard').find('.form-wizard-steps .active');
		parentFieldset.find('.wizard-required').each(function() {
			var thisValue = $(this).val();
			if( thisValue === "" ) {
				$(this).siblings(".wizard-form-error").slideDown();
			}
			else {
				$(this).siblings(".wizard-form-error").slideUp();
			}
		});
	});
	// focus on input field check empty or not
	$(".form-control").on('focus', function(){
		var tmpThis = $(this).val();
		if(tmpThis === '' ) {
			$(this).parent().addClass("focus-input");
		}
		else if(tmpThis !=='' ){
			$(this).parent().addClass("focus-input");
		}
	}).on('blur', function(){
		var tmpThis = $(this).val();
		if(tmpThis === '' ) {
			$(this).parent().removeClass("focus-input");
			$(this).siblings('.wizard-form-error').slideDown("3000");
		}
		else if(tmpThis !=='' ){
			$(this).parent().addClass("focus-input");
			$(this).siblings('.wizard-form-error').slideUp("3000");
		}
	});
});
