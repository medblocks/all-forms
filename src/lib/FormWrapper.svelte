<script lang="ts">
    export let component;

    let loading = false;
    let success;
    let failure;
    const handleSubmit = async (e: CustomEvent) => {
        // TODO: Implement axios and make request to services
        console.log(e.detail);
        success.toast();
    };
</script>

<div>
    <svelte:component this={component} {loading} on:mb-submit={handleSubmit} />
    <sl-alert bind:this={success} type="success" duration="3000" closable>
        <sl-icon slot="icon" name="check2-circle" />
        <strong>Your Composition has been persisted!</strong><br />
        Response from the CDR was 201
    </sl-alert>
    <sl-alert bind:this={failure} type="danger" duration="3000" closable>
        <sl-icon slot="icon" name="exclamation-octagon" />
        <strong>There was an error in saving the composition</strong><br />
        Please look at the console for more info
    </sl-alert>
</div>
