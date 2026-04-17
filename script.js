// 1. Data for your organizations
const orgs = [
    { name: "Clean Water Initiative", city: "Nairobi, Kenya", lat: -1.286, lng: 36.817, goal: "$5,000", raised: "$1,200", desc: "Providing filters to rural schools." },
    { name: "City Meals", city: "NYC, NY", lat: 40.712, lng: -74.006, goal: "$1,000", raised: "$2,500", desc: "Feeding the homeless in lower Manhattan." },
    { name: "Tech for Kids", city: "Los Angeles, CA", lat: 34.052, lng: -118.243, goal: "$10,000", raised: "$4,000", desc: "Donating laptops to local libraries." }
];

// 2. Initialize the Globe
const world = Globe()
    (document.getElementById('globeViz'))
    .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
    .pointsData(orgs)
    .pointColor(() => 'red')
    .pointRadius(0.5)
    .onPointClick(point => {
        showDetails(point);
    });

// 3. Navigation Logic
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
}

function showDetails(org) {
    document.getElementById('org-name').innerText = org.name;
    document.getElementById('org-location').innerText = org.city;
    document.getElementById('org-description').innerText = org.desc;
    document.getElementById('org-goal').innerText = org.goal;
    document.getElementById('org-raised').innerText = org.raised;
    showPage('details-page');
}

// 4. Populate the "View All" List
const listContainer = document.getElementById('org-list');
orgs.forEach(org => {
    const li = document.createElement('li');
    li.innerText = `${org.name} - ${org.city}`;
    li.onclick = () => showDetails(org);
    listContainer.appendChild(li);
});
