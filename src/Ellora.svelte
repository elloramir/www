<script>
    export let name = 'UNAMED';

    const gibbers = [
        'Butterfly', 'Chocolate', 'Dangerous',
        'Elegantly', 'Excellent', 'Important',
        'Knowledge', 'Adventure', 'Beautiful',
        'Confident', 'Delicious', 'Fascinate',
        'Brilliant', 'Wonderful', 'Happiness',
    ];

    function replaceName(index, rep) {
        name = name.slice(0, index) + rep + name.slice(index + rep.length);
    }

    function gibberish(standard, delay=1000) {
        let choose = standard || name;
        while(choose == name)
            choose = gibbers[Math.floor(Math.random() * gibbers.length)];

        for (let i = 0; i < choose.length; i++)
            setTimeout(replaceName, i * 100, i, choose[i]);

        setTimeout(gibberish, choose.length * 100 + delay);
    }

    setTimeout(gibberish, 1000, 'Elloramir', 5000);
</script>

<h1>{name}</h1>

<style>
h1 {
	font-family: 'Comic Sans MS', cursive, sans-serif;
	font-size: 3rem;

}
</style>