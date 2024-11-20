<template>
    <div class="wrap">
        <div class="items-wrap">
            <div class="items marquee">
                <div class="item">TypeScript</div>
                <div class="item">Vue</div>
                <div class="item">HTML</div>
                <div class="item">CSS</div>
                <div class="item">Laravel</div>
                <div class="item">Django</div>
                <div class="item">Rest API</div>
                <div class="item">SPA</div>
                <div class="item">JavaScript</div>
                <div class="item">JQuery</div>
                <div class="item">Pinia</div>
                <div class="item">PHP</div>
                <div class="item">MySQL</div>
            </div>

            <div aria-hidden="true" class="items marquee">
                <div class="item">TypeScript</div>
                <div class="item">Vue</div>
                <div class="item">HTML</div>
                <div class="item">CSS</div>
                <div class="item">Laravel</div>
                <div class="item">Django</div>
                <div class="item">Rest API</div>
                <div class="item">SPA</div>
                <div class="item">JavaScript</div>
                <div class="item">JQuery</div>
                <div class="item">Pinia</div>
                <div class="item">PHP</div>
                <div class="item">MySQL</div>
            </div>
        </div>
        <div class="items-wrap">
            <div class="items marquee reverce">
                <div class="item">Soft Skill</div>
                <div class="item">Hard Skills</div>
                <div class="item">Clear</div>
                <div class="item">Quickly</div>
                <div class="item">CodeMakers</div>
                <div class="item">Best</div>
                <div class="item">Perseverance</div>
                <div class="item">Smart</div>
                <div class="item">Teamwork</div>
                <div class="item">United</div>
                <div class="item">Friendly</div>
                <div class="item">Communication</div>
            </div>
            <div aria-hidden="true" class="items marquee reverce">
                <div class="item">Soft Skill</div>
                <div class="item">Hard Skills</div>
                <div class="item">Clear</div>
                <div class="item">Quickly</div>
                <div class="item">CodeMakers</div>
                <div class="item">Best</div>
                <div class="item">Perseverance</div>
                <div class="item">Smart</div>
                <div class="item">Teamwork</div>
                <div class="item">United</div>
                <div class="item">Friendly</div>
                <div class="item">Communication</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font: 16px / 1.4 sans-serif;
    }
    .wrap{
        transform: rotate(-4deg);
    }
    h1 {
        font-size: 2em;
        font-weight: bold;
    }
    h1, p {
        margin-bottom: 20px;    
    }
    .items-wrap {
        position: relative;
        display: flex;
        overflow: hidden;
        user-select: none;
        gap: 20px;
    }
    .items {
        flex-shrink: 0;
        display: flex;
        gap: 20px;
        justify-content: space-around;
        min-width: 100%;
    }
    .item {
        border: gray 1px solid;
        border-radius: 50px;
        flex: 0 0 auto;
        padding: 10px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
        font-weight: bold;
        color: #fff;
        margin: 10px 0;
        transition: all 0.1s ease-in-out;
    }
    .marquee {
        animation: scroll 20s linear infinite;
    }
    .reverce {
        animation-direction: reverse;
    }
    .perfscan {
        margin: 20px 0;
        text-align: center;
        bottom: 0;
        background: #fff;
        padding: 5px;
    }
    .perfscan hr {
        border: solid #999;
        border-width: 1px 0 0 0;
        max-width: 50%;
        margin: 0 auto 20px;
    }
    .perfscan a {
        color: #000;
        font-weight: bold;
    }

    @keyframes scroll {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(calc(-100% - 20px));
        }
    }

</style>