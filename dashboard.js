let selectedRole = '';
let selectedDomain = '';
let selectedType = '';

document.querySelector('.select-role-btn').addEventListener('click', function() {
    document.querySelector('.role-options').style.display = 'block';
    document.querySelector('.select-role-btn').style.display = 'none';
});

function selectRole(role) {
    selectedRole = role;
    document.querySelector('.role-options').style.display = 'none';
    document.querySelector('.select-domain-btn').style.display = 'block';
}

document.querySelector('.select-domain-btn').addEventListener('click', function() {
    document.querySelector('.domain-options').style.display = 'block';
    document.querySelector('.select-domain-btn').style.display = 'none';
});

function selectDomain(domain) {
    selectedDomain = domain;
    document.querySelector('.domain-options').style.display = 'none';
    document.querySelector('.select-type-btn').style.display = 'block';
}

document.querySelector('.select-type-btn').addEventListener('click', function() {
    document.querySelector('.type-options').style.display = 'block';
    document.querySelector('.select-type-btn').style.display = 'none';
});

function selectInterviewType(type) {
    selectedType = type;
    document.querySelector('.type-options').style.display = 'none';
    startInterview();
}

function startInterview() {
    // Replace this with an actual call to your backend to generate a question
    const question = `Interview question for a ${selectedRole} in ${selectedDomain} (type: ${selectedType})`;
    addChatMessage('Bot', question);
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    addChatMessage('You', userInput);
    document.getElementById('user-input').value = '';

    // Replace with actual evaluation from backend
    setTimeout(() => {
        const evaluation = `Evaluating your answer to: "${userInput}"`;
        addChatMessage('Bot', evaluation);
    }, 1000);
}

function addChatMessage(sender, message) {
    const chatLog = document.getElementById('chat-log');
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${message}`;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}
