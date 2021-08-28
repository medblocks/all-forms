<script lang="ts">
    import EnvironmentConfig from "./EnvironmentConfig.svelte";
    import FormList from "./FormList.svelte";
</script>

<div class="max-w-prose">
    <p>
        A collection of real world hospital forms built using <a
            href="https://github.com/medblocks/medblocks-ui">Medblocks UI.</a
        >
        Please post an EHR ID and the templates to your CDR before testing out the
        forms. Make sure to set your environment variables down below before continuing.
    </p>
</div>
<FormList />
<EnvironmentConfig />
