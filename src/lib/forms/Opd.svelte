<script lang="ts">
    export let loading;
    let symptom_sign = 1;
    let body_site = {};
    let modifying_factor = {};
    let family_member = 1;
    let navigate
</script>

<mb-form ctx={{system_or_structure_examined:"Entire body"}}>
    <sl-tab-group bind:this={navigate}>

        <sl-tab slot="nav" panel="History">History</sl-tab>
        <sl-tab slot="nav" panel="Examination">Examination</sl-tab>
        <sl-tab slot="nav" panel="Diagnosis">Diagnosis</sl-tab>
        <sl-tab slot="nav" panel="Orders">Orders</sl-tab>
    
        <sl-tab-panel name="History">
            <div class="border shadow-lg p-5 rounded-lg flex flex-col gap-3 md:p-8">
                <mb-context path="opdvisitpdj.v0/context/start_time"></mb-context>
                <mb-context path="opdvisitpdj.v0/context/setting"></mb-context>
                <p class="font-bold text-lg">Presenting problem</p>
                
                <mb-select path="opdvisitpdj.v0/reason_for_encounter/presenting_problem" multiple>
                    <mb-option value="386661006" label="Fever"></mb-option>
                    <mb-option value="25064002" label="Headache"></mb-option>
                </mb-select>
            
                <mb-input textarea path="opdvisitpdj.v0/history/story_history/story" label="Story"></mb-input>
        
                <div>
                    <mb-context path="opdvisitpdj.v0/reason_for_encounter/language"></mb-context>
                    <mb-context path="opdvisitpdj.v0/reason_for_encounter/encoding"></mb-context>
                    <mb-context path="opdvisitpdj.v0/reason_for_encounter/subject"></mb-context>
                </div>
        
                {#each [...Array(symptom_sign)] as _, i}
                <p class="font-bold text-lg">Symptom</p>
                <div class="ml-4 md:ml-6 lg:ml-8 flex flex-col gap-3">
                    <mb-input path={`opdvisitpdj.v0/history/story_history/symptom_sign:${i}/symptoms`} label="Name" required></mb-input>
                    <mb-checkbox path={`opdvisitpdj.v0/history/story_history/symptom_sign:${i}/nil_significant`} label="Nil significant"></mb-checkbox>
                    
                    <p>Body Site</p>
                    {#each [...Array(body_site[i] || 1)] as _, j}
                    <mb-input path={`opdvisitpdj.v0/history/story_history/symptom_sign:${i}/body_site:${j}`}></mb-input>
                    {/each}
                    <div>
                        <sl-button type="neutral" class="mt-2" on:click={()=>{
                            body_site = {...body_site,[i]:body_site[i]?body_site[i]+1:2}}}><sl-icon slot="prefix" name="plus-square-fill"></sl-icon>Add Body site</sl-button>
                        {#if body_site[i]>1}
                        <sl-button on:click={()=>{
                            body_site = {...body_site,[i]:body_site[i]-1}}}><sl-icon slot="prefix" name="dash-square-fill"></sl-icon>Delete Body site</sl-button>
                        {/if}
                    </div>
        
                    <mb-input path={`opdvisitpdj.v0/history/story_history/symptom_sign:${i}/description`} label="Description"></mb-input>
                    <mb-date time path={`opdvisitpdj.v0/history/story_history/symptom_sign:${i}/episode_onset`} label="Episode onset"></mb-date>
        
                    <mb-select path={`opdvisitpdj.v0/history/story_history/symptom_sign:${i}/progression`} label="Progression">
                        <mb-option value="at0183" label="Worsening"></mb-option>
                        <mb-option value="at0182" label="Unchanged"></mb-option>
                        <mb-option value="at0181" label="Improving"></mb-option>
                        <mb-option value="at0184" label="Resolved"></mb-option>
                    </mb-select>
        
                    <p class="font-semibold">Modifying Factor</p>
                    {#each [...Array(modifying_factor[i] || 1)] as _, k}
                    <div class="border shadow-md rounded-lg flex flex-col gap-3 p-4">
                        <mb-input path={`opdvisitpdj.v0/history/story_history/symptom_sign:${i}/modifying_factor:${k}/factor`} label="Factor"></mb-input>
                        <mb-select path={`opdvisitpdj.v0/history/story_history/symptom_sign:${i}/modifying_factor:${k}/effect`} label="Effect">
                            <mb-option value="at0159" label="Relieves"></mb-option>
                            <mb-option value="at0156" label="No effect"></mb-option>
                            <mb-option value="at0158" label="Worsens"></mb-option>
                        </mb-select>
                    </div>
                    {/each}
                    <div>
                        <sl-button type="neutral" class="mt-2" on:click={()=>{
                            modifying_factor = {...modifying_factor,[i]:modifying_factor[i]?modifying_factor[i]+1:2}}}><sl-icon slot="prefix" name="plus-square-fill"></sl-icon>Add Modifying Factor</sl-button>
                        {#if modifying_factor[i]>1}
                        <sl-button on:click={()=>{
                            modifying_factor = {...modifying_factor,[i]:modifying_factor[i]-1}}}><sl-icon slot="prefix" name="dash-square-fill"></sl-icon>Delete Modifying Factor</sl-button>
                        {/if}
                    </div>
                    <mb-input path={`opdvisitpdj.v0/history/story_history/symptom_sign:${i}/comment`} label="Comment"></mb-input>
                    <p class="border-b-2 border-gray-300 mt-2"></p>
                </div>
                    {/each}
                    <div>
                        <sl-button type="neutral" class="mt-2" on:click={()=>{symptom_sign++;}}><sl-icon slot="prefix" name="plus-square-fill"></sl-icon>Add Symptom/Sign</sl-button>
                        {#if symptom_sign>1}
                        <sl-button on:click={()=>{symptom_sign--;}}><sl-icon slot="prefix" name="dash-square-fill"></sl-icon>Delete Symptom/Sign</sl-button>
                        {/if}
                    </div>
                
        
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
                <div class="flex flex-row-reverse font-medium">
                    <sl-button on:click={() => {navigate.show("Examination"); window.scrollTo(0,0)}}>
                        <sl-icon slot="suffix" name="arrow-right"></sl-icon>
                        Next
                    </sl-button>
                </div>
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
                <div class="flex">
                    <div class="w-full">
                        <sl-button on:click={() => {navigate.show("History"); window.scrollTo(0,0)}}>
                            <sl-icon slot="prefix" name="arrow-left"></sl-icon>
                            Back
                        </sl-button>
                    </div>
                    <div class="">
                        <sl-button on:click={() => {navigate.show("Diagnosis"); window.scrollTo(0,0)}}>
                            <sl-icon slot="suffix" name="arrow-right"></sl-icon>
                            Next
                        </sl-button>
                    </div>
                </div>
            </div>
            
        </sl-tab-panel>
        <sl-tab-panel name="Diagnosis">Diagnosis</sl-tab-panel>
        <sl-tab-panel name="Orders">Orders</sl-tab-panel>
    </sl-tab-group>
    <mb-context path="opdvisitpdj.v0/category"></mb-context>
    <mb-context path="opdvisitpdj.v0/language"></mb-context>
    <mb-context path="opdvisitpdj.v0/territory"></mb-context>
    <mb-context path="opdvisitpdj.v0/composer"></mb-context>
    <mb-submit class="mt-4">
        <sl-button size="medium" class="mt-4 w-full" type="neutral" {loading}>
            Submit
        </sl-button>
    </mb-submit>
</mb-form>