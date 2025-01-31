const trainingData = [
    { input: "Who warned Caesar?", output: "The soothsayer warned him: 'Beware the Ides of March!'" },
    { input: "What did Brutus say before stabbing Caesar?", output: "He said, 'I loved Caesar, but I loved Rome more.'" },
    { input: "What were Caesar's last words?", output: "Et tu, Brute? Then fall, Caesar!" },
    { input: "Who was Cassius?", output: "Cassius was a senator who conspired to kill Caesar." },
    { input: "How did Mark Antony react to Caesar’s death?", output: "He pretended to support the conspirators but later turned the people against them." },
    { input: "What is the meaning of 'Et tu, Brute'?", output: "It means 'And you, Brutus?'—Caesar’s shock at Brutus' betrayal." },
    { input: "Why did Brutus kill Caesar?", output: "He believed it was for the good of Rome, fearing Caesar would become a tyrant." },
    { input: "Who gave the famous funeral speech?", output: "Mark Antony, who turned the crowd against the conspirators with his rhetoric." },
    { input: "What did Antony say in his speech?", output: "'Friends, Romans, countrymen, lend me your ears; I come to bury Caesar, not to praise him.'" },
    { input: "How did Caesar die?", output: "He was stabbed 23 times by the conspirators, including Brutus and Cassius." }
];

const net = new brain.recurrent.LSTM({
    hiddenLayers: [20],
    activation: 'sigmoid'
});

net.train(trainingData, {
    iterations: 1000,
    log: true,
    logPeriod: 100
});

var btn = document.querySelector("button");
const messages = document.querySelector(".messages .message-area");

btn.addEventListener("click", e => {
    var inpVal = document.querySelector("input").value;

    var itemss = document.createElement('span');
    itemss.innerHTML =  inpVal;
    itemss.style.backgroundColor = "grey";
    messages.appendChild(itemss);
    window.scrollTo(0, document.body.scrollHeight);
    var msg = net.run(inpVal);
    var items = document.createElement('span');
    items.innerHTML =  msg;
    messages.appendChild(items);
    window.scrollTo(0, document.body.scrollHeight);
});

