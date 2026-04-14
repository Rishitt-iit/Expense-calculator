// 1. Firebase Config (Apna wala paste karo yahan)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    databaseURL: "https://YOUR_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// 2. Tab Logic (Page switch karne ke liye)
function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
}

// 3. Bot Logic
function runBot() {
    let input = document.getElementById('bot-input').value.toLowerCase();
    let box = document.getElementById('chat-box');
    box.innerHTML += `<p style="color:#f0f">Me: ${input}</p>`;
    
    let reply = "I am a combined AI. Ask me about expenses!";
    if(input.includes("hi")) reply = "Welcome to Cyber-Hub!";
    
    setTimeout(() => {
        box.innerHTML += `<p>Bot: ${reply}</p>`;
        document.getElementById('bot-input').value = "";
    }, 500);
}

// 4. Expense & Bhandara Logic (Common Function)
function loadCloudData(path, tableId, totalId = null) {
    db.ref(path).on('value', (snap) => {
        const data = snap.val();
        let html = "";
        let total = 0;
        for(let key in data) {
            html += `<tr><td>${data[key].name || data[key].item}</td><td>₹${data[key].amount || data[key].price}</td></tr>`;
            total += parseInt(data[key].amount || data[key].price);
        }
        document.getElementById(tableId).innerHTML = html;
        if(totalId) document.getElementById(totalId).innerText = total;
    });
}

// Initialize Loads
loadCloudData('expenses/myUser', 'exp-body');
loadCloudData('bhandara', 'bh-body', 'bh-total');

// Save Functions
function saveExpense() {
    let item = document.getElementById('exp-item').value;
    let price = document.getElementById('exp-price').value;
    db.ref('expenses/myUser').push({item, price});
}

function saveBhandara() {
    let name = document.getElementById('bh-name').value;
    let amount = document.getElementById('bh-amt').value;
    db.ref('bhandara').push({name, amount});
}

function copyLink() {
    let link = window.location.href + "?view=myUser";
    navigator.clipboard.writeText(link);
    alert("Shareable Link Copied!");
}
