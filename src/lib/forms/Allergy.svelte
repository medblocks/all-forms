<script lang="ts">
    import { fade } from "svelte/transition";
    export let loading;
    let reactions = [];
    let risks = 1;
    let event = 1;
  </script>
  
  <mb-form>
    {#each [...Array(risks)] as _, i}
    <div class="border shadow-lg p-5 rounded-lg flex flex-col gap-3 mt-5">
        <mb-input
        path={`pdjallergy.v0/adverse_reaction_list/adverse_reaction_risk:${i}/substance`}
        label="Substance"
        required
        on:mb-input={(e) => {
            e.target.data ? (reactions[i] = true) : (reactions[i] = false);
        }}
        />
        <mb-date
        time
        path={`pdjallergy.v0/adverse_reaction_list/adverse_reaction_risk:${i}/onset_of_last_reaction`}
        label="Onset of reaction"
        />
        {#if reactions[i]}
        <div class="flex flex-col gap-3" transition:fade>
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
            {#each [...Array(event)] as _, j}
            <div class="flex flex-col gap-3">
                <mb-text-select
                    path={`pdjallergy.v0/adverse_reaction_list/adverse_reaction_risk:${i}/reaction_event:${j}/manifestation:0`}
                    label="Manifestation"
                >
                    <mb-option value="Rash" label="Rash" />
                    <mb-option value="Itching" label="Itching" />
                    <mb-option value="Sneezing" label="Sneezing" />
                    <mb-option value="Watering of eyes" label="Watering of eyes" />
                    <mb-option
                    value="Breathing difficulty"
                    label="Breathing difficulty"
                    />
                    <mb-option value="Anaphylaxis" label="Anaphylaxis" />
                </mb-text-select>
                <mb-select
                    path={`pdjallergy.v0/adverse_reaction_list/adverse_reaction_risk:${i}/reaction_event:${j}/severity_of_reaction`}
                    label="Severity of reaction"
                >
                    <mb-option value="at0093" label="Mild" />
                    <mb-option value="at0092" label="Moderate" />
                    <mb-option value="at0090" label="Severe" />
                </mb-select>
            </div>
            {/each}
            <sl-button class="mt-2 w-max" on:click={() => {event++;}}>Add another manifestation</sl-button>
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
    {/each}
    <sl-button class="mt-5" on:click={() => {risks++;}}>Add another reaction</sl-button>
    <mb-context path="pdjallergy.v0/composer" />
    <mb-context path="pdjallergy.v0/language" />
    <mb-context path="pdjallergy.v0/territory" />
    <mb-submit class="mt-4">
      <sl-button size="medium" class="mt-4 w-full" type="neutral" {loading}>
        Submit
      </sl-button>
    </mb-submit>
  </mb-form>