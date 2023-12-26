<template>
    <div class="main-section">
        <div class="column">
            
            <SubSection title="Use Cases">
                <UseCaseSection/>
            </SubSection>
            <SubSection title="Get Started">
                <p>Install</p>
                <p>Quick Start</p>
                <p>Documentation
                    <ul>
                        <li><a href="https://docs.grapycal.org/getting_started/installation.html">Getting Started</a></li>
                        <li><a href="https://docs.grapycal.org/contribution_guide/contribution.html">Contributing</a></li>
                    </ul>
                </p>
            </SubSection>

            <SubSection title="Contribute">

            </SubSection>

            <PeopleSection></PeopleSection>
        </div>

    </div>
</template>

<script setup lang="ts">
// props: title

const props = defineProps({

})

</script>

<style scoped>
.main-section {
    background-color: var(--color-background);
}
.column {
    
    max-width: 1400px;
    padding: 50px 50px;
    margin: auto;
}
</style>