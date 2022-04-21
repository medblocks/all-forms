<mb-form class="flex flex-col gap-3 p-5 shadow-lg rounded-lg border">
    <mb-quantity default="Cel" path="body_temperature_check.v0/body_temperature/any_event:0/temperature" label="Temperature">
        <mb-unit unit="Cel" label="Cel" min="0" max="100"></mb-unit>
        <mb-unit unit="[degF]" label="[degF]" min="30" max="200"></mb-unit>
    </mb-quantity>
    <mb-context path="body_temperature_check.v0/body_temperature/any_event:0/time"></mb-context>
    <mb-select path="body_temperature_check.v0/body_temperature/location_of_measurement" label="Location of measurement" terminology="local">
    <mb-option value="at0061" label="Forehead"></mb-option>
    </mb-select>
    <mb-context path="body_temperature_check.v0/body_temperature/language"></mb-context>
    <mb-context path="body_temperature_check.v0/body_temperature/encoding"></mb-context>
    <mb-context path="body_temperature_check.v0/body_temperature/subject"></mb-context>
    <mb-context path="body_temperature_check.v0/category"></mb-context>
    <mb-context path="body_temperature_check.v0/language"></mb-context>
    <mb-context path="body_temperature_check.v0/territory"></mb-context>
    <mb-context path="body_temperature_check.v0/composer"></mb-context>

    
    <mb-submit>
        <sl-button type="neutral">Submit</sl-button>
    </mb-submit>
</mb-form>
