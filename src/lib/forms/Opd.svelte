<script lang="ts">
    import Repeatable from "../Repeatable.svelte";
    export let loading;
    let family_member = 1;
    let navigate
    let tabs={
        "History" : "Examination",
        "Examination":"Diagnosis",
        "Diagnosis":null
    }
</script>

<mb-form ctx={{system_or_structure_examined:"Entire body"}}>
    <sl-tab-group bind:this={navigate}>

        <sl-tab slot="nav" panel="History">History</sl-tab>
        <sl-tab slot="nav" panel="Examination">Examination</sl-tab>
        <sl-tab slot="nav" panel="Diagnosis">Diagnosis</sl-tab>
    
        <sl-tab-panel name="History">
            <div class="border shadow-lg p-5 rounded-lg flex flex-col gap-3 mt-5 md:p-10">
                <p class="font-bold text-lg">Presenting problem</p>
                
                <mb-search path="opdvisitpdj.v0/reason_for_encounter/presenting_problem" hits={5}>
                    <mb-filter value="^181000271107" label="Findings" />
                    <mb-filter value="<272379006 | Event (event) |" label="Events"></mb-filter>
                </mb-search>
                
                <mb-input textarea path="opdvisitpdj.v0/history/story_history/story" label="Story"></mb-input>
                
                <div>
                    <mb-context path="opdvisitpdj.v0/context/start_time"></mb-context>
                    <mb-context path="opdvisitpdj.v0/context/setting"></mb-context>
                    <mb-context path="opdvisitpdj.v0/reason_for_encounter/language"></mb-context>
                    <mb-context path="opdvisitpdj.v0/reason_for_encounter/encoding"></mb-context>
                    <mb-context path="opdvisitpdj.v0/reason_for_encounter/subject"></mb-context>
                </div>
        
                <Repeatable let:i name="Symptom/Sign">
                    <p class="font-bold text-lg">Symptom</p>
                    <div class="ml-4 md:ml-6 lg:ml-8 flex flex-col gap-3">
                        <mb-input path={`opdvisitpdj.v0/history/story_history/symptom_sign:${i}/symptoms`} label="Name"></mb-input>
                        <mb-checkbox path={`opdvisitpdj.v0/history/story_history/symptom_sign:${i}/nil_significant`} label="Nil significant"></mb-checkbox>
                        
                        <p>Body Site</p>
                        <mb-input-multiple placeholder="body site" path={`opdvisitpdj.v0/history/story_history/symptom_sign:${i}/body_site`}></mb-input-multiple>
                        <mb-input path={`opdvisitpdj.v0/history/story_history/symptom_sign:${i}/description`} label="Description"></mb-input>
                        <mb-date time path={`opdvisitpdj.v0/history/story_history/symptom_sign:${i}/episode_onset`} label="Episode onset"></mb-date>
            
                        <mb-select path={`opdvisitpdj.v0/history/story_history/symptom_sign:${i}/progression`} label="Progression">
                            <mb-option value="at0183" label="Worsening"></mb-option>
                            <mb-option value="at0182" label="Unchanged"></mb-option>
                            <mb-option value="at0181" label="Improving"></mb-option>
                            <mb-option value="at0184" label="Resolved"></mb-option>
                        </mb-select>
            
                        <p class="font-semibold">Modifying Factor</p>
                        <Repeatable let:i={k} name="Modifying Factor">
                        <div class="border shadow-md rounded-lg flex flex-col gap-3 p-4">
                            <mb-input path={`opdvisitpdj.v0/history/story_history/symptom_sign:${i}/modifying_factor:${k}/factor`} label="Factor"></mb-input>
                            <mb-select path={`opdvisitpdj.v0/history/story_history/symptom_sign:${i}/modifying_factor:${k}/effect`} label="Effect">
                                <mb-option value="at0159" label="Relieves"></mb-option>
                                <mb-option value="at0156" label="No effect"></mb-option>
                                <mb-option value="at0158" label="Worsens"></mb-option>
                            </mb-select>
                        </div>
                        </Repeatable>

                        <mb-input path={`opdvisitpdj.v0/history/story_history/symptom_sign:${i}/comment`} label="Comment"></mb-input>
                        <p class="border-b-2 border-gray-300 mt-2"></p>
                    </div>
                </Repeatable>
        
                <div>
                    <mb-context path="opdvisitpdj.v0/history/story_history/time"></mb-context>
                    <mb-context path="opdvisitpdj.v0/history/story_history/language"></mb-context>
                    <mb-context path="opdvisitpdj.v0/history/story_history/encoding"></mb-context>
                    <mb-context path="opdvisitpdj.v0/history/story_history/subject"></mb-context>
                </div>
        
                <p class="font-bold text-lg">Family Member</p>
                {#each [...Array(family_member)] as _, i}
                <mb-input path={`opdvisitpdj.v0/history/family_history/per_family_member:${i}/relationship`} label="Relationship"></mb-input>
                <mb-input path={`opdvisitpdj.v0/history/family_history/per_family_member:${i}/clinical_history/problem_diagnosis_name`} label="Problem/diagnosis name"></mb-input>
                <p class="border-b-2 border-gray-300 mt-2"></p>
        
                {/each}
        
                <div>
                    <sl-button type="neutral" class="mt-5" on:click={()=>{family_member++;}}><sl-icon slot="prefix" name="plus-square-fill"></sl-icon>Add Family Member</sl-button>
                    {#if family_member>1}
                    <sl-button on:click={()=>{family_member--;}}><sl-icon slot="prefix" name="dash-square-fill"></sl-icon>Delete Family Member</sl-button>
                    {/if}
                </div>
                <mb-context path="opdvisitpdj.v0/history/family_history/language"></mb-context>
                <mb-context path="opdvisitpdj.v0/history/family_history/encoding"></mb-context>
                <mb-context path="opdvisitpdj.v0/history/family_history/subject"></mb-context>
            </div>
        </sl-tab-panel>


        <sl-tab-panel name="Examination">
            <div class="border shadow-lg p-5 rounded-lg flex flex-col gap-3 mt-5 md:p-10">
                <p class="font-bold text-lg">Pulse Rate</p>
                <div class="ml-4 md:ml-6 lg:ml-8 flex flex-col gap-3">
                    <mb-quantity default="/min" path="opdvisitpdj.v0/examination_findings/vital_signs/pulse_heart_beat/rate" label="Rate">
                        <mb-unit unit="/min" label="/min"></mb-unit>
                    </mb-quantity>
                    <mb-select path="opdvisitpdj.v0/examination_findings/vital_signs/pulse_heart_beat/regularity" label="Regularity">
                        <mb-option value="at0006" label="Regular"></mb-option>
                        <mb-option value="at1028" label="Irregular"></mb-option>
                    </mb-select>
                </div>

                <p class="font-bold text-lg">Blood Pressure</p>
                <div class="ml-4 md:ml-6 lg:ml-8 flex flex-col gap-3">
                    <mb-quantity default="mm[Hg]" path="opdvisitpdj.v0/examination_findings/vital_signs/blood_pressure/systolic" label="Systolic">
                        <mb-unit unit="mm[Hg]" label="mm[Hg]"></mb-unit>
                    </mb-quantity>
                    <mb-quantity default="mm[Hg]" path="opdvisitpdj.v0/examination_findings/vital_signs/blood_pressure/diastolic" label="Diastolic">
                        <mb-unit unit="mm[Hg]" label="mm[Hg]"></mb-unit>
                    </mb-quantity>
                </div>
                <p class="font-bold text-lg">Body Temperature</p>
                <div class="ml-4 md:ml-6 lg:ml-8 flex flex-col gap-3">
                    <mb-quantity default="[degF]" path="opdvisitpdj.v0/examination_findings/vital_signs/body_temperature/temperature" label="Temperature">
                        <mb-unit unit="Cel" label="Cel"></mb-unit>
                        <mb-unit unit="[degF]" label="[degF]"></mb-unit>
                    </mb-quantity>
                </div>
                <p class="font-bold text-lg">Body Weight</p>
                <div class="ml-4 md:ml-6 lg:ml-8 flex flex-col gap-3">
                    <mb-quantity default="kg" path="opdvisitpdj.v0/examination_findings/vital_signs/body_weight/weight" label="Weight">
                        <mb-unit unit="kg" label="kg"></mb-unit>
                        <mb-unit unit="[lb_av]" label="[lb_av]"></mb-unit>
                        <mb-unit unit="g" label="g"></mb-unit>
                    </mb-quantity>
                </div>
                <!-- <mb-input path="opdvisitpdj.v0/examination_findings/physical_examination_findings/description" label="Description"></mb-input> -->
                <mb-context path="opdvisitpdj.v0/examination_findings/physical_examination_findings/examination_findings/system_or_structure_examined" label="System or structure examined"></mb-context>
                <!-- <mb-input path="opdvisitpdj.v0/examination_findings/physical_examination_findings/examination_findings/body_site" label="Body site"></mb-input> -->
                <p class="font-bold text-lg">Physical Examination Findings</p>
                <div class="ml-4 md:ml-6 lg:ml-8 flex flex-col gap-3">
                    <mb-checkbox path="opdvisitpdj.v0/examination_findings/physical_examination_findings/examination_findings/no_abnormality_detected" label="No abnormality detected"></mb-checkbox>
                    <mb-input textarea path="opdvisitpdj.v0/examination_findings/physical_examination_findings/examination_findings/clinical_description" label="Clinical description"></mb-input>
                    <mb-input path="opdvisitpdj.v0/examination_findings/physical_examination_findings/interpretation" label="Interpretation"></mb-input>
                    <mb-input path="opdvisitpdj.v0/examination_findings/physical_examination_findings/comment" label="Comment"></mb-input>
                </div>

                <div>
                    <mb-context path="opdvisitpdj.v0/examination_findings/vital_signs/pulse_heart_beat/time"></mb-context>
                    <mb-context path="opdvisitpdj.v0/examination_findings/vital_signs/pulse_heart_beat/language"></mb-context>
                    <mb-context path="opdvisitpdj.v0/examination_findings/vital_signs/pulse_heart_beat/encoding"></mb-context>
                    <mb-context path="opdvisitpdj.v0/examination_findings/vital_signs/pulse_heart_beat/subject"></mb-context>
                    <mb-context path="opdvisitpdj.v0/examination_findings/vital_signs/blood_pressure/time"></mb-context>
                    <mb-context path="opdvisitpdj.v0/examination_findings/vital_signs/blood_pressure/language"></mb-context>
                    <mb-context path="opdvisitpdj.v0/examination_findings/vital_signs/blood_pressure/encoding"></mb-context>
                    <mb-context path="opdvisitpdj.v0/examination_findings/vital_signs/blood_pressure/subject"></mb-context>
                    <mb-context path="opdvisitpdj.v0/examination_findings/vital_signs/body_temperature/time"></mb-context>
                    <mb-context path="opdvisitpdj.v0/examination_findings/vital_signs/body_temperature/language"></mb-context>
                    <mb-context path="opdvisitpdj.v0/examination_findings/vital_signs/body_temperature/encoding"></mb-context>
                    <mb-context path="opdvisitpdj.v0/examination_findings/vital_signs/body_temperature/subject"></mb-context>
                    <mb-context path="opdvisitpdj.v0/examination_findings/vital_signs/body_weight/time"></mb-context>
                    <mb-context path="opdvisitpdj.v0/examination_findings/vital_signs/body_weight/language"></mb-context>
                    <mb-context path="opdvisitpdj.v0/examination_findings/vital_signs/body_weight/encoding"></mb-context>
                    <mb-context path="opdvisitpdj.v0/examination_findings/vital_signs/body_weight/subject"></mb-context>
                    <mb-context path="opdvisitpdj.v0/examination_findings/physical_examination_findings/time"></mb-context>
                    <mb-context path="opdvisitpdj.v0/examination_findings/physical_examination_findings/language"></mb-context>
                    <mb-context path="opdvisitpdj.v0/examination_findings/physical_examination_findings/encoding"></mb-context>
                    <mb-context path="opdvisitpdj.v0/examination_findings/physical_examination_findings/subject"></mb-context>
                </div>
            </div>
            
        </sl-tab-panel>


        <sl-tab-panel name="Diagnosis">
            <div class="border shadow-lg p-5 rounded-lg flex flex-col gap-3 mt-5 md:p-10">
                <p class="font-bold text-lg">Problem/Diagnosis name</p>
                <mb-input path="opdvisitpdj.v0/problem_diagnosis/problem_diagnosis_name"></mb-input>
                <mb-input textarea path="opdvisitpdj.v0/problem_diagnosis/clinical_description" label="Clinical description"></mb-input>
                <mb-input-multiple placeholder="body site" path="opdvisitpdj.v0/problem_diagnosis/body_site" label="Body site"></mb-input-multiple>
                <mb-date time path="opdvisitpdj.v0/problem_diagnosis/date_time_of_onset" label="Date/time of onset"></mb-date>
                <mb-select path="opdvisitpdj.v0/problem_diagnosis/severity" label="Severity">
                    <mb-option value="at0047" label="Mild"></mb-option>
                    <mb-option value="at0048" label="Moderate"></mb-option>
                    <mb-option value="at0049" label="Severe"></mb-option>
                </mb-select>
                <mb-input path="opdvisitpdj.v0/problem_diagnosis/course_description" label="Course description"></mb-input>
                <mb-date time path="opdvisitpdj.v0/problem_diagnosis/date_time_of_resolution" label="Date/time of resolution"></mb-date>
                <mb-select path="opdvisitpdj.v0/problem_diagnosis/diagnostic_certainty" label="Diagnostic certainty"> 
                    <mb-option value="at0074" label="Suspected"></mb-option>
                    <mb-option value="at0075" label="Probable"></mb-option>
                    <mb-option value="at0076" label="Confirmed"></mb-option>
                </mb-select>
                <mb-input path="opdvisitpdj.v0/problem_diagnosis/comment" label="Comment"></mb-input>
                <!-- <mb-date time path="opdvisitpdj.v0/problem_diagnosis/last_updated" label="Last updated"></mb-date> -->
                <mb-context path="opdvisitpdj.v0/problem_diagnosis/language"></mb-context>
                <mb-context path="opdvisitpdj.v0/problem_diagnosis/encoding"></mb-context>
                <mb-context path="opdvisitpdj.v0/problem_diagnosis/subject"></mb-context>
            </div>
        </sl-tab-panel>
    </sl-tab-group>
    <mb-context path="opdvisitpdj.v0/category"></mb-context>
    <mb-context path="opdvisitpdj.v0/language"></mb-context>
    <mb-context path="opdvisitpdj.v0/territory"></mb-context>
    <mb-context path="opdvisitpdj.v0/composer"></mb-context>

    <div class="flex">
        <div class="w-full">
            <sl-button on:click={() => {
                window.scrollTo({top: 0, behavior: 'smooth'});
                let previous_tab = navigate.activeTab.previousElementSibling?.panel
                navigate.show(previous_tab)}
            }>
                <sl-icon slot="prefix" name="arrow-left"></sl-icon>
                Back
            </sl-button>
        </div>
        <div>
            <sl-button on:click={() => {
                setTimeout(()=>{
                    window.scrollTo({top: 0, behavior:'smooth'});
                },50)
                let next_tab = tabs[navigate.activeTab.panel]
                navigate.show(next_tab)
            }
            }>
                <sl-icon slot="suffix" name="arrow-right"></sl-icon>
                Next
            </sl-button>
        </div>
    </div>

    <mb-submit class="mt-4">
        <sl-button size="medium" class="mt-4 w-full" type="neutral" {loading}>
            Submit
        </sl-button>
    </mb-submit>
</mb-form>