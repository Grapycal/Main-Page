<template>
    <div class="cont">
        <FeatureCard title="Interactive" img="https://i.imgur.com/ksY8cBr.mp4">
            Run different part of code in an arbitary order, watch data in real-time, and easily track the active node
        </FeatureCard>

        <FeatureCard title="Dynamic" img="https://i.imgur.com/DFvavhw.png" reverse>
            Modify the running graph on the fly for instant changes in its behavior, including adjusting parameters, adding or removing nodes from a workflow, and terminating a loop
        </FeatureCard>

        <FeatureCard title="Extendable" img="https://i.imgur.com/0QoOn0L.png">
            Create custom nodes from Python libraries of any domain, such as deep learning, robotics, or music synthesis
        </FeatureCard>

        <FeatureCard title="Collaborative" img="https://i.imgur.com/CwkREu8.png" reverse>
            With Grapycal’s extension system, nodes for various domains can be shared and mixed to form powerful tools or artworks
            <br>
            Btw, real-time collab is supported
        </FeatureCard>
    </div>
</template>
<style scoped>
.cont {
    padding: 60px 0px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    background-size: cover;
    /* background-color: #090E16; */
    background: linear-gradient(180deg, #090e1600 0%, #090E16 50%);
}
</style>