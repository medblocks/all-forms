<mb-form class="flex flex-col gap-3 p-5 shadow-lg rounded-lg border">
    <mb-context path="petetest/category" />
    <mb-context path="petetest/context/start_time" />
    <mb-context path="petetest/context/setting" />
    <mb-quantity
        default="mm[Hg]"
        path="petetest/blood_pressure/any_event:0/systolic"
        label="Systolic"
    >
        <mb-unit unit="mm[Hg]" label="mm[Hg]" />
    </mb-quantity>
    <mb-quantity
        default="mm[Hg]"
        path="petetest/blood_pressure/any_event:0/diastolic"
        label="Diastolic"
    >
        <mb-unit unit="mm[Hg]" label="mm[Hg]" />
    </mb-quantity>
    <mb-context path="petetest/blood_pressure/any_event:0/time" />

    <mb-context path="petetest/blood_pressure/subject" />
    <mb-context path="petetest/blood_pressure/language" />
    <mb-context path="petetest/blood_pressure/encoding" />
    <mb-context path="petetest/composer" />
    <mb-context path="petetest/language" />
    <mb-context path="petetest/territory" />
    
    <mb-submit>
        <sl-button type="neutral">Submit</sl-button>
    </mb-submit>
</mb-form>
