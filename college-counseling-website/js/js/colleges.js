// College data based on degrees
const collegesData = {
    MBA: [
        { name: 'IIM Ahmedabad', fee: '₹20 L', lpa: '₹28 LPA' },
        { name: 'IIM Bangalore', fee: '₹21 L', lpa: '₹29 LPA' },
        { name: 'XLRI Jamshedpur', fee: '₹18 L', lpa: '₹25 LPA' }
    ],
    BBA: [
        { name: 'Christ University', fee: '₹5 L', lpa: '₹8 LPA' },
        { name: 'NMIMS Mumbai', fee: '₹6 L', lpa: '₹10 LPA' }
    ],
    BTech: [
        { name: 'IIT Bombay', fee: '₹10 L', lpa: '₹24 LPA' },
        { name: 'IIT Delhi', fee: '₹9 L', lpa: '₹23 LPA' },
        { name: 'BITS Pilani', fee: '₹15 L', lpa: '₹18 LPA' }
    ],
    Medical: [
        { name: 'AIIMS Delhi', fee: '₹2 L', lpa: '₹12 LPA' },
        { name: 'CMC Vellore', fee: '₹3 L', lpa: '₹10 LPA' }
    ]
};

// Function to load the correct colleges based on the degree
function loadColleges(degree) {
    const collegeList = document.getElementById('college-list');
    const degreeName = document.getElementById('degree-name');
    degreeName.textContent = degree;

    const colleges = collegesData[degree];

    if (colleges) {
        collegeList.innerHTML = '';
        colleges.forEach(college => {
            const collegeItem = `
                <div class="college-item">
                    <h2>${college.name}</h2>
                    <p>Fee: ${college.fee}</p>
                    <p>Average LPA: ${college.lpa}</p>
                </div>
            `;
            collegeList.innerHTML += collegeItem;
        });
    } else {
        collegeList.innerHTML = '<p>No colleges found for this degree.</p>';
    }
}

// Get the degree from the URL
const params = new URLSearchParams(window.location.search);
const degree = params.get('degree');

// Load colleges for the selected degree
if (degree) {
    loadColleges(degree);
} else {
    document.getElementById('college-list').innerHTML = '<p>Please select a degree from the courses page.</p>';
}
