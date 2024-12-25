console.log("JavaScript is working!");

document.addEventListener('DOMContentLoaded', function() {
    const snowContainer = document.getElementById('snowContainer');
    const numberOfSnowflakes = 50; // හිම පියලි ගණන

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * 100 + 'vw'; // තිරස් පිහිටීම
        snowflake.style.top = -10 + 'px'; // සිරස් පිහිටීම (උඩින් පටන් ගන්න)
        snowflake.style.animationDuration = Math.random() * 5 + 5 + 's'; // වැටෙන වේගය
        snowflake.style.opacity = Math.random(); // පෙනෙන ප්‍රමාණය
        snowflake.style.transform = `scale(${Math.random()})`; // ප්‍රමාණය වෙනස් කිරීම
        snowContainer.appendChild(snowflake);

        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
        });
    }

    function startSnowing() {
         setInterval(createSnowflake, 100); // නව හිම පියලි සෑදීමේ වේගය
    }

    startSnowing();
});