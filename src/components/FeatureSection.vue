<template>
    <div class="container">
        <FeatureCard img="https://i.imgur.com/DFvavhw.png">
            <template #title>
                <h1>Interactive</h1>
            </template>
            <template #content>
                <p>Run different part of code in a controllable order, watch variables in real-time, and easily track the active node</p>
            </template>
        </FeatureCard>
        <FeatureCard reverse="true">
            <template #title>
                <h1>Dynamic</h1>
            </template>
            <template #content>
                <p>Modify the running graph for instant changes in its behavior, such as adjusting parameters, adding or removing nodes from a workflow, and terminating a loop</p>
            </template>

        </FeatureCard>
        <FeatureCard>
            <template #title>
                <h1>Extendable</h1>
            </template>
            <template #content>
                <p>Create custom nodes from Python libraries of the domain you like, such as deep learning, robotics, or music synthesis</p>
            </template>

        </FeatureCard>
        <FeatureCard reverse="true">
            <template #title>
                <h1>Collaborative</h1>
            </template>
            <template #content>
                <p>With Grapycal’s extension system, nodes for various domains can be shared and mixed to form powerful tools or artworksBtw, real-time collab is supported</p>
            </template>

        </FeatureCard>
    </div>
</template>

<style scoped>
.container {
    padding: 60px 0px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    background-size: cover;
}
</style>