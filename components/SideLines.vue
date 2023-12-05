<template>
    <div id="side-lines">
        <div style="left: 20px;"><div></div></div>
        <div style="right: 20px;"><div></div></div>
    </div>
</template>

<style>
    #side-lines > div {
        position: fixed;
        top: calc(50% - (100vh - 200px) / 2);
        height: calc(100vh - 200px);
        color: var(--second-color);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        z-index: 1;
    }

    #side-lines > div > div {
        width: 1px;
        height: calc(100vh - 300px);
        background: var(--main-color);
        animation: line 1s 0.5s backwards;
    }

    #side-lines > div::before, #side-lines > div::after {
        content: '';
        display: inline-block;
        width: 6px;
        height: 6px;
        background: var(--main-color);
        animation: box 0.3s 1s backwards;
    }

    @keyframes box {
        from { transform: scale(0); }
    }

    @keyframes line {
        from { transform: scaleY(0); }
    }

    @media (max-width: 800px) { 
        #side-lines div {
            display: none;
        }
    }
</style>