<script lang="ts">
    export let loading;
    let problems = 1;
    let events = 1;
</script>
<mb-form>
    <mb-context path="opdvisitpdj.v0/context/start_time"></mb-context>
    <mb-context path="opdvisitpdj.v0/context/setting"></mb-context>
    {#each [...Array(problems)] as _, i}
    <div class="border shadow-lg p-5 rounded-lg flex flex-col gap-3 mt-5 md:p-10">
        {#if i>0}
        <div class="flex flex-row-reverse font-medium">
           <sl-button type="danger" on:click={()=>{problems--;}}><sl-icon slot="prefix" name="dash-square-fill"></sl-icon>Delete Problem</sl-button>
        </div>
        {/if}
        <mb-select path={`opdvisitpdj.v0/reason_for_encounter/presenting_problem${i}"`} label="Presenting problem">
            <mb-option value="386661006" label="Fever"></mb-option>
            <mb-option value="25064002" label="Headache"></mb-option>
        </mb-select>
    </div>
    {/each}
    <sl-button type="primary" class="mt-5" on:click={()=>{problems++;}}><sl-icon slot="prefix" name="plus-square-fill"></sl-icon>
        Add Problem
    </sl-button>
    <mb-context path="opdvisitpdj.v0/reason_for_encounter/language"></mb-context>
    <mb-context path="opdvisitpdj.v0/reason_for_encounter/encoding"></mb-context>
    <mb-context path="opdvisitpdj.v0/reason_for_encounter/subject"></mb-context>

    {#each [...Array(events)] as _, j}
    <div class="border shadow-lg p-5 rounded-lg flex flex-col gap-3 mt-5 md:p-10">
        {#if j>0}
        <div class="flex flex-row-reverse font-medium">
           <sl-button type="danger" on:click={()=>{events--;}}><sl-icon slot="prefix" name="dash-square-fill"></sl-icon>Delete Event</sl-button>
        </div>
        {/if}
        <mb-input path={`opdvisitpdj.v0/history/story_history/any_event:${j}/story:0`} label="Story"></mb-input>
        <mb-input path={`opdvisitpdj.v0/history/story_history/any_event:${j}/symptom_sign/symptoms`} label="Symptoms"></mb-input>
        <mb-checkbox path={`opdvisitpdj.v0/history/story_history/any_event:${j}/symptom_sign/nil_significant`} label="Nil significant"></mb-checkbox>
        <mb-input path={`opdvisitpdj.v0/history/story_history/any_event:${j}/symptom_sign/body_site:0`} label="Body site"></mb-input>
        <mb-input path={`opdvisitpdj.v0/history/story_history/any_event:${j}/symptom_sign/description`} label="Description"></mb-input>
        <mb-date time path={`opdvisitpdj.v0/history/story_history/any_event:${j}/symptom_sign/episode_onset`} label="Episode onset"></mb-date>
        <mb-select path={`opdvisitpdj.v0/history/story_history/any_event:${j}/symptom_sign/progression:0`} label="Progression">
            <mb-option value="at0183" label="Worsening"></mb-option>
            <mb-option value="at0182" label="Unchanged"></mb-option>
            <mb-option value="at0181" label="Improving"></mb-option>
            <mb-option value="at0184" label="Resolved"></mb-option>
        </mb-select>
        <mb-input path={`opdvisitpdj.v0/history/story_history/any_event:${j}/symptom_sign/modifying_factor:0/factor`} label="Factor"></mb-input>
        <mb-select path={`opdvisitpdj.v0/history/story_history/any_event:${j}/symptom_sign/modifying_factor:0/effect`} label="Effect">
            <mb-option value="at0159" label="Relieves"></mb-option>
            <mb-option value="at0156" label="No effect"></mb-option>
            <mb-option value="at0158" label="Worsens"></mb-option>
        </mb-select>
        <mb-input path={`opdvisitpdj.v0/history/story_history/any_event:${j}/symptom_sign/comment`} label="Comment"></mb-input>
        <mb-context path={`opdvisitpdj.v0/history/story_history/any_event:${j}/time`}></mb-context>
    </div>
    {/each}
    <sl-button type="primary" class="mt-5" on:click={()=>{events++;}}><sl-icon slot="prefix" name="plus-square-fill"></sl-icon>
        Add event
    </sl-button>
    <mb-context path="opdvisitpdj.v0/history/story_history/language"></mb-context>
    <mb-context path="opdvisitpdj.v0/history/story_history/encoding"></mb-context>
    <mb-context path="opdvisitpdj.v0/history/story_history/subject"></mb-context>
    <mb-input path="opdvisitpdj.v0/history/family_history/per_family_member:0/relationship" label="Relationship"></mb-input>
    <mb-input path="opdvisitpdj.v0/history/family_history/per_family_member:0/clinical_history:0/problem_diagnosis_name" label="Problem/diagnosis name"></mb-input>
    <mb-context path="opdvisitpdj.v0/history/family_history/language"></mb-context>
    <mb-context path="opdvisitpdj.v0/history/family_history/encoding"></mb-context>
    <mb-context path="opdvisitpdj.v0/history/family_history/subject"></mb-context>
    <mb-submit class="mt-4">
        <sl-button size="medium" class="mt-4 w-full" type="neutral" {loading}>
            Next
        </sl-button>
    </mb-submit>
</mb-form>