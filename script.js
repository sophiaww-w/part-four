// Sample Data
const orgData = [
    { 
        name: "CARE PROJECT", 
        city: "NYC, NY", 
        lat: 40.71, lng: -74.00, 
        goal: "$1,000", raised: "$2,500",
        needs: ["Food", "Water", "Gifts for Christmas"],
        desc: "Supporting families in the lower East Side through winter months."
    },
    { 
        name: "TECH AID", 
        city: "Los Angeles, CA", 
        lat: 34.05, lng: -118.24, 
        goal: "$5,000", raised: "$800",
        needs: ["Laptops", "Wifi Hubs"],
        desc: "Bridging the digital divide for students."
    }
];

// Initialize Globe
const world = Globe()
    (document.getElementById('globeViz'))
    .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
    .backgroundColor('rgba(0,0,0,0)')
    .htmlElementsData(orgData)
    .htmlElement(d => {
        const el = document.createElement('div');
        el.className = 'custom-marker';
        el.onclick = () => showDetails(d);
        return el;
    })
    .width(window.innerWidth)
    .height(600);

// Auto-rotate
world.controls().autoRotate = true;
world.controls().autoRotateSpeed = 0.5;

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
}

function showDetails(data) {
    document.getElementById('org-name').innerText = data.name;
    document.getElementById('org-location').innerText = data.city;
    document.getElementById('org-description').innerText = data.desc;
    document.getElementById('org-goal').innerText = data.goal;
    document.getElementById('org-raised').innerText = data.raised;
    
    // Fill needs list
    const list = document.getElementById('org-needs');
    list.innerHTML = "";
    data.needs.forEach(n => {
        const li = document.createElement('li');
        li.innerText = n;
        list.appendChild(li);
    });

    showPage('details-page');
}

// Populate "View All" List
const listGrid = document.getElementById('org-list');
orgData.forEach(d => {
    const item = document.createElement('div');
    item.style.cursor = "pointer";
    item.style.padding = "10px";
    item.innerHTML = `<span style="color:red">●</span> ${d.name} . ${d.city}`;
    item.onclick = () => showDetails(d);
    listGrid.appendChild(item);
});
