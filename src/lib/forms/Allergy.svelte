<script lang="ts">

    import axios from 'axios';
    const ehrId = "5bd1d6f5-4950-439e-b7d5-37adb43573f9";
    const templateId= 'pdjallergy.vo'
    let substances = []    
    const handleSubmit = (e: any) => {
        const data = e.detail
        console.log(data);
        axios.post("http://localhost:9090/ehrbase/rest/ecis/v1/composition", data,{
            params: { format: "FLAT", templateId, ehrId:ehrId }
        })
        .then(response => {
            console.log("Posted", response.data)
        })
        .catch(err=>{
            console.log(err)
        })
    };
    const addSubstance = (e:any)=>{
        substances = [...substances,e.detail]
        console.log(e)
    }
</script>
<main>
    <mb-form ref="formRef" on:mb-submit={handleSubmit}>
        {#each substances as substance, i}
            {JSON.stringify(substance)}
            <mb-input path="pdjallergy.v0/adverse_reaction_list/adverse_reaction_risk:0/substance:${i}" label="Substance"></mb-input>
        {/each}
        <sl-button on:click={addSubstance} size="medium" class="mt-4 w-full" type="info">
        Add new substance
        </sl-button>
        <mb-select path="pdjallergy.v0/adverse_reaction_list/adverse_reaction_risk:0/status" label="Status">
            <mb-option value="at0127" label="Suspected"></mb-option>
            <mb-option value="at0064" label="Likely"></mb-option>
            <mb-option value="at0065" label="Confirmed"></mb-option>
            <mb-option value="at0067" label="Resolved"></mb-option>
            <mb-option value="at0066" label="Refuted"></mb-option>
        </mb-select>
        <mb-date time class="mt-6" path="pdjallergy.v0/adverse_reaction_list/adverse_reaction_risk:0/onset_of_last_reaction" label="Onset of last reaction"></mb-date>
        <mb-select path="pdjallergy.v0/adverse_reaction_list/adverse_reaction_risk:0/reaction_event:0/severity_of_reaction" label="Severity of reaction">
            <mb-option value="at0093" label="Mild"></mb-option>
            <mb-option value="at0092" label="Moderate"></mb-option>
            <mb-option value="at0090" label="Severe"></mb-option>
        </mb-select>
        <mb-input path="pdjallergy.v0/adverse_reaction_list/adverse_reaction_risk:0/comment" label="Comment"></mb-input>
        <mb-context path="pdjallergy.v0/category"></mb-context>
        <mb-context path="pdjallergy.v0/context/start_time"></mb-context>
        <mb-context path="pdjallergy.v0/context/setting"></mb-context>
        <mb-context path="pdjallergy.v0/adverse_reaction_list/adverse_reaction_risk:0/subject"></mb-context>
        <mb-context path="pdjallergy.v0/adverse_reaction_list/adverse_reaction_risk:0/language"></mb-context>
        <mb-context path="pdjallergy.v0/adverse_reaction_list/adverse_reaction_risk:0/encoding"></mb-context>
        <mb-context path="pdjallergy.v0/composer"></mb-context>
        <mb-context path="pdjallergy.v0/language"></mb-context>
        <mb-context path="pdjallergy.v0/territory"></mb-context>
        <mb-submit class="mt-4">
            <sl-button size="medium" class="mt-4 w-full" type="info">
            Submit
            </sl-button>
        </mb-submit>
    </mb-form>
</main>

