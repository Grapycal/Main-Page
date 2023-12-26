<template>
    <div class="cont">
        <FeatureCard title="Interactive" img="https://cdn.discordapp.com/attachments/1181143637178982483/1187109070835023962/b.mp4">
            Run different part of code in a controllable order, watch variables in real-time, and easily track the active node
        </FeatureCard>

        <FeatureCard title="Dynamic" img="https://i.imgur.com/DFvavhw.png" reverse>
            Modify the running graph for instant changes in its behavior, such as adjusting parameters, adding or removing nodes from a workflow, and terminating a loop
        </FeatureCard>

        <FeatureCard title="Extendable" img="https://media.discordapp.net/attachments/1181143637178982483/1187115414967300127/image.png?ex=6595b662&is=65834162&hm=7c88484004d12fa93c1528ae1e1689a16062c5af9235e380db0184d49aeb506f&=&format=webp&quality=lossless&width=1440&height=524">
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