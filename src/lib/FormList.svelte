<script lang="ts" context="module">
    import { Link } from "svelte-routing";
    import Allergy from "./forms/Allergy.svelte";
import BloodPressure from "./forms/BloodPressure.svelte";
    import Opd from "./forms/Opd.svelte";
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
            opt: "pdjallergy.vo.opt",
        },
        {
            name: "OPD",
            id: "opdvisitpdj.v0",
            component: Opd,
            opt: "opdvisitpdj.v0.opt",
        },
        {
            name: 'Blood Pressure',
            id: 'petetest',
            component: BloodPressure,
            opt: "petetest.opt"
        }
    ];
</script>

<div>
    
    {#each forms as form}
        <div class="bg-gray-100 flex p-3 m-3 border justify-between rounded-md">
            <Link class="font-medium" to={form.name.replaceAll(' ', '_')}>{form.name}</Link>
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
