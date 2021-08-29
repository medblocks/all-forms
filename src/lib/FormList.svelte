<script lang="ts" context="module">
    import { Link } from "svelte-routing";
    import AnotherForm from "./forms/AnotherForm.svelte";
    import ExampleForm from "./forms/ExampleForm.svelte";
    export const forms = [
        {
            name: "Example Form",
            url: "example",
            component: ExampleForm,
            opt: "example.opt",
        },
        {
            name: "Another Form",
            url: "another",
            component: AnotherForm,
            opt: "example.opt",
        },
    ];
</script>

<div>
    {#each forms as form}
        <div class="bg-gray-100 flex p-3 m-3 border justify-between rounded-md">
            <Link class="font-medium" to={form.url}>{form.name}</Link>
            <sl-tooltip content="Download Template">
                <sl-icon-button
                    download
                    href={`opts/${form.opt}`}
                    name="download"
                    label="Download"
                />
            </sl-tooltip>
        </div>
    {/each}
</div>
