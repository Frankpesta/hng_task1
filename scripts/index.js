document.addEventListener("DOMContentLoaded", () => {
	function updateTime() {
		const now = new Date();
		const utcTime = now.toUTCString().split(" ")[4];
		const day = now.toLocaleString("en-US", { weekday: "long" });
		document.getElementById("time").textContent = utcTime;
		document.getElementById("day").textContent = day;
	}

	updateTime();
	setInterval(updateTime, 60000); // Update time every minute
});
