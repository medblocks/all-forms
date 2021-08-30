<script lang="ts">
    import axios from "axios";
    import { store } from "./localStore";

    export let component;
    export let name;
    export let id;

    let loading = false;
    let success;
    let failure;

    const handleSubmit = async (e: CustomEvent) => {
        const composition = e.detail;
        console.log({ composition });
        
        try {
            loading = true
            const config = JSON.parse($store);
            const { ehrscape: baseURL, username, password, ehrId } = config;
            console.log(config);
            const ehrscape = axios.create({
                baseURL,
                auth: { username, password },
            });
            const response = await ehrscape.post("/composition", composition, {
                params: { format: "FLAT", templateId: id, ehrId },
            });
            console.log(response.data);
            loading = false
            success.toast();
        } catch (e) {
            loading = false
            console.error(e);
            failure.toast();
        }
    };
</script>

<div on:mb-submit={handleSubmit}>
    <h1 class="text-xl">{name}</h1>
    <svelte:component this={component} {loading} />
    <sl-alert bind:this={success} type="success" duration="3000" closable>
        <sl-icon slot="icon" name="check2-circle" />
        <strong>Your form has been submitted</strong><br />
        Composition created in CDR!
    </sl-alert>
    <sl-alert bind:this={failure} type="danger" duration="3000" closable>
        <sl-icon slot="icon" name="exclamation-octagon" />
        <strong>There was an error in saving the composition</strong><br />
        Please look at the console for more info
    </sl-alert>
</div>
