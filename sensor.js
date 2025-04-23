function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Set vitals
  const heartRate = randomValue(70, 100);
  const pulse = randomValue(70, 100);
  const bp = `${randomValue(110, 130)}/${randomValue(70, 90)}`;
  
  document.getElementById("heartRate").innerText = `${heartRate} bpm`;
  document.getElementById("pulse").innerText = `${pulse} bpm`;
  document.getElementById("bp").innerText = `${bp} mmHg`;
  
  // Generate chart data
  const ctx = document.getElementById("chart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ['0s', '5s', '10s', '15s', '20s', '25s', '30s', '35s', '40s', '60s'],
      datasets: [{
        label: "Heart Rate",
        data: Array.from({ length: 10 }, () => randomValue(40, 100)),
        borderColor: "#45a0ff",
        borderWidth: 2,
        fill: false,
        tension: 0.4
      }]
    },
    options: {
      scales: {
        y: {
          min: 30,
          max: 120
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
  
  // Alert status
  const statusDiv = document.getElementById("status");
  ["Normal", "Warning", "Critical"].forEach((status) => {
    const div = document.createElement("div");
    div.className = status.toLowerCase() === "normal" ? "green" :
                    status.toLowerCase() === "warning" ? "yellow" : "red";
    div.innerText = status;
    statusDiv.appendChild(div);
  });
  
  // Logs
  const logsDiv = document.getElementById("logs");
  for (let i = 0; i < 5; i++) {
    const hr = randomValue(70, 100);
    const bpLog = `${randomValue(110, 130)}/${randomValue(70, 90)}`;
    logsDiv.innerHTML += `<p>Heart Rate: ${hr} bpm<br>Pulse: ${bpLog}</p>`;
  }
  