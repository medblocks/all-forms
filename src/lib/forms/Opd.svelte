<script lang="ts">
    export let loading;
    let problems = 1;
    let symptom_sign = 1;
    let body_site = 1;
    let modifying_factor = 1;
    let family_member = 1;
</script>
<mb-form>
    <div class="border shadow-lg p-5 rounded-lg flex flex-col gap-3 mt-5 md:p-10">
        <mb-context path="opdvisitpdj.v0/context/start_time"></mb-context>
        <mb-context path="opdvisitpdj.v0/context/setting"></mb-context>
        {#each [...Array(problems)] as _, i}
        <div class="border shadow-lg p-5 rounded-lg flex flex-col gap-3 md:p-10">
            <mb-select path={`opdvisitpdj.v0/reason_for_encounter/presenting_problem:${i}`} label="Presenting problem">
                <mb-option value="386661006" label="Fever"></mb-option>
                <mb-option value="25064002" label="Headache"></mb-option>
            </mb-select>
        </div>
        {/each}
        <div>
            <sl-button type="primary" class="mt-5" on:click={()=>{problems++;}}><sl-icon slot="prefix" name="plus-square-fill"></sl-icon>Add Problem</sl-button>
            {#if problems>1}
            <sl-button on:click={()=>{problems--;}}><sl-icon slot="prefix" name="dash-square-fill"></sl-icon>Delete Problem</sl-button>
            {/if}
        </div>
        <div>
            <mb-context path="opdvisitpdj.v0/reason_for_encounter/language"></mb-context>
            <mb-context path="opdvisitpdj.v0/reason_for_encounter/encoding"></mb-context>
            <mb-context path="opdvisitpdj.v0/reason_for_encounter/subject"></mb-context>
            <mb-input path="opdvisitpdj.v0/history/story_history/story" label="Story"></mb-input>
        </div>

        {#each [...Array(symptom_sign)] as _, i}
        <div class="border shadow-lg p-5 rounded-lg flex flex-col gap-3 mt-5 md:p-10">
            <p class="font-bold">Symptom / Sign</p>
            <mb-input path={`opdvisitpdj.v0/history/story_history/symptom_sign:${i}/symptoms`} label="Symptoms"></mb-input>
            <mb-checkbox path={`opdvisitpdj.v0/history/story_history/symptom_sign:${i}/nil_significant`} label="Nil significant"></mb-checkbox>
            {#each [...Array(body_site)] as _, j}
            <div class="border shadow-lg p-5 rounded-lg flex flex-col gap-3 mt-5 md:p-10">
                <mb-input path={`opdvisitpdj.v0/history/story_history/symptom_sign:${i}/body_site:${j}`} label="Body site"></mb-input>
            </div>
            {/each}
            <div>
                <sl-button type="primary" class="mt-5" on:click={()=>{body_site++;}}><sl-icon slot="prefix" name="plus-square-fill"></sl-icon>Add Body site</sl-button>
                {#if body_site>1}
                <sl-button on:click={()=>{body_site--;}}><sl-icon slot="prefix" name="dash-square-fill"></sl-icon>Delete Body site</sl-button>
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

            {#each [...Array(modifying_factor)] as _, k}
            <div class="border shadow-lg p-5 rounded-lg flex flex-col gap-3 mt-5 md:p-10">
                <p class="font-bold">Modifying Factor</p>
                <mb-input path={`opdvisitpdj.v0/history/story_history/symptom_sign:${i}/modifying_factor:${k}/factor`} label="Factor"></mb-input>
                <mb-select path={`opdvisitpdj.v0/history/story_history/symptom_sign:${i}/modifying_factor:${k}/effect`} label="Effect">
                    <mb-option value="at0159" label="Relieves"></mb-option>
                    <mb-option value="at0156" label="No effect"></mb-option>
                    <mb-option value="at0158" label="Worsens"></mb-option>
                </mb-select>
            </div>
            {/each}
            <div>
                <sl-button type="primary" class="mt-5" on:click={()=>{modifying_factor++;}}><sl-icon slot="prefix" name="plus-square-fill"></sl-icon>Add Modifying Factor</sl-button>
                {#if modifying_factor>1}
                <sl-button on:click={()=>{modifying_factor--;}}><sl-icon slot="prefix" name="dash-square-fill"></sl-icon>Delete Modifying Factor</sl-button>
                {/if}
            </div>
            <mb-input path={`opdvisitpdj.v0/history/story_history/symptom_sign:${i}/comment`} label="Comment"></mb-input>
        </div>
        {/each}
        <div>
            <sl-button type="primary" class="mt-5" on:click={()=>{symptom_sign++;}}><sl-icon slot="prefix" name="plus-square-fill"></sl-icon>Add Symptom/Sign</sl-button>
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

        {#each [...Array(family_member)] as _, i}
        <div class="border shadow-lg p-5 rounded-lg flex flex-col gap-3 mt-5 md:p-10">
            <mb-input path={`opdvisitpdj.v0/history/family_history/per_family_member:${i}/relationship`} label="Relationship"></mb-input>
            <mb-input path={`opdvisitpdj.v0/history/family_history/per_family_member:${i}/clinical_history/problem_diagnosis_name`} label="Problem/diagnosis name"></mb-input>
        </div>
        {/each}

        <div>
            <sl-button type="primary" class="mt-5" on:click={()=>{family_member++;}}><sl-icon slot="prefix" name="plus-square-fill"></sl-icon>Add Family Member</sl-button>
            {#if family_member>1}
            <sl-button on:click={()=>{family_member--;}}><sl-icon slot="prefix" name="dash-square-fill"></sl-icon>Delete Family Member</sl-button>
            {/if}
        </div>
        <mb-context path="opdvisitpdj.v0/history/family_history/language"></mb-context>
        <mb-context path="opdvisitpdj.v0/history/family_history/encoding"></mb-context>
        <mb-context path="opdvisitpdj.v0/history/family_history/subject"></mb-context>
        <mb-submit class="mt-4">
            <sl-button size="medium" class="mt-4 w-full" type="neutral" {loading}>
                Next
            </sl-button>
        </mb-submit>
    </div>
</mb-form>