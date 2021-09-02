<script lang="ts">
  import "./index.css";
  import "medblocks-ui";
  import "medblocks-ui/dist/shoelace";

  import { Router, Route } from "svelte-routing";
  import Home from "./lib/Home.svelte";
  import { forms } from "./lib/FormList.svelte";
  import FormWrapper from "././lib/FormWrapper.svelte";
</script>

<main class="p-5 md:p-12 flex flex-col gap-5">
  <div class="flex justify-between">
    <a class="flex gap-3" href="/">
      <img src="medblocks-ui-logo.png" class="w-6 h-8" alt="" />
      <h1 class="text-2xl font-medium text-gray-700">Medblocks Forms</h1>
    </a>
    <sl-button
      type="neutral"
      href="https://github.com/medblocks/all-forms"
      target="_blank"
    >
      <sl-icon slot="suffix" name="github" />
      Github
    </sl-button>
  </div>
  <Router>
    <Route path="/"><Home /></Route>
    {#each forms as form}
      <Route path={form.name.replaceAll(" ", "_")}>
        <FormWrapper id={form.id} component={form.component} name={form.name} />
      </Route>
    {/each}
  </Router>
</main>

<style>
</style>
