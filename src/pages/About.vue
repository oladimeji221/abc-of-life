<template>
  <InnerHeader title="About Us" subtitle="About Our Hospital" />

    <!--site-main start-->
    <div class="site-main">

        <!--introduction-section-->
        <section class="ttm-row introduction-section break-1199-colum clearfix">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-sm-12">
                        <!-- col-bg-img-two -->
                        <div class="col-bg-img-two ttm-col-bgimage-yes ttm-bg res-1199-ptb-200 ttm-reset-content-center-1199">
                            <div class="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                            <div class="layer-content">
                                <!-- <div class="ttm-video-icon ttm-left-video-icon text-end mt_30 mr_40 res-1199-mr-0">
                                    <div class="ttm-icon ttm-icon_element-fill ttm-icon_element-color-white ttm-icon_element-background-skincolor ttm-icon_element-size-md ttm-icon_element-style-rounded">
                                        <i class="fa fa-play"></i>
                                    </div>
                                </div> -->
                            </div>
                        </div><!-- col-bg-img-two end-->
                    </div>
                    <div class="col-lg-7 col-sm-12">
                        <div class="pl-60 pb-20 res-1199-pl-0 res-1199-pt-40 res-1199-pb-0">
                            <!-- section title -->
                            <div class="section-title clearfix">
                                <div class="title-header">
                                    <h5>INTRODUCING</h5>
                                    <h2 class="title">Improving The Quality Of Your Life Through Better Health.</h2>
                                </div>
                            </div><!-- section title end -->
                            <div class="mb-30 clearfix">
                                <p>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and to be the first and best choice for healthcare.</p>
                                <p>We will work with you to develop individualised care plans, including management of chronic diseases. We are committed to being the region’s premier healthcare network providing patient centered care that inspires clinical and service excellence.

                                </p>
                            </div>
                         
                            <div class="sep_holder_box pt-25 mb-45 res-991-mb-20">
                                <span class="sep_holder"><span class="sep_line"></span></span>
                            </div>
                            <div class="row">
                                <div class="col-md-4 col-sm-12">
                                    <!--featured-icon-box-->
                                    <div class="featured-icon-box icon-box-heading-only left-icon">
                                        <div class="featured-icon">
                                            <div class="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-md"> 
                                                <i class="fa fa-calendar"></i>
                                            </div>
                                        </div>
                                        <div class="featured-content">
                                            <div class="featured-title">
                                                <h5>Online Appointment!</h5>
                                            </div>
                                        </div>
                                    </div><!-- featured-icon-box end-->
                                </div>
                                <div class="col-md-4 col-sm-12">
                                    <!--featured-icon-box-->
                                    <div class="featured-icon-box icon-box-heading-only left-icon">
                                        <div class="featured-icon">
                                            <div class="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-md"> 
                                                <i class="fa fa-map-marker"></i>
                                            </div>
                                        </div>
                                        <div class="featured-content">
                                            <div class="featured-title">
                                                <h5>Available at Your Location</h5>
                                            </div>
                                        </div>
                                    </div><!-- featured-icon-box end-->
                                </div>
                                <div class="col-md-4 col-sm-12">
                                    <!--featured-icon-box-->
                                    <div class="featured-icon-box icon-box-heading-only left-icon">
                                        <div class="featured-icon">
                                            <div class="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-md"> 
                                                <i class="fa fa-clock-o"></i>
                                            </div>
                                        </div>
                                        <div class="featured-content">
                                            <div class="featured-title">
                                                <h5>Work Improvements</h5>
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
        <!--introduction-section end-->


       
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
        <section class="ttm-row multi-section break-991-colum clearfix">
            <div class="container">
                <div class="row mt_190 res-1199-mlr-15 res-991-mt-50 box-shadow2 g-0">
                    <div class="col-md-5">
                        <!-- col-bg-img-three -->
                        <div class="col-bg-img-three ttm-bg ttm-col-bgimage-yes">
                            <div class="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                            
                        </div><!-- col-bg-img-three end -->
                    </div>
                    <div class="col-md-7">
                        <div class="spacing-7 ttm-bgcolor-white">
                            <!-- section title -->
                            <div class="section-title with-desc clearfix">
                                <div class="title-header">
                                    <h2 class="title">What We Do!</h2>
                                </div>
                                <div class="title-desc">We provide comprehensive, personalized home healthcare services, from 4 to 24 hours a day, for both adults and children. Our
  services range from skilled nursing, personal care, and hospice support to specialized therapies like physical, occupational,
  and speech therapy. We are dedicated to improving the quality of life for our patients by delivering expert care in the comfort
   of their own homes</div>
                            </div><!-- section title end -->
                            <div class="row mt_20">
                                
                                <div class="col-md-12">
                                    <!-- featured-icon-box -->
                                    <div class="featured-icon-box res-767-pt-15">
                                        <div class="featured-content">
                                            <div class="featured-title">
                                                <h5>Our Mission</h5>
                                            </div>
                                            <div class="featured-desc">
                                                <p>To deliver the highest quality of home healthcare in a courteous, respectful, and compassionate manner. We work closely with
  patients, their families, and their medical providers to develop individualized care plans that meet their unique needs, manage
   chronic conditions, and promote overall well-being</p>
                                            </div>
                                        </div>
                                    </div><!-- featured-icon-box end-->
                                </div>
                            </div>
                            <div class="row pt-30">
                                
                                <div class="col-md-12">
                                    <!-- featured-icon-box -->
                                    <div class="featured-icon-box res-767-pt-15">
                                        <div class="featured-content">
                                            <div class="featured-title">
                                                <h5>Our Vision</h5>
                                            </div>
                                            <div class="featured-desc">
                                                <p>To be the region’s premier and most trusted home healthcare network, recognized for clinical and service excellence. We
  strive to be the first and best choice for patients, families, and our community by enhancing well-being and improving quality
  of life through exceptional home-based health services.</p>
                                            </div>
                                        </div>
                                    </div><!-- featured-icon-box end-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- row end -->
                <!-- row -->

                
             
              
            </div>
        </section>
        <!--multi-section end-->

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
                                <h2 class="title">We Provide All Aspects Of Home Healthcare services For Your Whole Family!</h2>
                            </div>
                            <div class="title-desc text-dark">We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</div>
                        </div><!-- section-title end -->
                    </div>
                    <!-- <div class="col-lg-3 col-md-12">
                        <a class="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-border ttm-btn-color-white mb-30 mt-45 res-991-mt-0 float-right" href="#">MORE SERVICES</a>
                    </div> -->
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
                                                <h5>Fill In Our Medical Application</h5>
                                            </div>
                                            <div class="featured-desc">
                                                <p>ABC of life offers low-cost home health care for adults with limited income.</p>
                                            </div>
                                        </div>
                                        <div class="featured-icon">
                                            <div class="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g data-name="Hearth report"><path d="m50 8h-8.184a3 3 0 0 0 -2.816-2h-1.43a.95.95 0 0 1 -.861-.684 5 5 0 0 0 -9.418 0 .952.952 0 0 1 -.861.684h-1.43a3 3 0 0 0 -2.816 2h-8.184a5.006 5.006 0 0 0 -5 5v44a5.006 5.006 0 0 0 5 5h36a5.006 5.006 0 0 0 5-5v-44a5.006 5.006 0 0 0 -5-5zm-26 1a1 1 0 0 1 1-1h1.43a2.924 2.924 0 0 0 2.744-2.011 3 3 0 0 1 5.652 0 2.926 2.926 0 0 0 2.744 2.011h1.43a1 1 0 0 1 1 1v3h-16zm-9 1h7v4h20v-4h7v46h-27v-8h-7zm5 40v4.339l-3.8-4.339zm33 7a3 3 0 0 1 -3 3h-36a3 3 0 0 1 -3-3v-44a3 3 0 0 1 2-2.816v39.192l7.546 8.624h30.454v-47.816a3 3 0 0 1 2 2.816z"></path><path d="m31 22h2v-2h2v-2h-2v-2h-2v2h-2v2h2z"></path><path d="m19 30h26v-6h-26zm2-4h22v2h-22z"></path><path d="m21 32h2v2h-2z"></path><path d="m25 32h18v2h-18z"></path><path d="m21 36h2v2h-2z"></path><path d="m25 36h18v2h-18z"></path><path d="m21 40h2v2h-2z"></path><path d="m25 40h18v2h-18z"></path><path d="m25 54h18v-8h-18zm2-6h14v4h-14z"></path></g></svg> 
                                            </div>
                                        </div>
                                        <a class="ttm-btn ttm-btn-size-sm ttm-btn-color-white btn-inline mb-20" href="#">Caregivers Timetable ></a>
                                    </div><!-- featured-icon-box end-->
                                </div>
                                <div class="col-md-3 col-sm-6">
                                    <!--featured-icon-box-->
                                    <div class="featured-icon-box style5">
                                        <div class="featured-content">
                                            <div class="featured-title">
                                                <h5>Review Your Family Medical History</h5>
                                            </div>
                                            <div class="featured-desc">
                                                <p>Regular health assessment can help dictate new medical condition</p>
                                            </div>
                                        </div>
                                        <div class="featured-icon">
                                            <div class="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g><path d="M28,2H18V4h7.9a19.921,19.921,0,0,1-.778,4H20v2h4.375c-1.628,3.622-4.324,6-7.375,6s-5.747-2.378-7.375-6H18V8H8.881A19.921,19.921,0,0,1,8.1,4H16V2H6c0,6.882,3.009,12.746,7.209,15C9.009,19.254,6,25.118,6,32s3.009,12.746,7.209,15C9.009,49.254,6,55.118,6,62H16V60H8.1a19.921,19.921,0,0,1,.778-4H12V54H9.625c1.628-3.622,4.324-6,7.375-6s5.747,2.378,7.375,6H18v2h7.119a19.921,19.921,0,0,1,.778,4H18v2H28c0-6.882-3.009-12.746-7.209-15C24.991,44.746,28,38.882,28,32s-3.009-12.746-7.209-15C24.991,14.746,28,8.882,28,2ZM24.782,25H18v2h7.4a20.6,20.6,0,0,1,.571,4H18v2h7.967a20.6,20.6,0,0,1-.571,4H20v2h4.782c-1.559,4.177-4.459,7-7.782,7s-6.223-2.823-7.782-7H18V37H8.6a20.6,20.6,0,0,1-.571-4H16V31H8.033A20.6,20.6,0,0,1,8.6,27H12V25H9.218c1.559-4.177,4.459-7,7.782-7S23.223,20.823,24.782,25Z"></path><rect x="14" y="25" width="2" height="2"></rect><rect x="14" y="54" width="2" height="2"></rect><path d="M58,32c0-6.882-3.009-12.746-7.209-15C54.991,14.746,58,8.882,58,2H56c0,.681-.042,1.345-.1,2H45V6H55.621a18.1,18.1,0,0,1-1.246,4H50v2h3.287c-1.624,2.47-3.842,4-6.287,4s-4.663-1.53-6.287-4H48V10H39.625a18.1,18.1,0,0,1-1.246-4H43V4H38.1c-.061-.655-.1-1.319-.1-2H36c0,6.882,3.009,12.746,7.209,15C39.009,19.254,36,25.118,36,32s3.009,12.746,7.209,15C39.009,49.254,36,55.118,36,62h2c0-.681.042-1.345.1-2H50V58H38.379a18.1,18.1,0,0,1,1.246-4H42V52H40.713c1.624-2.47,3.842-4,6.287-4s4.663,1.53,6.287,4H48v2h6.375a18.1,18.1,0,0,1,1.246,4H52v2h3.9c.061.655.1,1.319.1,2h2c0-6.882-3.009-12.746-7.209-15C54.991,44.746,58,38.882,58,32ZM47,46c-2.445,0-4.663-1.53-6.287-4H44V40H39.625a18.1,18.1,0,0,1-1.246-4H48V34H38.1c-.061-.655-.1-1.319-.1-2s.042-1.345.1-2H42V28H38.379a18.1,18.1,0,0,1,1.246-4H48V22H40.713c1.624-2.47,3.842-4,6.287-4s4.663,1.53,6.287,4H50v2h4.375a18.1,18.1,0,0,1,1.246,4H48v2h7.9c.061.655.1,1.319.1,2s-.042,1.345-.1,2H50v2h5.621a18.1,18.1,0,0,1-1.246,4H46v2h7.287C51.663,44.47,49.445,46,47,46Z"></path><rect x="44" y="28" width="2" height="2"></rect><rect x="44" y="52" width="2" height="2"></rect></g></svg>
                                            </div>
                                        </div>
                                        <a class="ttm-btn ttm-btn-size-sm ttm-btn-color-white btn-inline mb-20" href="#">Start A Check Up ></a>
                                    </div><!-- featured-icon-box end-->
                                </div>
                                <div class="col-md-3 col-sm-6">
                                    <!--featured-icon-box-->
                                    <div class="featured-icon-box style5">
                                        <div class="featured-content">
                                            <div class="featured-title">
                                                <h5>Choose Between Our Care Programs</h5>
                                            </div>
                                            <div class="featured-desc">
                                                <p>We have protocols to protect our patients while continuing to provide necessary care.</p>
                                            </div>
                                        </div>
                                        <div class="featured-icon">
                                            <div class="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g><path d="M29.118,18.555A3.1,3.1,0,0,1,27,15.687V14h3V5a3,3,0,0,0-3-3H15a3,3,0,0,0-3,3v9h3v1.687a3.1,3.1,0,0,1-2.118,2.868A9.034,9.034,0,0,0,7,27V62H35V27A9.034,9.034,0,0,0,29.118,18.555ZM14,5a1,1,0,0,1,1-1H27a1,1,0,0,1,1,1V8H14Zm0,7V10H28v2ZM33,32H17V54H28V52H19V34H33v2H26v2h7v2H26v2h7v2H21v2H33v2H21v2H33v2H30v2h3v6H9V27a7.025,7.025,0,0,1,4.575-6.569A5.074,5.074,0,0,0,17,15.687V14h8v1.687a5.074,5.074,0,0,0,3.425,4.744A7.025,7.025,0,0,1,33,27Z"></path><path d="M11,27h2a3.012,3.012,0,0,1,1.959-2.816l-.692-1.876A5.017,5.017,0,0,0,11,27Z"></path><rect x="11" y="29" width="2" height="28"></rect><path d="M56,15c0-4.566-3.711-13-9-13s-9,8.434-9,13a12.761,12.761,0,0,0,4.332,9.165,4.886,4.886,0,0,1,1.694,4.227L41.464,55.927a5.56,5.56,0,1,0,11.072,0L49.974,28.392a4.886,4.886,0,0,1,1.694-4.227h0A12.761,12.761,0,0,0,56,15Zm-5.61,7.627h0a6.883,6.883,0,0,0-2.406,5.951l2.561,27.535a3.559,3.559,0,1,1-7.088,0l2.561-27.535a6.881,6.881,0,0,0-2.407-5.951A10.626,10.626,0,0,1,40,15c0-4.138,3.391-11,7-11s7,6.862,7,11A10.626,10.626,0,0,1,50.39,22.627Z"></path><path d="M44,15a13.632,13.632,0,0,1,1.827-5.491L44.106,8.491A15.16,15.16,0,0,0,42,15a8.742,8.742,0,0,0,2.89,6.09l1.279-1.538A6.742,6.742,0,0,1,44,15Z"></path></g></svg>
                                            </div>
                                        </div>
                                        <a class="ttm-btn ttm-btn-size-sm ttm-btn-color-white btn-inline mb-20" href="#">Explore Programs ></a>
                                    </div><!-- featured-icon-box end-->
                                </div>
                                <div class="col-md-3 col-sm-6">
                                    <!--featured-icon-box-->
                                    <div class="featured-icon-box style5">
                                        <div class="featured-content">
                                            <div class="featured-title">
                                                <h5>Introduce to Highly Qualified Caregivers and Nursing staff </h5>
                                            </div>
                                            <div class="featured-desc">
                                                <p>Our administration and support staff have exceptional skills  to assist you.</p>
                                            </div>
                                        </div>
                                        <div class="featured-icon">
                                            <div class="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g><path d="M46,40H33V32.949A13.008,13.008,0,0,0,45,20V18a3,3,0,0,0-2-2.816V7a3,3,0,0,0-3-3,2,2,0,0,0-2-2,3,3,0,0,0,0,6,2,2,0,0,0,2-2,1,1,0,0,1,1,1v8.184A3,3,0,0,0,39,18v2a7.027,7.027,0,0,1-2.223,5.111,6.937,6.937,0,0,1-5.258,1.873A7.168,7.168,0,0,1,25,19.717V18a3,3,0,0,0-2-2.816V7a1,1,0,0,1,1-1,2,2,0,0,0,2,2,3,3,0,0,0,0-6,2,2,0,0,0-2,2,3,3,0,0,0-3,3v8.184A3,3,0,0,0,19,18v2A13.008,13.008,0,0,0,31,32.949V40H18.91a6,6,0,1,0,0,2H31v8A12.013,12.013,0,0,0,43,62h3a11,11,0,0,0,0-22ZM38,6a1,1,0,0,1,0-2V6ZM26,4a1,1,0,0,1,0,2ZM13,45a4,4,0,1,1,4-4A4,4,0,0,1,13,45Zm8-25V18a1,1,0,0,1,2,0v1.717a9.172,9.172,0,0,0,8.386,9.262,8.933,8.933,0,0,0,6.758-2.407A9.033,9.033,0,0,0,41,20V18a1,1,0,0,1,2,0v2a11,11,0,0,1-22,0ZM46,60H43A10.011,10.011,0,0,1,33,50V42H46a9,9,0,0,1,0,18Z"></path><circle cx="13" cy="41" r="2"></circle></g></svg>                                            </div>
                                        </div>
                                        <a class="ttm-btn ttm-btn-size-sm ttm-btn-color-white btn-inline mb-20" href="#">Meet Out Doctors ></a>
                                    </div><!-- featured-icon-box end-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>

    </div><!--site-main end-->


</template>

<script setup>
import InnerHeader from '../components/InnerHeader.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const modules = [Navigation, Pagination, Autoplay];
</script>