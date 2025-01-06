const quote = document.querySelector('.quote');
const button = document.querySelector('.generate-quote-button');

const quoteList = ['Do everything by hand, even when using the computer.', 'Life is suffering. It is hard. The world is cruel. But still, you find reasons to keep living', 'The greatness of a mind is determined by the depth of its suffering', 'You must see with eyes unclouded by hate. See the good in that which is evil, and the evil in that which is good. Pledge yourself to neither side, but vow instead to preserve the balance that exists between the two', `Many of my movies have strong female leads - brave, self-sufficient girls that don't think twice about fighting for what they believe with all their heart. They'll need a friend, or a supporter, but never a savior. Any woman is just as capable of being a hero as any man.`, `I would like to make a film to tell children "it's good to be alive".`, 'The concept of portraying evil and then destroying it - I know this is considered mainstream, but I think it is rotten. This idea that whenever something evil happens someone particular can be blamed and punished for it, in life and in politics is hopeless.', 'Modern life is so thin and shallow and fake. I look forward to when developers go bankrupt, Japan gets poorer and wild grasses take over.', 'Is someone different at age 18 or 60? I believe one stays the same.', 'Life is a winking light in the darkness.', 'Always believe in yourself. Do this and no matter where you are, you will have nothing to fear.', 'We depict hatred, but it is to depict that there are more important things. We depict a curse, to depict the joy of liberation.', 'But remember this, Japanese boy... airplnes are not tools for war. They are not for making money. Airplanes are beautiful dreams. Engineers turn dreams into reality.',  'Our lives are like the wind... or like sounds. We come into being, resonate with each other... Then fade away.'];

let totalQuotes = quoteList.length;

function getQuote() {
    const previousIndex = localStorage.getItem('previousQuote');
    const quoteIndex = Math.floor(Math.random() * totalQuotes);
    if (quoteIndex === previousIndex) {
        quoteIndex++;
        localStorage.setItem('previousQuote', quoteIndex)
    } else {
        localStorage.setItem('previousQuote', quoteIndex);
    }

    return quote.innerText = quoteList[quoteIndex];
}

let quoteText = button.addEventListener('click', getQuote);

