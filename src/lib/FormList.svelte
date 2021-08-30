<script lang="ts" context="module">
    import { Link } from "svelte-routing";
    import AnotherForm from "./forms/AnotherForm.svelte";
    import Allergy from "./forms/Allergy.svelte";
    export const forms: {
        name: string;
        id: string;
        component: any;
        opt: string;
    }[] = [
        {
            name: "Allergy",
            id: "pdjallergy.vo",
            component: Allergy,
            opt: "example.opt",
        },
        {
            name: "Another Form",
            id: "another",
            component: AnotherForm,
            opt: "example.opt",
        },
    ];
</script>

<div>
    {#each forms as form}
        <div class="bg-gray-100 flex p-3 m-3 border justify-between rounded-md">
            <Link class="font-medium" to={form.name}>{form.name}</Link>
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
