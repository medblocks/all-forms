<script lang="ts">
  import Repeatable from "../Repeatable.svelte";
  let family_member = 1;
  let navigate;
</script>

<mb-form class="flex flex-col gap-3 p-5 shadow-lg rounded-lg border m-5">
  <sl-tab-group bind:this={navigate}>
    <sl-tab slot="nav" panel="clinical">OPD</sl-tab>
    <sl-tab slot="nav" panel="lab">Labrotary Tests</sl-tab>
    <sl-tab slot="nav" panel="assess">Assessment</sl-tab>
    <sl-tab slot="nav" panel="Conclu">Conclusions</sl-tab>

    <sl-tab-panel name="clinical">
      <div class="flex flex-col gap-3 p-5 m-5">
        <p class="font-bold text-lg">Patient History and Background</p>
        <mb-select
          path="covid.form.v1/clinical_background/covid_19_admission/hospital_admission_status"
          label="Hospital admission status"
        >
          <mb-option value="at0003" label="YES" />
          <mb-option value="at0004" label="NO" />
          <mb-option value="at0005" label="UNKNOWN" />
        </mb-select>
        <mb-date
          time
          path="covid.form.v1/clinical_background/covid_19_admission/date_first_admitted"
          label="Date first admitted"
        />
        <mb-context
          path="covid.form.v1/clinical_background/covid_19_admission/language"
        />
        <mb-context
          path="covid.form.v1/clinical_background/covid_19_admission/encoding"
        />
        <mb-context
          path="covid.form.v1/clinical_background/covid_19_admission/subject"
        />
        <mb-duration
          year
          month
          hour
          path="covid.form.v1/clinical_background/age/chronological_age"
          label="Chronological age"
        />
        <mb-context path="covid.form.v1/clinical_background/age/time" />
        <mb-context path="covid.form.v1/clinical_background/age/language" />
        <mb-context path="covid.form.v1/clinical_background/age/encoding" />
        <mb-context path="covid.form.v1/clinical_background/age/subject" />
        <mb-input
          path="covid.form.v1/clinical_background/symptom_sign_screening_questionnaire/any_event:0/screening_purpose"
          label="Screening purpose"
        />
        <mb-select
          path="covid.form.v1/clinical_background/symptom_sign_screening_questionnaire/any_event:0/presence_of_any_symptoms_or_signs"
          label="Presence of any symptoms or signs"
        >
          <mb-option value="at0031" label="Present" />
          <mb-option value="at0032" label="Absent" />
          <mb-option value="at0033" label="Unknown" />
        </mb-select>
        <mb-input
          path="covid.form.v1/clinical_background/symptom_sign_screening_questionnaire/any_event:0/specific_symptom_sign:0/symptom_or_sign_name"
          label="Symptom or sign name"
        />

        <mb-context
          path="covid.form.v1/clinical_background/symptom_sign_screening_questionnaire/any_event:0/time"
        />
        <mb-context
          path="covid.form.v1/clinical_background/symptom_sign_screening_questionnaire/language"
        />
        <mb-context
          path="covid.form.v1/clinical_background/symptom_sign_screening_questionnaire/encoding"
        />
        <mb-context
          path="covid.form.v1/clinical_background/symptom_sign_screening_questionnaire/subject"
        />
      </div>
      <div class="flex flex-col gap-3 p-5 shadow-lg rounded-lg border m-5">
        <p class="font-bold text-lg">Treatment</p>
        <mb-input
          path="covid.form.v1/clinical_background/condition_screening_questionnaire/any_event:0/specific_condition:0/condition_name"
          label="Condition name"
        />

        <mb-context
          path="covid.form.v1/clinical_background/condition_screening_questionnaire/any_event:0/time"
        />
        <mb-context
          path="covid.form.v1/clinical_background/condition_screening_questionnaire/language"
        />
        <mb-context
          path="covid.form.v1/clinical_background/condition_screening_questionnaire/encoding"
        />
        <mb-context
          path="covid.form.v1/clinical_background/condition_screening_questionnaire/subject"
        />
        <mb-input
          path="covid.form.v1/clinical_background/management_treatment_screening_questionnaire/any_event:0/specific_management_treatment_activity:0/activity_name"
          label="Activity name"
        />
        <mb-select
          path="covid.form.v1/clinical_background/management_treatment_screening_questionnaire/any_event:0/specific_management_treatment_activity:0/actioned"
          label="Actioned?"
        >
          <mb-option value="at0023" label="Actioned" />
          <mb-option value="at0024" label="Not actioned" />
          <mb-option value="at0027" label="Unknown" />
        </mb-select>
        <mb-date
          time
          path="covid.form.v1/clinical_background/management_treatment_screening_questionnaire/any_event:0/specific_management_treatment_activity:0/date_actioned"
          label="Date actioned"
        />
      </div>

      <div class="p-5 flex flex-col gap-3 mt-5 p-15 ">
        <p class="font-bold text-lg">Vital Signs</p>
        <mb-context
          path="covid.form.v1/clinical_background/management_treatment_screening_questionnaire/any_event:0/time"
        />
        <mb-context
          path="covid.form.v1/clinical_background/management_treatment_screening_questionnaire/language"
        />
        <mb-context
          path="covid.form.v1/clinical_background/management_treatment_screening_questionnaire/encoding"
        />
        <mb-context
          path="covid.form.v1/clinical_background/management_treatment_screening_questionnaire/subject"
        />
        <mb-quantity
          default="Cel"
          path="covid.form.v1/clinical_background/vital_signs/body_temperature/any_event:0/temperature"
          label="Temperature"
        >
          <mb-unit unit="Cel" label="Cel" />
          <mb-unit unit="[degF]" label="[degF]" />
        </mb-quantity>
        <mb-context
          path="covid.form.v1/clinical_background/vital_signs/body_temperature/any_event:0/time"
        />
        <mb-select
          path="covid.form.v1/clinical_background/vital_signs/body_temperature/location_of_measurement"
          label="Location of measurement"
        >
          <mb-option value="at0025" label="Rectum" />
          <mb-option value="at0023" label="Ear canal" />
          <mb-option value="at0061" label="Forehead" />
          <mb-option value="at0022" label="Mouth" />
          <mb-option value="at0043" label="Skin" />
          <mb-option value="at0060" label="Temple" />
        </mb-select>
        <mb-context
          path="covid.form.v1/clinical_background/vital_signs/body_temperature/language"
        />
        <mb-context
          path="covid.form.v1/clinical_background/vital_signs/body_temperature/encoding"
        />
        <mb-context
          path="covid.form.v1/clinical_background/vital_signs/body_temperature/subject"
        />

        <div class="flex flex-col gap-3 p-5 shadow-lg rounded-lg border m-5">
          <p class="font-bold text-lg">Pulse Rate</p>
          <mb-select
            path="covid.form.v1/clinical_background/vital_signs/respiration/any_event:0/presence"
            label="Presence"
          >
            <mb-option value="at0063" label="Present" />
            <mb-option value="at0064" label="Not detected" />
          </mb-select>
          <mb-quantity
            default="/min"
            path="covid.form.v1/clinical_background/vital_signs/respiration/any_event:0/rate"
            label="Rate"
          >
            <mb-unit unit="/min" label="/min" />
          </mb-quantity>
          <mb-select
            path="covid.form.v1/clinical_background/vital_signs/respiration/any_event:0/regularity"
            label="Regularity"
          >
            <mb-option value="at0006" label="Regular" />
            <mb-option value="at0007" label="Irregular" />
          </mb-select>
          <mb-input
            path="covid.form.v1/clinical_background/vital_signs/respiration/any_event:0/comment"
            label="Comment"
          />
          <mb-select
            path="covid.form.v1/clinical_background/vital_signs/respiration/any_event:0/body_position"
            label="Body position"
          >
            <mb-option value="at0066" label="Standing/upright" />
            <mb-option value="at0067" label="Sitting" />
            <mb-option value="at0068" label="Reclining" />
            <mb-option value="at0069" label="Lying" />
            <mb-option value="at0071" label="Prone" />
          </mb-select>
        </div>
        <mb-context
          path="covid.form.v1/clinical_background/vital_signs/respiration/any_event:0/time"
        />
        <mb-context
          path="covid.form.v1/clinical_background/vital_signs/respiration/language"
        />
        <mb-context
          path="covid.form.v1/clinical_background/vital_signs/respiration/encoding"
        />
        <mb-context
          path="covid.form.v1/clinical_background/vital_signs/respiration/subject"
        />

        <mb-percent
          path="covid.form.v1/clinical_background/vital_signs/pulse_oximetry/any_event:0/spo"
          label="SpO₂"
        />
        <mb-input
          path="covid.form.v1/clinical_background/vital_signs/pulse_oximetry/any_event:0/interpretation:0"
          label="Interpretation"
        />
        <mb-input
          path="covid.form.v1/clinical_background/vital_signs/pulse_oximetry/any_event:0/confounding_factors:0"
          label="Confounding factors"
        />
      </div>

      <mb-context
        path="covid.form.v1/clinical_background/vital_signs/pulse_oximetry/any_event:0/time"
      />
      <mb-context
        path="covid.form.v1/clinical_background/vital_signs/pulse_oximetry/language"
      />
      <mb-context
        path="covid.form.v1/clinical_background/vital_signs/pulse_oximetry/encoding"
      />
      <mb-context
        path="covid.form.v1/clinical_background/vital_signs/pulse_oximetry/subject"
      />

      <div class="flex flex-col gap-3 p-5 shadow-lg rounded-lg border m-5">
        <p class="font-bold text-lg">Travel Screening</p>
        <mb-select
          path="covid.form.v1/clinical_background/travel_screening_questionnaire/any_event:0/travel"
          label="Travelling"
        >
          <mb-option value="at0006" label="Yes" />
          <mb-option value="at0005" label="No" />
          <mb-option value="at0027" label="Unknown" />
        </mb-select>
        <mb-select
          path="covid.form.v1/clinical_background/travel_screening_questionnaire/any_event:0/domestic_international"
          label="Domestic/international"
        >
          <mb-option value="at0028" label="Domestic travel" />
          <mb-option value="at0029" label="International travel" />
          <mb-option value="at0030" label="Domestic and international travel" />
        </mb-select>
        <mb-context
          path="covid.form.v1/clinical_background/travel_screening_questionnaire/any_event:0/time"
        />
        <mb-context
          path="covid.form.v1/clinical_background/travel_screening_questionnaire/language"
        />
        <mb-context
          path="covid.form.v1/clinical_background/travel_screening_questionnaire/encoding"
        />
        <mb-context
          path="covid.form.v1/clinical_background/travel_screening_questionnaire/subject"
        />
      </div>
    </sl-tab-panel>
    <sl-tab-panel name="lab">
      <Repeatable let:i name="Laboratory Test">
        <div class="flex flex-col gap-3 p-5 m-5 shadow-lg rounded-lg border">
          <mb-input
            path="covid.form.v1/clinical_background/lab_testing/laboratory_test_result/any_event:0/test_name"
            label="Test name"
          />
          <mb-date
            time
            path="covid.form.v1/clinical_background/lab_testing/laboratory_test_result/any_event:0/overall_test_status_timestamp"
            label="Overall test status timestamp"
          />
          <mb-input
            path="covid.form.v1/clinical_background/lab_testing/laboratory_test_result/any_event:0/conclusion"
            label="Conclusion"
          />
          <mb-input
            path="covid.form.v1/clinical_background/lab_testing/laboratory_test_result/any_event:0/test_diagnosis:0"
            label="Test diagnosis"
          />
          <mb-context
            path="covid.form.v1/clinical_background/lab_testing/laboratory_test_result/any_event:0/time"
          />

          <mb-context
            path="covid.form.v1/clinical_background/lab_testing/laboratory_test_result/test_method/coded_text_value"
          />
          <mb-context
            path="covid.form.v1/clinical_background/lab_testing/laboratory_test_result/test_method/text_value"
          />
          <mb-context
            path="covid.form.v1/clinical_background/lab_testing/laboratory_test_result/test_method/multimedia_value"
          />
          <mb-context
            path="covid.form.v1/clinical_background/lab_testing/laboratory_test_result/test_method/parsable_value"
          />
          <mb-context
            path="covid.form.v1/clinical_background/lab_testing/laboratory_test_result/test_method/state_value"
          />
          <mb-context
            path="covid.form.v1/clinical_background/lab_testing/laboratory_test_result/test_method/boolean_value"
          />
          <mb-context
            path="covid.form.v1/clinical_background/lab_testing/laboratory_test_result/test_method/identifier_value"
          />
          <mb-context
            path="covid.form.v1/clinical_background/lab_testing/laboratory_test_result/test_method/uri_value"
          />
          <mb-context
            path="covid.form.v1/clinical_background/lab_testing/laboratory_test_result/test_method/ehr_uri_value"
          />
          <mb-context
            path="covid.form.v1/clinical_background/lab_testing/laboratory_test_result/test_method/duration_value"
          />
          <mb-context
            path="covid.form.v1/clinical_background/lab_testing/laboratory_test_result/test_method/quantity_value"
          />
          <mb-context
            path="covid.form.v1/clinical_background/lab_testing/laboratory_test_result/test_method/count_value"
          />
          <mb-context
            path="covid.form.v1/clinical_background/lab_testing/laboratory_test_result/test_method/proportion_value"
          />
          <mb-context
            path="covid.form.v1/clinical_background/lab_testing/laboratory_test_result/test_method/date_time_value"
          />
          <mb-context
            path="covid.form.v1/clinical_background/lab_testing/laboratory_test_result/test_method/date_value"
          />
          <mb-context
            path="covid.form.v1/clinical_background/lab_testing/laboratory_test_result/test_method/time_value"
          />
          <mb-context
            path="covid.form.v1/clinical_background/lab_testing/laboratory_test_result/test_method/ordinal_value"
          />
          <mb-context
            path="covid.form.v1/clinical_background/lab_testing/laboratory_test_result/test_method/scale_value"
          />
          <mb-context
            path="covid.form.v1/clinical_background/lab_testing/laboratory_test_result/language"
          />
          <mb-context
            path="covid.form.v1/clinical_background/lab_testing/laboratory_test_result/encoding"
          />
          <mb-context
            path="covid.form.v1/clinical_background/lab_testing/laboratory_test_result/subject"
          />
        </div>
      </Repeatable>
    </sl-tab-panel>
    <sl-tab-panel name="assess">
      <div class="flex flex-col gap-3 p-5 m-5">
        <mb-select
          path="covid.form.v1/assessment/covid-19_infection_risk_assessment/health_risk"
          label="Health risk"
        >
          <mb-option value="at0.1" label="COVID-19 Risk assessment" />
        </mb-select>
        <mb-select
          path="covid.form.v1/assessment/covid-19_infection_risk_assessment/risk_factors:0/risk_factor"
          label="Risk factor"
        >
          <mb-option
            value="at0.9"
            label="Contact with confirmed Covid-19 case"
          />
          <mb-option
            value="at0.14"
            label="Potential contact exposure based on location"
          />
          <mb-option
            value="at0.10"
            label="Contact with suspected case/ pneumonia case"
          />
          <mb-option
            value="at0.13"
            label="Contact with severe, unexplained respiratory disease"
          />

          <mb-option
            value="at0.18"
            label="Needs admission for respiratory disease"
          />

          <mb-option value="at0.19" label="Other household members are ill" />
          <mb-option
            value="at0.20"
            label="Household members with travel exposure"
          />
        </mb-select>
        <mb-select
          path="covid.form.v1/assessment/covid-19_infection_risk_assessment/risk_factors:0/presence"
          label="Presence"
        >
          <mb-option value="at0018" label="Present" />
          <mb-option value="at0019" label="Absent" />
          <mb-option value="at0.15" label="Unknown" />
        </mb-select>
        <mb-input
          path="covid.form.v1/assessment/covid-19_infection_risk_assessment/risk_factors:0/description"
          label="Description"
        />
        <mb-date
          time
          path="covid.form.v1/assessment/covid-19_infection_risk_assessment/risk_factors:0/date_identified"
          label="Date identified"
        />
        <mb-select
          path="covid.form.v1/assessment/covid-19_infection_risk_assessment/risk_assessment"
          label="Risk assessment"
        >
          <mb-option value="at0.16" label="Low risk" />
          <mb-option value="at0.17" label="High risk" />
        </mb-select>
        <mb-context
          path="covid.form.v1/assessment/covid-19_infection_risk_assessment/language"
        />
        <mb-context
          path="covid.form.v1/assessment/covid-19_infection_risk_assessment/encoding"
        />
        <mb-context
          path="covid.form.v1/assessment/covid-19_infection_risk_assessment/subject"
        />
      </div>
    </sl-tab-panel>
    <sl-tab-panel name="Conclu">
      <div class="flex flex-col gap-3 p-5 m-5">
        <mb-input
          path="covid.form.v1/conclusion/problem_diagnosis/problem_diagnosis_name"
          label="Problem/Diagnosis name"
        />
        <mb-input
          path="covid.form.v1/conclusion/problem_diagnosis/clinical_description"
          label="Clinical description"
        />
        <mb-input
          path="covid.form.v1/conclusion/problem_diagnosis/body_site:0"
          label="Body site"
        />
        <mb-select
          path="covid.form.v1/conclusion/problem_diagnosis/severity"
          label="Severity"
        >
          <mb-option value="at0047" label="Mild" />
          <mb-option value="at0048" label="Moderate" />
          <mb-option value="at0049" label="Severe" />
        </mb-select>
        <mb-input
          path="covid.form.v1/conclusion/problem_diagnosis/course_description"
          label="Course description"
        />
        <mb-date
          time
          path="covid.form.v1/conclusion/problem_diagnosis/date_time_of_resolution"
          label="Date/time of resolution"
        />
        <mb-select
          path="covid.form.v1/conclusion/problem_diagnosis/diagnostic_certainty"
          label="Diagnostic certainty"
        >
          <mb-option value="at0074" label="Suspected" />
          <mb-option value="at0075" label="Probable" />
          <mb-option value="at0076" label="Confirmed" />
        </mb-select>
        <mb-input
          path="covid.form.v1/conclusion/problem_diagnosis/comment"
          label="Comment"
        />
        <mb-date
          time
          path="covid.form.v1/conclusion/problem_diagnosis/last_updated"
          label="Last updated"
        />
        <mb-context
          path="covid.form.v1/conclusion/problem_diagnosis/language"
        />
        <mb-context
          path="covid.form.v1/conclusion/problem_diagnosis/encoding"
        />
        <mb-context path="covid.form.v1/conclusion/problem_diagnosis/subject" />
      </div>
    </sl-tab-panel>
  </sl-tab-group>
  <mb-context path="covid.form.v1/composer" />
  <mb-context path="covid.form.v1/language" />
  <mb-context path="covid.form.v1/territory" />
  <mb-submit>
    <sl-button type="neutral">Submit</sl-button>
  </mb-submit>
</mb-form>

<style>
</style>
