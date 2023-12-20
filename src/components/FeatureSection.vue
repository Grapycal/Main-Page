<template>
    <div class="container">
        <FeatureCard title="Interactive" img="https://i.imgur.com/DFvavhw.png">
            Run different part of code in a controllable order, watch variables in real-time, and easily track the active node
        </FeatureCard>

        <FeatureCard title="Dynamic" img="https://i.imgur.com/DFvavhw.png" reverse>
            Modify the running graph for instant changes in its behavior, such as adjusting parameters, adding or removing nodes from a workflow, and terminating a loop
        </FeatureCard>

        <FeatureCard title="Extendable" img="https://i.imgur.com/DFvavhw.png">
            Create custom nodes from Python libraries of the domain you like, such as deep learning, robotics, or music synthesis
        </FeatureCard>

        <FeatureCard title="Collaborative" img="https://i.imgur.com/DFvavhw.png" reverse>
            With Grapycal’s extension system, nodes for various domains can be shared and mixed to form powerful tools or artworks
            <br>
            Btw, real-time collab is supported
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