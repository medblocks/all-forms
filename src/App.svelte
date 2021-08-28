<script lang="ts">
  import "./index.css";
  import "medblocks-ui";
  import { Router, Route } from "svelte-routing";
  import "@shoelace-style/shoelace/dist/themes/light.css";
  import "@shoelace-style/shoelace/dist/shoelace";
  import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";
  import Home from "./lib/Home.svelte";
  import { forms } from "./lib/FormList.svelte";
  // Load icons directly from shoelace CDN
  setBasePath(
    "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.49/dist/"
  );
</script>

<main class="p-2 md:p-12 flex flex-col gap-5">
  <div class="flex justify-between">
    <span class="flex gap-3">
      <img src="medblocks-ui-logo.png" class="w-6 h-8" alt="" />
      <h1 class="text-2xl font-medium text-gray-700">Medblocks Forms</h1>
    </span>
    <sl-button type="neutral" href="https://github.com/medblocks/all-forms" target="_blank">
      <sl-icon slot="suffix" name="github" />
      Github
    </sl-button>
  </div>
  <Router>
    <Route path="/"><Home /></Route>
    {#each forms as form}
      <Route path={form.url} component={form.component} />
    {/each}
  </Router>
</main>

<style>
</style>
