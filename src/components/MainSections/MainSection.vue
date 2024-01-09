<template>
    <div class="main-section">
        <div class="column">
            
            <SubSection title="Use Cases">
                <UseCaseSection/>
            </SubSection>
            <SubSection title="Get Started">
                <h2>Requirements</h2>
                Before installing Grapycal, make sure you have <a href="https://www.python.org/downloads/release/python-3117/">Python 3.11</a> installed.
                <h2>Install</h2>
                <p>
                    Enter the following command to install Grapycal and its built-in extensions.
                    <br/>
                    <code class="bg-black rounded-md p-1">pip install grapycal grapycal-builtin</code>
                </p>
                <h2>Quick Start</h2>
                <p>Enter the following command to start Grapycal.</p>
                    <code class="bg-black rounded-md p-1">grapycal</code>
                <p>Then go to <a href="http://localhost:9001">http://localhost:9001</a>. Have fun!
                </p>
                <h2>Documentation
                </h2>
                    <ul>
                        <li><a href="https://docs.grapycal.org/getting_started/installation.html">Getting Started</a></li>
                        <li><a href="https://docs.grapycal.org/contribution_guide/contribution.html">Contributing</a></li>
                    </ul>
            </SubSection>

            <SubSection title="Contribute">

                <p>
                    Start by visiting
                     the <a href="https://github.com/orgs/Grapycal/projects/2/views/1">Project Board</a> to see what we are working on. Pick one and assign yourself to it. If you have a new idea, you can also create a new issue.
                </p>
                <h2>What you can do</h2>
                <ul class="list-disc list-inside ml-4">
                            <li class="mb-2">Add features or fix bugs to the <a href="https://docs.grapycal.org/contribution_guide/project_overview.html#backend"
                                    >backend</a>.</li>
                            <li class="mb-2">Add features or fix bugs to the <a href="https://docs.grapycal.org/contribution_guide/project_overview.html#frontend"
                                    >frontend</a>.</li>
                            <li class="mb-2">Create a new extension for any domain you like (such as image processing or music
                                synthesis) by following <a href="https://docs.grapycal.org/contribution_guide/../getting_started/extension.html"
                                    >tutorial</a>.</li>
                            <li class="mb-2">Improve current extensions by adding new nodes or fixing bugs. Existing extensions are in
                                the extensions folder of the <a href="https://github.com/Grapycal/Grapycal"
                                    >Grapycal repository</a>.</li>
                            <li class="mb-2">Improve the documentation.</li>
                            <li class="mb-2">Improve the <a href="https://www.grapycal.org"
                                    >Website</a> by modifying the source code: <a
                                    href="https://github.com/Grapycal/Main-Page" >Main-Page</a>.
                            </li>
                            <li class="mb-2">Create issues to report bugs or request features.</li>
                            <li class="mb-2">Leave comments on the <a href="https://github.com/orgs/Grapycal/projects/2/views/1">Project Board</a> with your thoughts to the existing plans.</li>
                        </ul>
                
                <h2>To start contributing</h2>
                <ol>
                    <li>Please <a href="https://docs.grapycal.org/contribution_guide/../getting_started/installation.html#install-from-source">install Grapycal from source</a>.</li>
                    <li>Play around with Grapycal and feel how Grapycal helps you as a user. Find out what you like and what you don't like. If you feel something is missing, you can add it and create a <a href="https://github.com/Grapycal/Grapycal/pulls">pull request</a> or <a href="https://github.com/Grapycal/Grapycal/issues">open an issue</a>.</li>
                    <li>Refer to the <a href="https://docs.grapycal.org/contribution_guide/project_overview.html">project overview</a> to understand the project structure.</li>
                    <li>If you don't know where to start, visit the <a href="https://github.com/orgs/Grapycal/projects/2/views/1">Project Board</a>.
                         Find a topic that interests you and assign yourself to it. If you have a new idea, you can also create a new topic.</li>
                </ol>
                <div class="flex justify-center items-center my-4">
                    <img src="https://i.imgur.com/azSy00h.jpg" width="800px" alt="Discussion:Plans" />
                </div>
                
                <p>To discuss with us, feel free to go to <a href="https://github.com/Grapycal/Grapycal/discussions">Discussion</a> or join the <a href="https://discord.gg/adNQcS42CT">Discord server</a>.</p>
                <div class="flex justify-center items-center my-4">
                    <img src="https://i.imgur.com/qZmegjO.jpg" width="800px" alt="Discord server" />
                </div>
                
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
    padding: 50px 20px;
    margin: auto;
}
</style>