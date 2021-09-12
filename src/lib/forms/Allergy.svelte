<script lang="ts">
    import { slide } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import axios from "axios";
    import Repeatable from "../Repeatable.svelte";

    export let loading;

    let substance = {};
    let risks = 1;
</script>

<mb-form>
    {#each [...Array(risks)] as _, i}
    <div class="border shadow-lg p-5 rounded-lg flex flex-col gap-3 mt-5 md:p-10">
        <mb-search
                on:mb-input={(e) => {
                    e.target.data
                        ? (substance[i] = true)
                        : (substance[i] = false);
                }}
                label="Substance"
                hits={5}
                path={`pdjallergy.v0/adverse_reaction_list/adverse_reaction_risk:${i}/substance`}
            >
                <mb-filter value="<105590001" label="Substances" />
        </mb-search>
        <mb-date
            time
            path={`pdjallergy.v0/adverse_reaction_list/adverse_reaction_risk:${i}/onset_of_last_reaction`}
            label="Onset of reaction"
        />
        {#if substance[i]}
        <div class="flex flex-col gap-3" in:slide={{delay:40,duration:0,easing:quintOut}}>
            <mb-select
                path={`pdjallergy.v0/adverse_reaction_list/adverse_reaction_risk:${i}/status`}
                label="Status"
            >
                <mb-option value="at0127" label="Suspected" />
                <mb-option value="at0064" label="Likely" />
                <mb-option value="at0065" label="Confirmed" />
                <mb-option value="at0067" label="Resolved" />
                <mb-option value="at0066" label="Refuted" />
            </mb-select>
      
  
            <mb-text-select multiple
            path={`pdjallergy.v0/adverse_reaction_list/adverse_reaction_risk:${i}/reaction_event:0/manifestation:0`}
            label="Manifestation">
                <mb-option value="Rash" label="Rash" />
                <mb-option value="Itching" label="Itching" />
                <mb-option value="Sneezing" label="Sneezing" />
                <mb-option value="Watering of eyes" label="Watering of eyes" />
                <mb-option
                    value="Breathing difficulty"
                    label="Breathing difficulty"/>
                <mb-option value="Anaphylaxis" label="Anaphylaxis" />
            </mb-text-select>
            <mb-select
                path={`pdjallergy.v0/adverse_reaction_list/adverse_reaction_risk:${i}/reaction_event:0/severity_of_reaction`}
                label="Severity of reaction">
                <mb-option value="at0093" label="Mild" />
                <mb-option value="at0092" label="Moderate" />
                <mb-option value="at0090" label="Severe" />
            </mb-select>
            
            <mb-input
            path="pdjallergy.v0/adverse_reaction_list/adverse_reaction_risk:0/comment"
            label="Comment"/>
        </div>
        {/if}
        <div class="hidden">
            <mb-context path="pdjallergy.v0/category" />
            <mb-context path="pdjallergy.v0/context/start_time" />
            <mb-context path="pdjallergy.v0/context/setting" />
            <mb-context
                path="pdjallergy.v0/adverse_reaction_list/adverse_reaction_risk:0/subject"
            />
            <mb-context
                path="pdjallergy.v0/adverse_reaction_list/adverse_reaction_risk:0/language"
            />
            <mb-context
                path="pdjallergy.v0/adverse_reaction_list/adverse_reaction_risk:0/encoding"
            />
            {#if substance[i]}
                <div
                    class="flex flex-col gap-3"
                    in:slide={{ delay: 40, duration: 0, easing: quintOut }}
                >
                    <mb-select
                        path={`pdjallergy.v0/adverse_reaction_list/adverse_reaction_risk:${i}/status`}
                        label="Status"
                    >
                        <mb-option value="at0127" label="Suspected" />
                        <mb-option value="at0064" label="Likely" />
                        <mb-option value="at0065" label="Confirmed" />
                        <mb-option value="at0067" label="Resolved" />
                        <mb-option value="at0066" label="Refuted" />
                    </mb-select>

                    <mb-text-select
                        path={`pdjallergy.v0/adverse_reaction_list/adverse_reaction_risk:${i}/reaction_event:0/manifestation:0`}
                        label="Manifestation"
                    >
                        <mb-option value="Rash" label="Rash" />
                        <mb-option value="Itching" label="Itching" />
                        <mb-option value="Sneezing" label="Sneezing" />
                        <mb-option
                            value="Watering of eyes"
                            label="Watering of eyes"
                        />
                        <mb-option
                            value="Breathing difficulty"
                            label="Breathing difficulty"
                        />
                        <mb-option value="Anaphylaxis" label="Anaphylaxis" />
                    </mb-text-select>
                    <mb-select
                        path={`pdjallergy.v0/adverse_reaction_list/adverse_reaction_risk:${i}/reaction_event:0/severity_of_reaction`}
                        label="Severity of reaction"
                    >
                        <mb-option value="at0093" label="Mild" />
                        <mb-option value="at0092" label="Moderate" />
                        <mb-option value="at0090" label="Severe" />
                    </mb-select>

                    <mb-input
                        path="pdjallergy.v0/adverse_reaction_list/adverse_reaction_risk:0/comment"
                        label="Comment"
                    />
                </div>
            {/if}
            <div class="hidden">
                <mb-context path="pdjallergy.v0/category" />
                <mb-context path="pdjallergy.v0/context/start_time" />
                <mb-context path="pdjallergy.v0/context/setting" />
                <mb-context
                    path="pdjallergy.v0/adverse_reaction_list/adverse_reaction_risk:0/subject"
                />
                <mb-context
                    path="pdjallergy.v0/adverse_reaction_list/adverse_reaction_risk:0/language"
                />
                <mb-context
                    path="pdjallergy.v0/adverse_reaction_list/adverse_reaction_risk:0/encoding"
                />
            </div>
        </div>
    </div>
    {/each}

    <sl-button type="primary" class="mt-5" on:click={()=>{risks++;}}><sl-icon slot="prefix" name="plus-square-fill"></sl-icon>
        Add Allergy
    </sl-button>
    {#if risks>1}
    <sl-button on:click={()=>{risks--;}}><sl-icon slot="prefix" name="dash-square-fill"></sl-icon>Delete Allergy</sl-button>
    {/if}
    <mb-context path="pdjallergy.v0/composer" />
    <mb-context path="pdjallergy.v0/language" />
    <mb-context path="pdjallergy.v0/territory" />
    <mb-submit class="mt-4">
        <sl-button size="medium" class="mt-4 w-full" type="neutral" {loading}>
            Submit
        </sl-button>
    </mb-submit>
</mb-form>
