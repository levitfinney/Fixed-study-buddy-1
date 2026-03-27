function generateStudy() {
    let topic = document.getElementById("topicInput").value.trim();
    let output = document.getElementById("output");

    if (!topic) {
        output.innerHTML = "❌ Enter a topic first.";
        return;
    }

    let explanation = explainTopic(topic);
    let breakdown = breakDown(topic);
    let questions = generateQuestions(topic);

    output.innerHTML = `
        <h2>📖 ${topic}</h2>

        <h3>🧠 Explanation</h3>
        <p>${explanation}</p>

        <h3>📌 Study Guide</h3>
        <ul>${breakdown}</ul>

        <h3>❓ Quiz</h3>
        <ul>${questions}</ul>
    `;
}

function explainTopic(topic) {
    let t = topic.toLowerCase();

    if (t.includes("photosynthesis")) {
        return "Photosynthesis is the process plants use to convert sunlight into energy using carbon dioxide and water.";
    }
    if (t.includes("gravity")) {
        return "Gravity is a force that pulls objects toward each other, keeping planets in orbit and objects on Earth.";
    }
    if (t.includes("atom")) {
        return "An atom is the smallest unit of matter, made of protons, neutrons, and electrons.";
    }
    if (t.includes("energy")) {
        return "Energy is the ability to do work, and it exists in forms like kinetic, thermal, and chemical.";
    }

    return `${topic} is a concept that can be understood by learning its definition, how it works, and where it is used in real life.`;
}

function breakDown(topic) {
    return `
        <li>Definition of ${topic}</li>
        <li>How ${topic} works</li>
        <li>Important components</li>
        <li>Real-world examples</li>
        <li>Why ${topic} matters</li>
    `;
}

function generateQuestions(topic) {
    return `
        <li>What is ${topic}?</li>
        <li>How does ${topic} work?</li>
        <li>Why is ${topic} important?</li>
        <li>Give an example of ${topic}.</li>
    `;
}
