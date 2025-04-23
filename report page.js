// Line chart (accident trends)
const ctx1 = document.getElementById('lineChart').getContext('2d');
new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['Tue', 'Wed', 'Thu', 'Sat', 'Sa', '3r', 'M'],
    datasets: [{
      label: 'Accidents',
      data: [5, 7, 4, 9, 6, 5, 8],
      borderColor: 'lightblue',
      backgroundColor: 'transparent',
      tension: 0.4
    }]
  },
  options: {
    scales: {
      y: { beginAtZero: true, grid: { color: '#2e3d53' } },
      x: { grid: { color: '#2e3d53' } }
    },
    plugins: { legend: { display: false } }
  }
});

// Pie chart (response time analysis)
const ctx2 = document.getElementById('pieChart').getContext('2d');
new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: ['NH48', 'NH44', 'Ring Road'],
    datasets: [{
      data: [40, 35, 25],
      backgroundColor: ['#3b82f6', '#06b6d4', '#f59e0b']
    }]
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
        labels: { color: 'white' }
      }
    }
  }
});

// Heatmap setup using Leaflet.js
const map = L.map('map').setView([22.9734, 78.6569], 5); // Centered on India

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Sample heat data [lat, lon, intensity]
const heatData = [
  [28.6139, 77.2090, 0.5], // Delhi
  [19.0760, 72.8777, 0.8], // Mumbai
  [22.5726, 88.3639, 0.6], // Kolkata
  [13.0827, 80.2707, 0.4]  // Chennai
];

L.heatLayer(heatData, { radius: 25 }).addTo(map);
