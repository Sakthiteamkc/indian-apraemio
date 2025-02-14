let count = 0;
const username = prompt("Enter your Telegram username:").trim();

if (!username) {
    alert("Username is required!");
} else {
    async function incrementCount() {
        count++;
        document.getElementById("count").innerText = count;

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbxvMoV6UZ7wa4SuHGAqo4Utp3WMYgwoBD2_Pd8eFRWK_2VmkOS_wjPlUF3b-l_kOzjfxQ/exec', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, count })
            });

            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error("Error sending data:", error);
        }
    }
}
