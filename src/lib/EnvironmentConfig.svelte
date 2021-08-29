<script lang="ts">
    import { onMount } from "svelte";
    import { store } from "./localStore";
    let openehr, ehrscape, username, password, ehrId;
    let success, failure;
    onMount(() => {
        // Array destructuring: https://basarat.gitbook.io/typescript/future-javascript/destructuring
        ({
            openehr = "",
            ehrscape = "",
            username = "",
            password = "",
            ehrId = "",
        } = JSON.parse($store) ?? {});
    });
    const save = () => {
        try {
            store.setLocal(JSON.stringify({ openehr, ehrscape, username, password, ehrId }))
            success.toast();
        } catch (e) {
            failure.toast();
            console.error(e);
        }
    };
</script>

<div>
    <p class="text-2xl text-gray-600 mb-3">Environment Variables</p>
    <sl-form on:sl-submit|preventDefault={save}>
        <div class="flex flex-col gap-3 shadow-lg border-t p-6 rounded-lg">
            <sl-input
                label="openEHR REST API"
                on:sl-input={(e) => {
                    openehr = e.target.value;
                }}
                value={openehr}
                type="url"
                placeholder="eg: http://ehrbase(with CORS enabled)/ehrbase/rest/openehr/v1"
            />
            <sl-input
                label="EHRScape API"
                on:sl-input={(e) => {
                    ehrscape = e.target.value;
                }}
                value={ehrscape}
                type="url"
                placeholder="eg: http://ehrbase(with CORS enabled)/rest/ecis/v1"
            />
            <sl-input
                label="EHR ID"
                on:sl-input={(e) => {
                    ehrId = e.target.value;
                }}
                value={ehrId}
                placeholder="eg: 123e4567-e89b-12d3-a456-426652340000"
            />

            <p class="text-lg mt-3 text-gray-600">Basic Authentication</p>
            <sl-input
                label="Username"
                on:sl-input={(e) => {
                    username = e.target.value;
                }}
                value={username}
            />
            <sl-input
                label="Password"
                on:sl-input={(e) => {
                    password = e.target.value;
                }}
                value={password}
                type="password"
                toggle-password
            />
            <sl-button submit type="success">Save</sl-button>
        </div>
    </sl-form>
    <sl-alert bind:this={success} type="success" duration="3000" closable>
        <sl-icon slot="icon" name="check2-circle" />
        <strong>Your changes have been saved</strong><br />
        This configuration will now be used
    </sl-alert>
    <sl-alert bind:this={failure} type="danger" duration="3000" closable>
        <sl-icon slot="icon" name="exclamation-octagon" />
        <strong>Something went wrong</strong><br />
        Please look at the console for more info
    </sl-alert>
</div>
