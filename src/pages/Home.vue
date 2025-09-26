<template>
    <div class="page">
        <Hero />
        <div class="site-main">

        <!--row-top-section-->
        <section class="ttm-row row-top-section clearfix">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="mt_60 res-991-mt_15">
                            <div class="row row-equal-height ttm-bgcolor-white ttm-box-seperator box-shadow">
                                <div class="col-lg-4 col-md-4 col-sm-12">
                                    <!-- featured-icon-box -->
                                    <div class="featured-icon-box top-icon featured-icon-hover text-center">
                                        <div class="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                            <i class="ti ti-medall"></i>
                                        </div>
                                        <div class="featured-content">
                                            <div class="featured-title">
                                                <h5>Emergency</h5>
                                            </div>
                                            <div class="featured-desc">
                                                <p>Please call 911 Contact our friendly reception staff with any general or medical enquiry.</p>
                                                <p><a href="tel:+1-301-575-4714">+1-301-575-4714</a></p>
                                            </div>
                                        </div>
                                    </div><!-- featured-icon-box end-->
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-12">
                                    <!-- featured-icon-box -->
                                    <div class="featured-icon-box top-icon featured-icon-hover text-center">
                                        <div class="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                            <i class="ti ti-timer"></i>
                                        </div>
                                        <div class="featured-content">
                                            <div class="featured-title">
                                                <h5>Services</h5>
                                            </div>
                                            <div class="featured-desc">
                                                <p>We provide Adult and Pediatric Skilled & Non-Skilled Home Care Services.</p>
                                                <a class="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline mb-15" href="#">VIEW MORE</a>
                                            </div>
                                        </div>
                                    </div><!-- featured-icon-box end-->
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-12">
                                    <!-- featured-icon-box -->
                                    <div class="featured-icon-box top-icon featured-icon-hover text-center">
                                        <div class="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                            <i class="ti ti-heart-broken"></i>
                                        </div>
                                        <div class="featured-content">
                                            <div class="featured-title">
                                                <h5>Hours of Office Operation</h5>
                                            </div>
                                            <div class="featured-desc">
                                                <p>Sat & Sun 1pm – 5pm</p>
                                                <p>Mon – Fri 9am – 7pm</p>
                                            </div>
                                        </div>
                                    </div><!-- featured-icon-box end-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- row end -->
            </div>
        </section>
        <!-- row-top-section end -->


        <!--about-section-->
        <section class="ttm-row about-section break-991-colum clearfix">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-xs-12">
                        <div class="pt-50 res-991-pt-0">
                            <!-- section title -->
                            <div class="section-title clearfix">
                                <div class="title-header">
                                    <!-- <h5>OUR MEDICAL</h5> -->
                                    <h2 class="title">Improving The Quality Of Your Life Through Better Health.
</h2>
                                </div>
                            </div><!-- section title end -->
                            <div class="mb-30 clearfix">
                                <p>“We are dedicated to crafting personalized care plans tailored to your unique needs, which may include the management of acute and chronic conditions. If we cannot address your specific needs directly, we are willing to offer referrals or guidance on finding the appropriate healthcare professional.</p>

                                <p>Our unwavering commitment is to establish ourselves as the leading healthcare network in the region, delivering patient-centered care that fosters both skilled and non-skilled health services with excellence. Our goal is to become the primary and most trusted choice for our patients, employees, volunteers, and communities alike. We are here to enhance the well-being of our community, striving to improve the quality of life through better home-based health care services.”</p>
                            </div>
                                                        <div class="row">
                                <div class="col-sm-6">
                                    <ul class="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor">
                                        <li><i class="fa fa-arrow-circle-right"></i><span class="ttm-list-li-content">Our healthcare agency is overseen by a Doctor in Nursing Practice, ensuring close collaboration with your medical providers.</span></li>
                                        <li><i class="fa fa-arrow-circle-right"></i><span class="ttm-list-li-content">We provide an extensive spectrum of care and assistance to our patients, covering everything from diagnosis through treatment and rehabilitation.</span></li>
                                    </ul>
                                </div>
                                <div class="col-sm-6">
                                    <ul class="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor">
                                        <li><i class="fa fa-arrow-circle-right"></i><span class="ttm-list-li-content">We maintain close collaboration with your primary care providers to assess your healthcare requirements and develop an appropriate care plan.</span></li>
                                      
                                    </ul>
                                </div>
                                <div class="col-lg-12">
                                    <div class="mt-25 res-991-mt-10 res-991-mb-40">
                                        <a class="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor mt-15" href="#">CONTACT US!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xs-12">
                        <!-- ttm_single_image-wrapper -->
                        <div class="ttm_single_image-wrapper">
                            <div class="pl-40 pb-40 ttm-bg-pattern text-end">
                                <img class="img-fluid" src="/assets/images/single-img-one.jpg" alt="">
                            </div>
                            <!-- ttm-fid -->
                            <div class="ttm-fid inside ttm-fid-with-icon ttm-fid-view-lefticon ttm-highlight-fid">
                                <div class="ttm-fid-icon-wrapper">
                                    <i class="fa fa-hospital-o"></i>
                                </div>
                                <div class="ttm-fid-contents">
                                    <h4 class="ttm-fid-inner">
                                        <vue-animated-number
                                            :value="35"
                                            :formatValue="formatValue"
                                            :duration="1000"
                                        /><sup>+</sup>
                                    </h4>
                                    <h3 class="ttm-fid-title"><span>Years Of<br>Experience<br></span></h3>
                                </div>
                            </div>
                        </div><!-- ttm_single_image-wrapper end -->
                    </div>
                </div><!-- row end -->
            </div>
        </section>
        <!--about-section end-->


            <!--quality-services-section-->
        <div class="ttm-row quality-services-section ttm-bgcolor-grey clearfix">
            <div class="container">
                <!-- row -->
                <div class="row">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-8 col-md-12">
                        <!-- section-title -->
                        <div class="section-title with-desc text-center clearfix">
                            <div class="title-header">
                                <h5>ABC of Life Health Services Inc.</h5>
                                <h2 class="title">We Make Quality Skilled & Non-Skilled Personal Care As Easy As ABC.Special High-quality Services</h2>
                            </div>
                        </div><!-- section-title end -->
                    </div>
                    <div class="col-lg-2"></div>
                </div><!-- row end -->
                <div class="row">
                    <div class="col-md-3">
                        <!--featured-imagebox-->
                        <div class="featured-imagebox ttm-box-view-top-image box-shadow res-991-mb-30">
                            <div class="featured-thumbnail">
                                <img class="img-fluid" src="/assets/images/services/01.jpg" alt="">
                            </div>
                            <div class="featured-content featured-content-bottom">
                                <div class="featured-title">
                                    <h5><a href="single-blog.html">Personal Care</a></h5>
                                </div>
                                <div class="featured-desc">
                                    <p> Our Certified Nursing Assistants (CNAs) assist with patient’s activities of daily living which include:</p>
                                    <ul>
                                        <li>Medication Reminders</li>
                                        <li> Errands meal preparation </li>
                                        <li>Keeping doctor’s appointments</li>
                                    </ul>
                                    <a class="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline mb-5" href="#">READ MORE</a>
                                </div>
                            </div>
                        </div><!-- featured-imagebox end-->
                    </div>
                    <div class="col-md-3">
                        <!--featured-imagebox-->
                        <div class="featured-imagebox ttm-box-view-top-image box-shadow res-991-mb-30">
                            <div class="featured-thumbnail">
                                <img class="img-fluid" src="/assets/images/services/02.jpg" alt="">
                            </div>
                            <div class="featured-content featured-content-bottom">
                                <div class="featured-title">
                                    <h5><a href="single-blog.html">Skilled Nursing Care</a></h5>
                                </div>
                                <div class="featured-desc">
                                    <p>Our highly trained nurses (RN & LPN) not only perform skilled care interventions, but they also administer quality skilled medical care services: </p>
                                    <ul>
                                        <li>Disease Risk Assessment</li>
                                        <li>Post Surgery Care</li>
                                        <li>Tube Feeding</li>
                                    </ul>
                                    <a class="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline mb-5" href="#">READ MORE</a>
                                </div>
                            </div>
                        </div><!-- featured-imagebox end-->
                    </div>
                    <div class="col-md-3">
                        <!--featured-imagebox-->
                        <div class="featured-imagebox ttm-box-view-top-image box-shadow res-991-mb-30">
                            <div class="featured-thumbnail">
                                <img class="img-fluid" src="/assets/images/services/03.jpg" alt="">
                            </div>
                            <div class="featured-content featured-content-bottom">
                                <div class="featured-title">
                                    <h5><a href="single-blog.html">Hospice Support</a></h5>
                                </div>
                                <div class="featured-desc">
                                    <p>Our nurology hospital utilizes state-of-the-art technology and employs a team of true experts.</p>
                                    <ul>
                                        <li>Emotional Support</li>
                                        <li>Physical Support</li>
                                        <li>Spiritual Support</li>
                                    </ul>
                                    <a class="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline mb-5" href="#">READ MORE</a>
                                </div>
                            </div>
                        </div><!-- featured-imagebox end-->
                    </div>
                    <div class="col-md-3">
                        <!--featured-imagebox-->
                        <div class="featured-imagebox ttm-box-view-top-image box-shadow res-991-mb-30">
                            <div class="featured-thumbnail">
                                <img class="img-fluid" src="/assets/images/services/07.jpg" alt="">
                            </div>
                            <div class="featured-content featured-content-bottom">
                                <div class="featured-title">
                                    <h5><a href="single-blog.html">Pediatric Home Care</a></h5>
                                </div>
                                <div class="featured-desc">
                                    <p>Pediatric providers see patients from birth into early adulthood to make sure children achieve stay healthy. Our care includes preventive health checkups.</p>
                                    <ul>
                                        <li>Infusion therapy</li>
                                        <li>Family caregivers</li>
                                        <li>Comprehensive care plan management</li>
                                    </ul>
                                    <a class="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline mb-5" href="#">READ MORE</a>
                                </div>
                            </div>
                        </div><!-- featured-imagebox end-->
                    </div>
                </div>
             
            </div>
        </div>
        <!--quality-services-section end-->   




             <!--service-section-->
        <section class="ttm-row service-section ttm-bgcolor-grey clearfix">
            <div class="container">
                <!-- row -->
                <div class="row">
                       <div class="col-lg-9 col-md-12">
                        <!-- section-title -->
                        <div class="section-title with-desc clearfix">
                            <div class="title-header">
                                
                                <h2 class="title">ABC of Life Has Touched The Lives Of Patients & Providing Care for The Sickest In Our Community.</h2>
                            </div>
                            <div class="title-desc">ABC of Life Health Services is a licensed skilled healthcare organization established to offer 4 to 24 hours comprehensive and personalized health service for you or your loved one in the comfort of your home! We promise to tailor your needs with the appropriate Caregiver to guarantee your satisfaction.</div>
                        </div><!-- section-title end -->
                    </div>
                    <div class="col-lg-3 col-md-12">
                        <a class="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-border ttm-btn-color-black mb-30 mt-45 res-991-mt-0 float-right" href="#">OUR CORE VALUES</a>
                    </div>
                </div><!-- row end -->
                <div class="row">
                    <div class="col-lg-12">
                        <div class="row row-equal-height ttm-bgcolor-white ttm-box-seperator ttm-row-seperator box-shadow mt-20">
                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <!-- featured-icon-box -->
                                <div class="featured-icon-box top-icon featured-icon-hover">
                                    <div class="featured-icon">
                                        <div class="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                            <i class="flaticon-child"></i>
                                        </div>
                                    </div>
                                    <div class="featured-content">
                                        <div class="featured-title">
                                            <h5>Medical Advices & Check Ups</h5>
                                        </div>
                                        <!-- <div class="featured-desc">
                                            <p>Our paediatric services utilizes state technology and employs team of experts for paediatric.</p>
                                        </div> -->
                                    </div>
                                </div><!-- featured-icon-box end-->
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <!-- featured-icon-box -->
                                <div class="featured-icon-box top-icon featured-icon-hover">
                                    <div class="featured-icon">
                                        <div class="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                            <i class="flaticon-charity"></i>
                                        </div>
                                    </div>
                                    <div class="featured-content">
                                        <div class="featured-title">
                                            <h5>Trusted Medical Team</h5>
                                        </div>
                                        <!-- <div class="featured-desc">
                                            <p>We offer for severals services helps with yours neurological condition our patient services.</p>
                                        </div> -->
                                    </div>
                                </div><!-- featured-icon-box end-->
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <!-- featured-icon-box -->
                                <div class="featured-icon-box top-icon featured-icon-hover">
                                    <div class="featured-icon">
                                        <div class="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                            <i class="flaticon-heart-5"></i>
                                        </div>
                                    </div>
                                    <div class="featured-content">
                                        <div class="featured-title">
                                            <h5>Non Emergency Help Available 24/7</h5>
                                        </div>
                                        <!-- <div class="featured-desc">
                                            <p>Your heart is the best hands state-of-the-arts cardiovascu-lar of the cardiology institute.</p>
                                        </div> -->
                                    </div>
                                </div><!-- featured-icon-box end-->
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <!-- featured-icon-box -->
                                <div class="featured-icon-box top-icon featured-icon-hover">
                                    <div class="featured-icon">
                                        <div class="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                            <i class="flaticon-dentist"></i>
                                        </div>
                                    </div>
                                    <div class="featured-content">
                                        <div class="featured-title">
                                            <h5>Only Qualified Providers</h5>
                                        </div>
                                        <!-- <div class="featured-desc">
                                            <p>We offers a greats dental cares including cosmetic and an oral dental implant emergency care.</p>
                                        </div> -->
                                    </div>
                                </div><!-- featured-icon-box end-->
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <!-- featured-icon-box -->
                                <div class="featured-icon-box top-icon featured-icon-hover">
                                    <div class="featured-icon">
                                        <div class="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                            <i class="flaticon-walk"></i>
                                        </div>
                                    </div>
                                    <div class="featured-content">
                                        <div class="featured-title">
                                            <h5>Insurance and Self Pay Options</h5>
                                        </div>
                                        <!-- <div class="featured-desc">
                                            <p>Our endoscopic procedures is include is the bronchoscopys, thoracentesis,& tube insertion.</p>
                                        </div> -->
                                    </div>
                                </div><!-- featured-icon-box end-->
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <!-- featured-icon-box -->
                                <div class="featured-icon-box top-icon featured-icon-hover ">
                                    <div class="featured-icon ">
                                        <div class="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                            <i class="flaticon-microscope"></i>
                                        </div>
                                    </div>
                                    <div class="featured-content">
                                        <div class="featured-title ">
                                            <h5>Quality Care For Every Patient</h5>
                                        </div>
                                        <!-- <div class="featured-desc">
                                            <p>In an our laboratory, You pass wide a range of the tests that allows us to n diagnosis tests.</p>
                                        </div> -->
                                    </div>
                                </div><!-- featured-icon-box end-->
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--service-section end-->    


     
  <!--action-section-->
        <section class="ttm-row action-section bg-img5 ttm-bg ttm-bgimage-yes ttm-bgcolor-darkgrey clearfix">
            <div class="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="action-box text-center">
                            <div class="mb-20">
                                <h1 class="ttm-textcolor-white">Care Giver Professional Job Opportunities</h1>
                            </div>
                            <h3 class="ttm-textcolor-white font-weight-normal">ABC of Life Health Services is committed to providing you  employment opportunities where your skills and expertise are recognized.</h3>
                            <a class="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor mt-30" href="#">BECOME A  CAREGIVER</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--action-section end-->

        

        <!--cta-section-->
        <section class="ttm-row cta-section bg-img1 clearfix">
            <div class="container"><!--container-->
                <div class="row"><!--row-->
                    <div class="col-lg-7">
                        <div class="pt-100 row-title res-991-pt-50 res-991-pb-20">
                            <!-- section title -->
                            <div class="section-title with-desc clearfix">
                                <div class="title-header">
                                    <h5>Specialized health needs.</h5>
                                    <h2 class="title">Comprehensive Care for Your Specialized Health Needs.</h2>
                                </div>
                            </div><!-- section title end -->
                            <a class="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-border ttm-btn-color-black mr-15 mb-20" href="#">Explore Our Services</a>
                            <a class="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor mb-20" href="#">Contact Us for a Free Consultation</a>
                            <h4 class="pt-15 clearfix">OR <span class="ttm-textcolor-skincolor">CALL</span>:+1-301-575-4714</h4>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <!-- ttm_single_image-wrapper -->
                        <div class="ttm_single_image-wrapper">
                            <img class="img-fluid" src="/assets/images/single-img-two.png" alt="">
                        </div><!-- ttm_single_image-wrapper end -->
                    </div>
                </div>
            </div>
        </section>
        <!--cta-section end-->

 <section class="ttm-row testimonial-section bg-img2 ttm-bg ttm-bgimage-yes ttm-bgcolor-darkgrey">
            <div class="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
            <div class="container">
                <!-- row -->
                <div class="row">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-8 col-md-12">
                        <!-- section-title -->
                        <div class="section-title with-desc text-center clearfix">
                            <div class="title-header">
                                <h5>HAPPY CLIENTS</h5>
                                <h2 class="title">What Our Patients Are Saying</h2>
                            </div>
                        </div><!-- section-title end -->
                    </div>
                    <div class="col-lg-2"></div>
                </div><!-- row end -->
                <div class="row">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-10">
                        <swiper
                          :slides-per-view="1"
                          :space-between="0"
                          :loop="true"
                          :navigation="true"
                          :pagination="{ clickable: true }"
                          :autoplay="{ delay: 5000 }"
                          :modules="modules"
                        >
                          <swiper-slide>
                            <div class="testimonials"> 
                                <div class="testimonial-content">
                                    <div class="testimonial-avatar">
                                        <div class="testimonial-img">
                                            <img class="img-center" src="/assets/images/testimonial/01.jpg" alt="testimonial-img">
                                        </div>
                                    </div>
                                    <blockquote>ABC of Life Health Services provided exceptional care for my mother. The caregivers were compassionate, professional, and always went the extra mile to ensure her comfort and well-being. I highly recommend their services.</blockquote>
                                    <div class="star-ratings">
                                        <ul class="rating">
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                    <div class="testimonial-caption">
                                        <h5>Sarah Johnson</h5>
                                        <label>Daughter of a Patient</label>
                                    </div>
                                </div>
                            </div><!-- testimonials end -->
                          </swiper-slide>
                          <swiper-slide>
                            <div class="testimonials style2"> 
                                <div class="testimonial-content">
                                    <div class="testimonial-avatar">
                                        <div class="testimonial-img">
                                            <img class="img-center" src="/assets/images/testimonial/02.jpg" alt="testimonial-img">
                                        </div>
                                    </div>
                                    <blockquote>I am so grateful for the skilled nursing care I received from ABC of Life. The nurses were knowledgeable and attentive, and they helped me recover from my surgery much faster than I expected. Thank you for everything!</blockquote>
                                    <div class="star-ratings">
                                        <ul class="rating">
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                    <div class="testimonial-caption">
                                        <h5>Michael Williams</h5>
                                        <label>Patient</label>
                                    </div>
                                </div>
                            </div><!-- testimonials end -->
                          </swiper-slide>
                          <swiper-slide>
                            <div class="testimonials style2">
                                <div class="testimonial-content">
                                    <div class="testimonial-avatar">
                                        <div class="testimonial-img">
                                            <img class="img-center" src="/assets/images/testimonial/03.jpg" alt="testimonial-img">
                                        </div>
                                    </div>
                                    <blockquote>The pediatric home care team from ABC of Life was a lifesaver for our family. They provided our son with the specialized care he needed, and they were always there to answer our questions and provide support. We couldn't have done it without them.</blockquote>
                                    <div class="star-ratings">
                                        <ul class="rating">
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                    <div class="testimonial-caption">
                                        <h5>Emily Davis</h5>
                                        <label>Mother of a Patient</label>
                                    </div>
                                </div>
                            </div><!-- testimonials end -->
                          </swiper-slide>
                          <swiper-slide>
                            <div class="testimonials style2">
                                <div class="testimonial-content">
                                    <div class="testimonial-avatar">
                                        <div class="testimonial-img">
                                            <img class="img-center" src="/assets/images/testimonial/01.jpg" alt="testimonial-img">
                                        </div>
                                    </div>
                                    <blockquote>The team at ABC of Life is simply the best. They are professional, reliable, and truly care about their patients. I would recommend them to anyone in need of home healthcare services.</blockquote>
                                    <div class="star-ratings">
                                        <ul class="rating">
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                    <div class="testimonial-caption">
                                        <h5>John Smith</h5>
                                        <label>Patient</label>
                                    </div>
                                </div>
                            </div><!-- testimonials end -->
                          </swiper-slide>
                          <swiper-slide>
                            <div class="testimonials style2">
                                <div class="testimonial-content">
                                    <div class="testimonial-avatar">
                                        <div class="testimonial-img">
                                            <img class="img-center" src="/assets/images/testimonial/02.jpg" alt="testimonial-img">
                                        </div>
                                    </div>
                                    <blockquote>I was so impressed with the level of care my father received from ABC of Life. The nurses were so patient and kind, and they made a difficult time much easier for our family. Thank you for everything.</blockquote>
                                    <div class="star-ratings">
                                        <ul class="rating">
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                    <div class="testimonial-caption">
                                        <h5>Jane Doe</h5>
                                        <label>Daughter of a Patient</label>
                                    </div>
                                </div>
                            </div><!-- testimonials end -->
                          </swiper-slide>
                          <swiper-slide>
                            <div class="testimonials style2">
                                <div class="testimonial-content">
                                    <div class="testimonial-avatar">
                                        <div class="testimonial-img">
                                            <img class="img-center" src="/assets/images/testimonial/03.jpg" alt="testimonial-img">
                                        </div>
                                    </div>
                                    <blockquote>ABC of Life has been a godsend for our family. They have provided my son with the care he needs to thrive at home. We are so grateful for their support.</blockquote>
                                    <div class="star-ratings">
                                        <ul class="rating">
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                    <div class="testimonial-caption">
                                        <h5>The Williams Family</h5>
                                        <label>Family of a Patient</label>
                                    </div>
                                </div>
                            </div><!-- testimonials end -->
                          </swiper-slide>
                          <swiper-slide>
                            <div class="testimonials style2">
                                <div class="testimonial-content">
                                    <div class="testimonial-avatar">
                                        <div class="testimonial-img">
                                            <img class="img-center" src="/assets/images/testimonial/01.jpg" alt="testimonial-img">
                                        </div>
                                    </div>
                                    <blockquote>The caregivers from ABC of Life were not only professional but also incredibly kind and compassionate. They treated my father with dignity and respect, and we are so grateful for their support.</blockquote>
                                    <div class="star-ratings">
                                        <ul class="rating">
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                    <div class="testimonial-caption">
                                        <h5>David Chen</h5>
                                        <label>Son of a Patient</label>
                                    </div>
                                </div>
                            </div><!-- testimonials end -->
                          </swiper-slide>
                          <swiper-slide>
                            <div class="testimonials style2">
                                <div class="testimonial-content">
                                    <div class="testimonial-avatar">
                                        <div class="testimonial-img">
                                            <img class="img-center" src="/assets/images/testimonial/02.jpg" alt="testimonial-img">
                                        </div>
                                    </div>
                                    <blockquote>I was hesitant to have someone come into my home to provide care, but the team at ABC of Life made me feel comfortable and at ease. They are true professionals, and I am so grateful for their help.</blockquote>
                                    <div class="star-ratings">
                                        <ul class="rating">
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                    <div class="testimonial-caption">
                                        <h5>Maria Rodriguez</h5>
                                        <label>Patient</label>
                                    </div>
                                </div>
                            </div><!-- testimonials end -->
                          </swiper-slide>
                          <swiper-slide>
                            <div class="testimonials style2">
                                <div class="testimonial-content">
                                    <div class="testimonial-avatar">
                                        <div class="testimonial-img">
                                            <img class="img-center" src="/assets/images/testimonial/03.jpg" alt="testimonial-img">
                                        </div>
                                    </div>
                                    <blockquote>The physical therapists at ABC of Life are top-notch. They helped me regain my strength and mobility after my accident, and I am now able to live independently again. I can't thank them enough.</blockquote>
                                    <div class="star-ratings">
                                        <ul class="rating">
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                    <div class="testimonial-caption">
                                        <h5>James Wilson</h5>
                                        <label>Patient</label>
                                    </div>
                                </div>
                            </div><!-- testimonials end -->
                          </swiper-slide>
                        </swiper>
                    </div>
                    <div class="col-lg-1"></div>
                </div><!-- row end-->
            </div>
        </section>
        <!-- testimonial-section end-->

        <!-- multi-section -->
        <section class="ttm-row multi-section break-991-colum bg-img3 clearfix">
            <div class="container">
                <div class="row mt_190 res-1199-mlr-15 res-991-mt-50 box-shadow2 g-0">
                    <div class="col-md-5">
                        <!-- col-bg-img-three -->
                        <div class="col-bg-img-three ttm-bg ttm-col-bgimage-yes">
                            <div class="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                            <div class="layer-content">
                            </div>
                        </div><!-- col-bg-img-three end -->
                        <img src="/assets/images/bg-image/col-bgimage-3.jpg" class="ttm-equal-height-image" alt="bg-image">
                    </div>
                    <div class="col-md-7">
                        <div class="spacing-4 ttm-bgcolor-white">
                            <!-- section title -->
                            <div class="section-title with-desc text-center clearfix">
                                <div class="title-header">
                                    <h2 class="title">Make an Appointment</h2>
                                </div>
                                <div class="title-desc">Contact us any suitable way and make an appointment with the doctor whose help you need! Visit us at the scheduled time.</div>
                            </div><!-- section title end -->
                            <form id="ttm-make-appoint-form" class="ttm-make-appoint-form wrap-form mt_15 clearfix" method="post" action="#">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <label>
                                            <span class="text-input">
                                                <i class="ttm-textcolor-skincolor ti-user"></i>
                                                <input name="name" type="text" value="" placeholder="Full Name" required="required">
                                            </span>
                                        </label>
                                    </div>
                                    <div class="col-lg-6">
                                        <label>
                                            <span class="text-input">
                                                <i class="ttm-textcolor-skincolor ti-email"></i>
                                                <input name="address" type="text" value="" placeholder="Email Address" required="required">
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <label>
                                            <span class="text-input">
                                                <i class="ttm-textcolor-skincolor ti-mobile"></i>
                                                <input name="phone" type="text" value="" placeholder="Phone Number" required="required">
                                            </span>
                                        </label>
                                    </div>
                                    <div class="col-lg-6">
                                        <label>
                                            <span class="text-input">
                                                <i class="ttm-textcolor-skincolor ti-heart-broken"></i>
                                                <select><option value="">Select Department</option>
                                                        <option value="">Personal Care</option>
                                                        <option value="">Skilled Nursing Care</option>
                                                        <option value="">Hospice Support</option>
                                                        <option value="">Pediatric Home Care</option>
                                                </select>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <label>
                                            <span class="text-input">
                                                <i class="ttm-textcolor-skincolor ti-calendar"></i>
                                                <input name="phone" type="text" value="" placeholder="Appointment Date" required="required">
                                            </span>
                                        </label>
                                    </div>
                                    <div class="col-lg-6">
                                        <label>
                                            <span class="text-input">
                                                <i class="ttm-textcolor-skincolor ti-timer"></i>
                                                <input name="phone" type="text" value="" placeholder="Appointment Time" required="required">
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <input name="submit" type="submit" id="submit" class="submit" value="Request a Consultation">
                            </form>
                        </div>
                    </div>
                </div><!-- row end -->
                <!-- row -->
            
            </div>
        </section>
        <!-- multi-section end -->

               <!--services-section-->
        <div class="ttm-row services-section ttm-bgcolor-darkgrey bg-img5 ttm-bg ttm-bgimage-yes ttm-bgcolor-darkgrey clearfix">
            <div class="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
            <div class="container">
                <!-- row -->
                <div class="row">
                    <div class="col-lg-9 col-md-12">
                        <!-- section-title -->
                        <div class="section-title with-desc clearfix">
                            <div class="title-header">
                                <h5>Caring For The Health Of You And Your Family.</h5>
                                <h2 class="title">We Provide All Aspects of Home Health Care Services for You and Your Loved Ones!s</h2>
                            </div>
                            <div class="title-desc text-dark">We will work with you to develop individualized care plans, including management of chronic diseases. We treat all enquiries timely, sensitively and with the strictest confidence.</div>
                            <div class="title-desc text-dark">
                                <ul>
                                    <li>Med. Administration</li>
                                    <li>Tracheostomy Care</li>
                                    <li>IV Therapy</li>
                                    <li>Wound and Post Surgical Care</li>
                                    <li>NG Tube Feeding</li>
                                </ul>
                            </div>
                        </div><!-- section-title end -->
                    </div>
                    <div class="col-lg-3 col-md-12">
                        <a class="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-border ttm-btn-color-white mb-30 mt-45 res-991-mt-0 float-right" href="#">HEALTHCARE PROGRAMS</a>
                    </div>
                </div><!-- row end -->
                <div class="row">
                    <div class="col-lg-12">
                        <div class="mt-10">
                            <div class="row g-0">
                                <div class="col-md-3 col-sm-6">
                                    <!--featured-icon-box-->
                                    <div class="featured-icon-box style5">
                                        <div class="featured-content">
                                            <div class="featured-title">
                                                <h5>Skilled Services Trusted Medical Treatment</h5>
                                            </div>
                                            <div class="featured-desc">
                                                <ul>
                                                    <li>Oral, Intramuscular (IM) & Intravenous (IV) medical administration</li>
                                                    <li>Med. Administration</li>
                                                    <li>IV Therap</li>
                                                    <li>NG Tube Feeding</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="featured-icon">
                                            <div class="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                                <i class="flaticon-doctor-1"></i>
                                            </div>
                                        </div>
                                    </div><!-- featured-icon-box end-->
                                </div>
                                <div class="col-md-3 col-sm-6">
                                    <!--featured-icon-box-->
                                    <div class="featured-icon-box style5">
                                        <div class="featured-content">
                                            <div class="featured-title">
                                                <h5>Non-Skilled Services</h5>
                                            </div>
                                            <div class="featured-desc">
                                                <ul>
                                                    <li>Medication Reminders</li>
                                                    <li>Ambulation & Transfers</li>
                                                    <li>Range of Motion Exercises</li>
                                                    <li>Light House Keeping</li>
                                                    <li>Meal Preparation</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="featured-icon">
                                            <div class="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                                <i class="flaticon-first-aid-kit"></i>
                                            </div>
                                        </div>
                                    </div><!-- featured-icon-box end-->
                                </div>
                                <div class="col-md-3 col-sm-6">
                                    <!--featured-icon-box-->
                                    <div class="featured-icon-box style5">
                                        <div class="featured-content">
                                            <div class="featured-title">
                                                <h5>Pediatric Services</h5>
                                            </div>
                                            <div class="featured-desc">
                                                <ul>
                                                    <li>All skilled services and infusion therapy</li>
                                                    <li>Comprehensive Care Plan Management</li>
                                                    <li>Ongoing Family Caregiver trainings</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="featured-icon">
                                            <div class="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                                <i class="flaticon-patient-1"></i>
                                            </div>
                                        </div>
                                    </div><!-- featured-icon-box end-->
                                </div>
                                <div class="col-md-3 col-sm-6">
                                    <!--featured-icon-box-->
                                    <div class="featured-icon-box style5">
                                        <div class="featured-content">
                                            <div class="featured-title">
                                                <h5>Ask Us about:</h5>
                                            </div>
                                            <div class="featured-desc">
                                                <li>Physical Therapy</li>
                                                <li>Speech Therapy</li>
                                                <li>Occupational Therapy</li>
                                                <li>Respiratory Therapy</li>
                                            </div>
                                        </div>
                                        <div class="featured-icon">
                                            <div class="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                                <i class="flaticon-orthopedics"></i>
                                            </div>
                                        </div>
                                    </div><!-- featured-icon-box end-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
        <!--services-section end-->     




        </div><!--site-main end-->
    </div>
</template>

<script>
import Hero from '../components/Hero.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { ref } from 'vue';
import AnimatedNumber from 'vue-animated-number';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default {
  name: 'HomePage',
  components: {
    Hero,
    Swiper,
    SwiperSlide,
    AnimatedNumber,
  },
  setup() {
    const formatValue = (value) => value.toFixed(0);
    const modules = [Navigation, Pagination, Autoplay];
    return {
      formatValue,
      modules,
    };
  },
};
</script>

<style scoped>
</style>