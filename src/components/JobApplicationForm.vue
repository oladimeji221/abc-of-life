<template>
  <div class="container my-5 py-5">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <h2 class="text-center">Job Application Form</h2>
      </div>
      <div class="col-md-12">
        <div class="progress my-3">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            :style="{ width: (step / 8) * 100 + '%' }"
            :aria-valuenow="(step / 8) * 100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Step {{ step }} of 8
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <!-- Step 1: Position & Availability -->
            <div v-if="step === 1">
              <h5 class="card-title">Step 1: Position & Availability</h5>
              <hr />
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label
                    for="position_applied_for"
                    class="form-label d-block fw-bold text-dark"
                    >Position Applied For</label
                  >
                  <select
                    class="form-control"
                    id="position_applied_for"
                    v-model="formData.position_applied_for"
                  >
                    <option value="">Select Position</option>
                    <option value="Healthcare Assistant">Healthcare Assistant</option>
                    <option value="Senior Carer">Senior Carer</option>
                    <option value="Registered Nurse">Registered Nurse</option>
                  </select>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="location" class="form-label fw-bold text-dark"
                    >Location</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="location"
                    v-model="formData.location"
                    placeholder="Enter your location"
                  />
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label fw-bold text-dark">Work Preference</label>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="work_preference"
                    id="full_time"
                    value="Full Time"
                    v-model="formData.work_preference"
                  />
                  <label class="form-check-label" for="full_time">Full Time</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="work_preference"
                    id="part_time"
                    value="Part Time"
                    v-model="formData.work_preference"
                  />
                  <label class="form-check-label" for="part_time">Part Time</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="work_preference"
                    id="bank"
                    value="Bank"
                    v-model="formData.work_preference"
                  />
                  <label class="form-check-label" for="bank">Bank</label>
                </div>
              </div>
              <div class="mb-3">
                <label for="hours_requested" class="form-label fw-bold text-dark"
                  >Hours Requested</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="hours_requested"
                  v-model="formData.hours_requested"
                  placeholder="Enter hours requested"
                />
              </div>
              <div class="mb-3">
                <label class="form-label fw-bold text-dark"
                  >I understand this role may include: Shift work, Unsociable
                  Hours, Lone working involved.</label
                >
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="understands_role"
                    id="understands_role_yes"
                    value="Yes"
                    v-model="formData.understands_role"
                  />
                  <label class="form-check-label" for="understands_role_yes"
                    >Yes</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="understands_role"
                    id="understands_role_no"
                    value="No"
                    v-model="formData.understands_role"
                  />
                  <label class="form-check-label" for="understands_role_no"
                    >No</label
                  >
                </div>
              </div>

              <label class="form-label fw-bold text-dark"
                >Please indicate your availability:</label
              >
              <div class="table-responsive">
                <table class="table table-bordered text-center">
                  <thead>
                    <tr>
                      <th>Day</th>
                      <th>AM</th>
                      <th>PM</th>
                      <th>Evening</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="day in [
                        'Monday',
                        'Tuesday',
                        'Wednesday',
                        'Thursday',
                        'Friday',
                        'Saturday',
                        'Sunday',
                      ]"
                      :key="day"
                    >
                      <td>{{ day }}</td>
                      <td>
                        <input
                          type="checkbox"
                          v-model="formData.availability[day.toLowerCase()].am"
                        />
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          v-model="formData.availability[day.toLowerCase()].pm"
                        />
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          v-model="formData.availability[day.toLowerCase()].evening"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="d-flex justify-content-between flex-column flex-sm-row mt-3">
                <button @click="nextStep" class="btn btn-primary rounded-pill w-100 w-sm-auto">Next</button>
              </div>
            </div>

            <!-- Step 2: Personal Details -->
            <div v-else-if="step === 2">
                <h5 class="card-title">Step 2: Personal Details</h5>
                <hr>
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="firstname" class="form-label fw-bold text-dark">First Names</label>
                        <input type="text" class="form-control" id="firstname" v-model="formData.firstname" placeholder="Enter your first name(s)">
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="surname" class="form-label fw-bold text-dark">Surname</label>
                        <input type="text" class="form-control form-control-lg" id="surname" v-model="formData.surname" placeholder="Enter your surname">
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="maiden_name" class="form-label fw-bold text-dark">Maiden Name</label>
                        <input type="text" class="form-control" id="maiden_name" v-model="formData.maiden_name" placeholder="Enter your maiden name">
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="previous_names" class="form-label fw-bold text-dark">Previous Names</label>
                        <input type="text" class="form-control" id="previous_names" v-model="formData.previous_names" placeholder="Enter your previous names">
                    </div>
                </div>
                <div class="mb-3">
                    <label for="address" class="form-label fw-bold text-dark">Address</label>
                    <textarea class="form-control" id="address" v-model="formData.address" placeholder="Enter your full address"></textarea>
                </div>
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="postcode" class="form-label fw-bold text-dark">Postcode</label>
                        <input type="text" class="form-control" id="postcode" v-model="formData.postcode" placeholder="Enter your postcode">
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="your_email" class="form-label fw-bold text-dark">Email Address</label>
                        <input type="email" class="form-control" id="your_email" v-model="formData.your_email" placeholder="Enter your email address">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="telephone_number" class="form-label fw-bold text-dark">Telephone Number</label>
                        <input type="text" class="form-control" id="telephone_number" v-model="formData.telephone_number" placeholder="Enter your telephone number">
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="mobile_number" class="form-label fw-bold text-dark">Mobile Number</label>
                        <input type="text" class="form-control" v-model="formData.mobile_number" placeholder="Enter your mobile number">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="ni_number" class="form-label fw-bold text-dark">NI Number</label>
                        <input type="text" class="form-control" id="ni_number" v-model="formData.ni_number" placeholder="Enter your NI number">
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="gender" class="form-label d-block fw-bold text-dark">Gender*</label>
                        <select class="form-control" id="gender" v-model="formData.gender">
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        <small class="form-text text-muted">*Only compulsory if required for the role</small>
                    </div>
                </div>
                <div class="d-flex justify-content-between flex-column flex-sm-row mt-3">
                    <button @click="previousStep" class="btn btn-secondary rounded-pill w-100 w-sm-auto mb-2 mb-sm-0 me-sm-2">Previous</button>
                    <button @click="nextStep" class="btn btn-primary rounded-pill w-100 w-sm-auto">Next</button>
                </div>
            </div>

            <!-- Step 3: Driving, Right to Work & Equality -->
            <div v-else-if="step === 3">
                <h5 class="card-title">Step 3: Driving, Right to Work & Equality</h5>
                <hr>
                <h6>Driving Information</h6>
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label class="form-label fw-bold text-dark">Are you a Driver?</label>
                        <div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="is_driver" id="is_driver_yes" value="Yes" v-model="formData.is_driver">
                                <label class="form-check-label" for="is_driver_yes">Yes</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="is_driver" id="is_driver_no" value="No" v-model="formData.is_driver">
                                <label class="form-check-label" for="is_driver_no">No</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label class="form-label fw-bold text-dark">Own Transport?</label>
                        <div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="own_transport" id="own_transport_yes" value="Yes" v-model="formData.own_transport">
                                <label class="form-check-label" for="own_transport_yes">Yes</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="own_transport" id="own_transport_no" value="No" v-model="formData.own_transport">
                                <label class="form-check-label" for="own_transport_no">No</label>
                            </div>
                                <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="own_transport" id="own_transport_na" value="N/A" v-model="formData.own_transport">
                                <label class="form-check-label" for="own_transport_na">N/A</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="licence_duration" class="form-label fw-bold text-dark">How long have you had a licence?</label>
                    <input type="text" class="form-control" id="licence_duration" v-model="formData.licence_duration" placeholder="e.g. 5 years">
                </div>
                <div class="mb-3">
                    <label class="form-label fw-bold text-dark">Any Endorsements?</label>
                    <div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="endorsements" id="endorsements_yes" value="Yes" v-model="formData.endorsements">
                            <label class="form-check-label" for="endorsements_yes">Yes</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="endorsements" id="endorsements_no" value="No" v-model="formData.endorsements">
                            <label class="form-check-label" for="endorsements_no">No</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="endorsements" id="endorsements_na" value="N/A" v-model="formData.endorsements">
                            <label class="form-check-label" for="endorsements_na">N/A</label>
                        </div>
                    </div>
                </div>

                <hr>
                <h6>Immigration & Equality</h6>
                    <div class="mb-3">
                    <label class="form-label fw-bold text-dark">Are you a United Kingdom (UK) National?</label>
                    <div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="uk_national" id="uk_national_yes" value="Yes" v-model="formData.uk_national">
                            <label class="form-check-label" for="uk_national_yes">Yes</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="uk_national" id="uk_national_no" value="No" v-model="formData.uk_national">
                            <label class="form-check-label" for="uk_national_no">No</label>
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="visa_details" class="form-label fw-bold text-dark">If no, please detail your current immigration status and the relevant visa currently held (including Visa number)</label>
                    <textarea class="form-control" id="visa_details" v-model="formData.visa_details" placeholder="Enter your visa details"></textarea>
                </div>
                    <div class="mb-3">
                    <label class="form-label fw-bold text-dark">Are you related to any of our current members of staff or Service Users?</label>
                    <div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="is_related" id="is_related_yes" value="Yes" v-model="formData.is_related">
                            <label class="form-check-label" for="is_related_yes">Yes</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="is_related" id="is_related_no" value="No" v-model="formData.is_related">
                            <label class="form-check-label" for="is_related_no">No</label>
                        </div>
                    </div>
                </div>
                    <div class="mb-3">
                    <label for="reasonable_adjustments" class="form-label fw-bold text-dark">Under the Equality Act 2010, is there anything you would like us to be aware of so that we can make reasonable adjustments during the process?</label>
                    <textarea class="form-control" id="reasonable_adjustments" v-model="formData.reasonable_adjustments" placeholder="Enter details here"></textarea>
                </div>
                <div class="d-flex justify-content-between flex-column flex-sm-row mt-3">
                    <button @click="previousStep" class="btn btn-secondary rounded-pill w-100 w-sm-auto mb-2 mb-sm-0 me-sm-2">Previous</button>
                    <button @click="nextStep" class="btn btn-primary rounded-pill w-100 w-sm-auto">Next</button>
                </div>
            </div>

            <!-- Step 4: Education & Training -->
            <div v-else-if="step === 4">
                <h5 class="card-title">Step 4: Education & Training</h5>
                <hr>
                <h6>Education</h6>
                <p><small>All qualifications will be subject to a satisfactory check</small></p>
                <div class="border p-3 mb-3">
                    <div class="mb-3">
                        <label class="form-label fw-bold text-dark">School / College / University</label>
                        <input type="text" class="form-control" v-model="formData.education[0].institution" placeholder="Enter institution name">
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label class="form-label fw-bold text-dark">Date From</label>
                            <input type="date" class="form-control" v-model="formData.education[0].from_date">
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label fw-bold text-dark">Date To</label>
                            <input type="date" class="form-control" v-model="formData.education[0].to_date">
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-bold text-dark">Examinations, Qualifications</label>
                        <textarea class="form-control" v-model="formData.education[0].qualifications" placeholder="Enter qualifications"></textarea>
                    </div>
                </div>

                <h6 class="mt-4">Training Courses</h6>
                    <p><small>Evidence of attending courses is required</small></p>
                <div class="border p-3 mb-3">
                    <div class="mb-3">
                        <label class="form-label fw-bold text-dark">Subject</label>
                        <input type="text" class="form-control" v-model="formData.training[0].subject" placeholder="Enter subject">
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label class="form-label fw-bold text-dark">Location</label>
                            <input type="text" class="form-control" v-model="formData.training[0].location" placeholder="Enter location">
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label fw-bold text-dark">Date</label>
                            <input type="date" class="form-control" v-model="formData.training[0].date">
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-bold text-dark">Details</label>
                        <textarea class="form-control" v-model="formData.training[0].details" placeholder="Enter details"></textarea>
                    </div>
                </div>
                <div class="d-flex justify-content-between flex-column flex-sm-row mt-3">
                    <button @click="previousStep" class="btn btn-secondary rounded-pill w-100 w-sm-auto mb-2 mb-sm-0 me-sm-2">Previous</button>
                    <button @click="nextStep" class="btn btn-primary rounded-pill w-100 w-sm-auto">Next</button>
                </div>
            </div>

            <!-- Step 5: Professional Memberships -->
            <div v-else-if="step === 5">
                <h5 class="card-title">Step 5: Professional Memberships / Registrations</h5>
                <hr>
                <div class="border p-3 mb-3">
                    <div class="mb-3">
                        <label class="form-label fw-bold text-dark">Name of Organisation</label>
                        <input type="text" class="form-control" v-model="formData.memberships[0].organisation" placeholder="Enter organisation name">
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label class="form-label fw-bold text-dark">Registration Number</label>
                            <input type="text" class="form-control" v-model="formData.memberships[0].reg_number" placeholder="Enter registration number">
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label fw-bold text-dark">Renewal Date</label>
                            <input type="date" class="form-control" v-model="formData.memberships[0].renewal_date">
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-bold text-dark">Details</label>
                        <textarea class="form-control" v-model="formData.memberships[0].details" placeholder="Enter details"></textarea>
                    </div>
                </div>

                <div class="d-flex justify-content-between flex-column flex-sm-row mt-3">
                    <button @click="previousStep" class="btn btn-secondary rounded-pill w-100 w-sm-auto mb-2 mb-sm-0 me-sm-2">Previous</button>
                    <button @click="nextStep" class="btn btn-primary rounded-pill w-100 w-sm-auto">Next</button>
                </div>
            </div>

            <!-- Step 6: Employment History -->
            <div v-else-if="step === 6">
                <h5 class="card-title">Step 6: Employment History</h5>
                <hr>
                <p><small>Please record your full employment history, beginning with your current or most recent. Any gaps must be explained.</small></p>
                
                <h6>Current / Most recent employer</h6>
                <div class="border p-3 mb-3">
                    <div class="row">
                        <div class="col-md-4 mb-3"><label class="fw-bold text-dark">Start Date</label><input type="date" class="form-control" v-model="formData.employment.current.start_date"></div>
                        <div class="col-md-4 mb-3"><label class="fw-bold text-dark">End Date</label><input type="date" class="form-control" v-model="formData.employment.current.end_date"></div>
                        <div class="col-md-4 mb-3"><label class="fw-bold text-dark">Salary</label><input type="text" class="form-control" v-model="formData.employment.current.salary" placeholder="Enter salary"></div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3"><label class="fw-bold text-dark">Job Role</label><input type="text" class="form-control" v-model="formData.employment.current.job_role" placeholder="Enter job role"></div>
                        <div class="col-md-6 mb-3"><label class="fw-bold text-dark">Employer Name</label><input type="text" class="form-control" v-model="formData.employment.current.employer_name" placeholder="Enter employer name"></div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3"><label class="fw-bold text-dark">Reason for Leaving</label><input type="text" class="form-control" v-model="formData.employment.current.reason_for_leaving" placeholder="Enter reason for leaving"></div>
                        <div class="col-md-6 mb-3
                        "><label class="fw-bold text-dark">Contact Name</label><input type="text" class="form-control" v-model="formData.employment.current.contact_name" placeholder="Enter contact name"></div>
                    </div>
                    <div class="mb-3"><label class="fw-bold text-dark">Duties</label><textarea class="form-control" v-model="formData.employment.current.duties" placeholder="Enter duties"></textarea></div>
                    <div class="mb-3"><label class="fw-bold text-dark">Address</label><textarea class="form-control" v-model="formData.employment.current.address" placeholder="Enter address"></textarea></div>
                    <div class="row">
                        <div class="col-md-4 mb-3"><label class="fw-bold text-dark">Postcode</label><input type="text" class="form-control" v-model="formData.employment.current.postcode" placeholder="Enter postcode"></div>
                        <div class="col-md-4 mb-3"><label class="fw-bold text-dark">Telephone</label><input type="text" class="form-control" v-model="formData.employment.current.telephone" placeholder="Enter telephone"></div>
                        <div class="col-md-4 mb-3"><label class="fw-bold text-dark">Email</label><input type="email" class="form-control" v-model="formData.employment.current.email" placeholder="Enter email"></div>
                    </div>
                </div>

                <h6>Previous Employment</h6>
                <div class="border p-3 mb-3">
                    <div class="row">
                        <div class="col-md-4 mb-3"><label class="fw-bold text-dark">Start Date</label><input type="date" class="form-control" v-model="formData.employment.previous.start_date"></div>
                        <div class="col-md-4 mb-3"><label class="fw-bold text-dark">End Date</label><input type="date" class="form-control" v-model="formData.employment.previous.end_date"></div>
                        <div class="col-md-4 mb-3"><label class="fw-bold text-dark">Salary</label><input type="text" class="form-control" v-model="formData.employment.previous.salary" placeholder="Enter salary"></div>
                    </div>
                        <div class="mb-3"><label class="fw-bold text-dark">Duties</label><textarea class="form-control" v-model="formData.employment.previous.duties" placeholder="Enter duties"></textarea></div>
                </div>

                <div class="mb-3">
                    <label for="gaps_explanation" class="form-label fw-bold text-dark">Explanation of Gaps in Employment</label>
                    <textarea class="form-control" id="gaps_explanation" v-model="formData.gaps_explanation" placeholder="Explain any gaps in employment"></textarea>
                </div>

                <div class="d-flex justify-content-between flex-column flex-sm-row mt-3">
                    <button @click="previousStep" class="btn btn-secondary rounded-pill w-100 w-sm-auto mb-2 mb-sm-0 me-sm-2">Previous</button>
                    <button @click="nextStep" class="btn btn-primary rounded-pill w-100 w-sm-auto">Next</button>
                </div>
            </div>

            <!-- Step 7: References -->
            <div v-else-if="step === 7">
                <h5 class="card-title">Step 7: References</h5>
                <hr>
                <p><small>Please provide names and details for referees. All referees will be contacted.</small></p>
                <div class="row">
                    <div class="col-md-6">
                        <h6>Referee One</h6>
                        <div class="border p-3 mb-3">
                            <div class="mb-3"><label class="fw-bold text-dark">Contact Name</label><input type="text" class="form-control" v-model="formData.referee1.name" placeholder="Enter contact name"></div>
                            <div class="mb-3"><label class="fw-bold text-dark">Business Name</label><input type="text" class="form-control" v-model="formData.referee1.business_name" placeholder="Enter business name"></div>
                            <div class="mb-3"><label class="fw-bold text-dark">Address</label><textarea class="form-control" v-model="formData.referee1.address" placeholder="Enter address"></textarea></div>
                            <div class="mb-3"><label class="fw-bold text-dark">Postcode</label><input type="text" class="form-control" v-model="formData.referee1.postcode" placeholder="Enter postcode"></div>
                            <div class="mb-3"><label class="fw-bold text-dark">Telephone</label><input type="text" class="form-control" v-model="formData.referee1.telephone" placeholder="Enter telephone"></div>
                            <div class="mb-3"><label class="fw-bold text-dark">Email</label><input type="email" class="form-control" v-model="formData.referee1.email" placeholder="Enter email"></div>
                            <div class="mb-3"><label class="fw-bold text-dark">Capacity in which known</label><input type="text" class="form-control" v-model="formData.referee1.capacity" placeholder="e.g. Manager"></div>
                        </div>
                    </div>
                        <div class="col-md-6">
                        <h6>Referee Two</h6>
                        <div class="border p-3 mb-3">
                            <div class="mb-3"><label class="fw-bold text-dark">Contact Name</label><input type="text" class="form-control" v-model="formData.referee2.name" placeholder="Enter contact name"></div>
                            <div class="mb-3"><label class="fw-bold text-dark">Business Name</label><input type="text" class="form-control" v-model="formData.referee2.business_name" placeholder="Enter business name"></div>
                            <div class="mb-3"><label class="fw-bold text-dark">Address</label><textarea class="form-control" v-model="formData.referee2.address" placeholder="Enter address"></textarea></div>
                            <div class="mb-3"><label class="fw-bold text-dark">Postcode</label><input type="text" class="form-control" v-model="formData.referee2.postcode" placeholder="Enter postcode"></div>
                            <div class="mb-3"><label class="fw-bold text-dark">Telephone</label><input type="text" class="form-control" v-model="formData.referee2.telephone" placeholder="Enter telephone"></div>
                            <div class="mb-3"><label class="fw-bold text-dark">Email</label><input type="email" class="form-control" v-model="formData.referee2.email" placeholder="Enter email"></div>
                            <div class="mb-3"><label class="fw-bold text-dark">Capacity in which known</label><input type="text" class="form-control" v-model="formData.referee2.capacity" placeholder="e.g. Manager"></div>
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-between flex-column flex-sm-row mt-3">
                    <button @click="previousStep" class="btn btn-secondary rounded-pill w-100 w-sm-auto mb-2 mb-sm-0 me-sm-2">Previous</button>
                    <button @click="nextStep" class="btn btn-primary rounded-pill w-100 w-sm-auto">Next</button>
                </div>
            </div>

            <!-- Step 8: Safeguarding & Declaration -->
            <div v-else-if="step === 8">
                <h5 class="card-title text-dark">Step 8: Safeguarding / Ex-Offenders Declaration</h5>
                <p><small>This section will only be seen by those involved in the recruitment process and will be treated with the strictest confidence. Answering 'yes' will not necessarily prevent your employment.</small></p>

                <hr>
                <p><small>The Rehabilitation of Offenders Act 1974 aims to promote equality of opportunity and is committed to treating all applicants fairly regardless of ethnicity, disability, age, gender or gender re-assignment, religion or belief, sexual orientation, pregnancy or maternity and marriage or civil partnership. QCM Healthcare undertakes not to discriminate unfairly against applicants on the basis of a criminal conviction or other information declared.</small></p>
                <p><small>Answering 'yes' to the question below will not necessarily prevent your employment. This will depend on the relevance of the information you provide in respect of the nature of the position and the particular circumstances.</small></p>
                <div class="mb-3 p-3 border rounded">
                    <label class="form-label fw-bold text-dark">Are you currently bound over or do you have any current UNSPENT convictions that have been issued by a Court or Court-Martial in the United Kingdom or in any other country?</label>
                    <div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="unspent_convictions" id="unspent_convictions_yes" value="Yes" v-model="formData.unspent_convictions">
                            <label class="form-check-label" for="unspent_convictions_yes">Yes</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="unspent_convictions" id="unspent_convictions_no" value="No" v-model="formData.unspent_convictions">
                            <label class="form-check-label" for="unspent_convictions_no">No</label>
                        </div>
                    </div>
                </div>
                <div class="mb-3 p-3 border rounded">
                    <label class="form-label fw-bold text-dark">Do you have any current UNSPENT police cautions, reprimands or final warnings in the United Kingdom or in any other country?</label>
                    <div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="unspent_cautions" id="unspent_cautions_yes" value="Yes" v-model="formData.unspent_cautions">
                            <label class="form-check-label" for="unspent_cautions_yes">Yes</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="unspent_cautions" id="unspent_cautions_no" value="No" v-model="formData.unspent_cautions">
                            <label class="form-check-label" for="unspent_cautions_no">No</label>
                        </div>
                    </div>
                </div>
                <h5 class="card-title text-dark mt-4">Privacy Statement</h5>
                <hr>
                <p><small>We will only collect data for specified, explicit and legitimate use in relation to the recruitment process. By signing this application form, you consent to us holding the information contained within this application form. If successfully shortlisted, data will also include shortlisting scoring and interview records. We would like to keep this data until the vacancy is filled. (We cannot estimate the exact time period, but we will consider this period over when a candidate accepts our job offer for the position for which we are considering you). When that period is over, we will either delete your data or inform you that we would like to keep it in our database for future roles.</small></p>
                <p><small>We have privacy policies that you can request for further information. Please be assured that your data will be securely stored by the CQC Registered Manager and only used for the purposes of recruiting for this vacant post.</small></p>
                <p><small> You have a right for your data to be forgotten, to rectify or access data, to restrict processing, to withdraw consent and to be kept informed about the processing of your data. If you would like to discuss this further or withdraw your consent at any time, please contact the CQC Registered Manager to discuss.</small></p>

                <h5 class="card-title mt-4 text-dark">Declaration</h5>
                <hr>
                <p>The information in this application form is true and complete. I agree that any deliberate omission, falsification or misrepresentation in the application form will be grounds for rejecting this application or subsequent dismissal if employed.</p>

                <div class="mb-3">
                    <label for="print_full_name" class="form-label fw-bold text-dark">Print Full Name</label>
                    <input type="text" class="form-control" id="print_full_name" v-model="formData.print_full_name" placeholder="Enter your full name">
                </div>

                <div class="mb-3">
                    <label for="signature" class="form-label fw-bold text-dark">Upload Signature Image</label>
                    <div class="signature-upload-box">
                        <input type="file" class="form-control-file" id="signature" @change="handleSignatureUpload" accept="image/*" style="display: none;">
                        <div class="text-center p-4 border rounded" onclick="document.getElementById('signature').click();">
                            <i class="fas fa-camera fa-2x mb-2"></i> <!-- Placeholder for camera icon -->
                            <p class="mb-0">Tap to take a picture or upload</p>
                            <img v-if="formData.signature" :src="formData.signature" class="img-fluid mt-2" style="max-height: 100px;" alt="Signature Preview">
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="date" class="form-label fw-bold text-dark">Date</label>
                    <input type="date" class="form-control" id="date" v-model="formData.date">
                </div>
                <div class="d-flex justify-content-between flex-column flex-sm-row mt-3">
                    <button @click="previousStep" class="btn btn-secondary rounded-pill w-100 w-sm-auto mb-2 mb-sm-0 me-sm-2">Previous</button>
                    <button @click="submitApplication" class="btn btn-success rounded-pill w-100 w-sm-auto">Download / Print</button>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';

const step = ref(1);
const formData = ref({
  position_applied_for: '',
  location: '',
  work_preference: '',
  hours_requested: '',
  understands_role: '',
  availability: {
    monday: { am: false, pm: false, evening: false },
    tuesday: { am: false, pm: false, evening: false },
    wednesday: { am: false, pm: false, evening: false },
    thursday: { am: false, pm: false, evening: false },
    friday: { am: false, pm: false, evening: false },
    saturday: { am: false, pm: false, evening: false },
    sunday: { am: false, pm: false, evening: false },
  },
  firstname: '',
  surname: '',
  maiden_name: '',
  previous_names: '',
  address: '',
  postcode: '',
  your_email: '',
  telephone_number: '',
  mobile_number: '',
  ni_number: '',
  gender: '',
  is_driver: '',
  own_transport: '',
  licence_duration: '',
  endorsements: '',
  uk_national: '',
  visa_details: '',
  is_related: '',
  reasonable_adjustments: '',
  education: [{ institution: '', from_date: '', to_date: '', qualifications: '' }],
  training: [{ subject: '', location: '', date: '', details: '' }],
  memberships: [{ organisation: '', reg_number: '', renewal_date: '', details: '' }],
  employment: {
    current: { start_date: '', end_date: '', salary: '', job_role: '', employer_name: '', reason_for_leaving: '', contact_name: '', duties: '', address: '', postcode: '', telephone: '', email: '' },
    previous: { start_date: '', end_date: '', salary: '', duties: '' },
  },
  gaps_explanation: '',
  referee1: { name: '', business_name: '', address: '', postcode: '', telephone: '', email: '', capacity: '' },
  referee2: { name: '', business_name: '', address: '', postcode: '', telephone: '', email: '', capacity: '' },
  unspent_convictions: '',
  unspent_cautions: '',
  print_full_name: '',
  signature: '',
  date: '',
});

const nextStep = () => {
  if (step.value < 8) {
    step.value++;
  }
};

const previousStep = () => {
  if (step.value > 1) {
    step.value--;
  }
};

const handleSignatureUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      formData.value.signature = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const submitApplication = () => {
    const printableContent = `
    <html>
        <head>
            <title>Job Application</title>
            <style>
                body { font-family: sans-serif; }
                h2 { text-align: center; }
                .section { margin-bottom: 20px; }
                .section h5 { font-size: 1.2em; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-bottom: 10px; }
                .row { display: flex; flex-wrap: wrap; margin-bottom: 10px; }
                .col { flex: 1; padding: 5px; }
                .label { font-weight: bold; }
            </style>
        </head>
        <body>
            <h2>Job Application Form</h2>
            
            ${Object.entries(formData.value).map(([key, value]) => {
                if (typeof value === 'object' && value !== null) {
                    return `<div class="section">
                                <h5>${key.replace(/_/g, ' ').toUpperCase()}</h5>
                                ${Object.entries(value).map(([subKey, subValue]) => {
                                    if (typeof subValue === 'object' && subValue !== null) {
                                        return `<div class="row">
                                                    <div class="col"><span class="label">${subKey.replace(/_/g, ' ')}:</span></div>
                                                    <div class="col">${Object.entries(subValue).map(([itemKey, itemValue]) => `<div>${itemKey}: ${itemValue}</div>`).join('')}
                                                    </div>
                                                </div>`;
                                    }
                                    return `<div class="row">
                                                <div class="col"><span class="label">${subKey.replace(/_/g, ' ')}:</span></div>
                                                <div class="col">${subValue}</div>
                                            </div>`;
                                }).join('')}
                            </div>`;
                }
                if (key === 'signature') {
                    return `<div class="section">
                                <h5>SIGNATURE</h5>
                                <img src="${value}" style="max-height: 100px;" alt="Signature">
                            </div>`;
                }
                return `<div class="row">
                            <div class="col"><span class="label">${key.replace(/_/g, ' ').toUpperCase()}:</span></div>
                            <div class="col">${value}</div>
                        </div>`;
            }).join('')}
        </body>
    </html>
    `;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(printableContent);
    printWindow.document.close();
    printWindow.print();
};

// Load from localStorage on component mount
onMounted(() => {
  const savedData = localStorage.getItem('jobApplication');
  if (savedData) {
    const loadedData = JSON.parse(savedData);
    // Create a new object with the default structure, then apply saved data.
    // This ensures that if a key is missing from saved data, the default is used.
    const newFormData = { ...formData.value, ...loadedData };
    
    // Manually deep merge the nested objects to prevent them from being overwritten by shallow copies.
    if (loadedData.availability) {
      newFormData.availability = { ...formData.value.availability, ...loadedData.availability };
    }
    if (loadedData.employment) {
      newFormData.employment = { ...formData.value.employment, ...loadedData.employment };
      if (loadedData.employment.current) {
        newFormData.employment.current = { ...formData.value.employment.current, ...loadedData.employment.current };
      }
      if (loadedData.employment.previous) {
        newFormData.employment.previous = { ...formData.value.employment.previous, ...loadedData.employment.previous };
      }
    }
    if (loadedData.referee1) {
      newFormData.referee1 = { ...formData.value.referee1, ...loadedData.referee1 };
    }
    if (loadedData.referee2) {
      newFormData.referee2 = { ...formData.value.referee2, ...loadedData.referee2 };
    }

    formData.value = newFormData;
  }
  const savedStep = localStorage.getItem('jobApplicationStep');
  if (savedStep) {
    step.value = parseInt(savedStep, 10);
  }
});

// Watch for changes in formData and save to localStorage
watch(
  formData,
  (newData) => {
    localStorage.setItem('jobApplication', JSON.stringify(newData));
  },
  { deep: true }
);

// Watch for changes in step and save to localStorage
watch(step, (newStep) => {
  localStorage.setItem('jobApplicationStep', newStep);
});

</script>