const textSnippets = [
  "The sun began to rise over the horizon, painting the sky in shades of orange and pink. As the first light of dawn broke through the trees, the world stirred awake. Birds chirped melodiously, welcoming the new day, while a gentle breeze rustled the leaves.",
  "In a small village, people started their daily routines. Farmers prepared their fields, and shopkeepers opened their doors to welcome customers. Children, filled with energy, ran outside to play, their laughter echoing through the streets.",
  "Amidst this lively scene, a sense of calm prevailed. The simplicity of life in the village reminded everyone of the beauty of nature and the joy of community. Each day brought new challenges, but also new opportunities to connect and grow together.",
  "As the sun climbed higher in the sky, casting its warm glow on everything below, the village came alive with activity, each person contributing their unique story to the tapestry of life.",
  "Communication is key in our interconnected world. With just a few clicks, we can reach friends and family across the globe, sharing thoughts and experiences. However, it’s vital to balance our digital lives with real-world connections, nurturing relationships that enrich our existence.",
  "As we navigate through life, embracing both the challenges and joys, we grow stronger and more resilient. Every experience teaches us valuable lessons, shaping who we are and who we aspire to be.",
  "As the day unfolds, the clouds begin to part, revealing a brilliant sunset. Hues of orange, pink, and purple paint the sky, reminding us of the beauty in fleeting moments. Nature has a way of captivating our hearts, encouraging us to pause and appreciate the simple pleasures in life."
];

export const getRandomText = () => {
    return textSnippets[Math.floor(Math.random() * textSnippets.length)];
  };
  