<script lang="ts" context="module">
    import { Link } from "svelte-routing";
    import Allergy from "./forms/Allergy.svelte";
    import BloodPressure from "./forms/BloodPressure.svelte";
    import CovidForm from "./forms/CovidForm.svelte";
    import Opd from "./forms/Opd.svelte";
    import BodyTemperatureCheck from "./forms/body_temperature_check.svelte";

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
        },
        {
            name: 'Covid Form',
            id: 'covid.form.v1',
            component: CovidForm,
            opt: "covid.form.v1.opt"
        },
        {
            name: 'Body Temperature check',
            id: 'body_temperature_check.v0',
            component: BodyTemperatureCheck,
            opt: "body_temperature_check.v0.opt"
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
