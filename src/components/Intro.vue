<template>
    <div>
        <p class="bubble speech" v-if="show1">Hello, my name is weather-bot and, theoretically, I can tell you about the next five days of weather.</p>
        <p class="bubble speech" v-if="show2">How do I know?  Science and such.</p>
        <p class="bubble speech" v-if="show3">Ready?</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            show1: true,
            show2: false,
            show3: false
        }
    }
}
</script>
<style scoped>
p.bubble {
	position: relative;
	width: 300px;
	text-align: center;
	line-height: 1.4em;
	margin: 40px auto;
	background-color: #fff;
	border: 8px solid #333;
	border-radius:5px;

	padding: 10px;
	font-size: large;
}

p.thought {
	width: 300px;
	border-radius: 200px;
	padding: 30px;
}

p.bubble:before,
p.bubble:after {
	content: " ";
	position: absolute;
	width: 0;
	height: 0;
}

p.speech:before {
	left: 30px;
	bottom: -50px;
	border: 25px solid;
	border-color: #333 transparent transparent #333;
}

p.speech:after {
	left: 38px;
	bottom: -30px;
	border: 15px solid;
	border-color: #fff transparent transparent #fff;
}
</style>