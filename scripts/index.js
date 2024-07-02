document.addEventListener("DOMContentLoaded", () => {
	function updateTime() {
		const now = new Date();
		const utcTime = now.toUTCString().split(" ")[4];
		const day = now.toLocaleString("en-US", { weekday: "long" });

		console.log("UTC Time:", utcTime); // Debug
		console.log("Day:", day); // Debug

		document.getElementById("time").textContent = utcTime;
		document.getElementById("day").textContent = day;
	}

	updateTime();
	setInterval(updateTime, 60000); // Update time every minute
});
